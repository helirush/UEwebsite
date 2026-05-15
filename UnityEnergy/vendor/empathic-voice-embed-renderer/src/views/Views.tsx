import { ConversationFrame } from '@/components/ConversationFrame';
import { OpenButton } from '@/components/OpenButton';
import { LayoutState, useLayoutStore } from '@/store/layout';
import { useLaunchSessionStore } from '@/store/launchSession';
import { ConversationScreen } from '@/views/ConversationScreen';
import { ErrorScreen } from '@/views/ErrorScreen';
import { IntroScreen } from '@/views/IntroScreen';
import { useVoice } from '@humeai/voice-react';
import { FC, useEffect, useRef, useState } from 'react';
import { match } from 'ts-pattern';

export type ViewsProps = Record<never, never>;
function readLaunchText(payload: Record<string, unknown>, key: string): string {
  const value = payload[key];
  return typeof value === 'string' ? value.trim() : '';
}

export const Views: FC<ViewsProps> = () => {
  const layoutState = useLayoutStore((store) => store.state);
  const open = useLayoutStore((store) => store.open);
  const close = useLayoutStore((store) => store.close);
  const launchSession = useLaunchSessionStore((store) => store.launchSession);

  const {
    connect,
    disconnect,
    status,
    error,
    sendSessionSettings,
    sendAssistantInput,
  } = useVoice();

  const [reconnectError, setReconnectError] = useState<string | null>(null);
  const hasSentInitialPromptRef = useRef(false);

  useEffect(() => {
    if (status.value === 'disconnected') {
      hasSentInitialPromptRef.current = false;
    }
  }, [status.value]);

  if (layoutState === LayoutState.CLOSED) {
    return (
      <>
        <OpenButton
          status={status.value}
          onPress={() => {
            open();
          }}
        />
      </>
    );
  }

  const onConnect = () => {
    setReconnectError(null);
    return connect()
      .then(() => {
        const contextPayload =
          launchSession &&
          typeof launchSession === 'object' &&
          launchSession.contextPayload &&
          typeof launchSession.contextPayload === 'object'
            ? launchSession.contextPayload
            : {};

        const sessionContext = readLaunchText(contextPayload, 'session_context');
        const engagementProtocol = readLaunchText(
          contextPayload,
          'engagement_protocol',
        );
        const knowledgeSeed = readLaunchText(
          contextPayload,
          'maxwellian_knowledge_seed',
        );
        const systemPromptText = readLaunchText(
          contextPayload,
          'system_prompt_text',
        );

        const runtimeContextText = [
          sessionContext,
          engagementProtocol,
          knowledgeSeed,
        ]
          .filter(Boolean)
          .join('\n\n');

        if (runtimeContextText || systemPromptText) {
          const settings: {
            context?: { text: string; type: 'persistent' };
            systemPrompt?: string;
          } = {};
          if (runtimeContextText) {
            settings.context = {
              text: runtimeContextText,
              type: 'persistent',
            };
          }
          if (systemPromptText) {
            settings.systemPrompt = systemPromptText;
          }
          sendSessionSettings(settings);
        }

        if (!hasSentInitialPromptRef.current) {
          const openingLine =
            readLaunchText(contextPayload, 'opening_line') ||
            'Nice to meet you. How can I help you learn about Unity Energy today?';
          const nameRequestLine =
            readLaunchText(contextPayload, 'name_request_line') ||
            'May I ask your name, dear sir or madam?';
          const initialAssistantLine = `${openingLine} ${nameRequestLine}`
            .replace(/\s+/g, ' ')
            .trim();
          if (initialAssistantLine) {
            sendAssistantInput(initialAssistantLine);
            hasSentInitialPromptRef.current = true;
          }
        }
        return { success: true } as const;
      })
      .catch((e) => {
        console.error(e);
        return { success: false } as const;
      });
  };

  return (
    <ConversationFrame
      onClose={() => {
        close();
        disconnect();
      }}
    >
      {match(status.value)
        .with('error', () => {
          return (
            <ErrorScreen
              errorType={error?.type ?? ('unknown' as const)}
              errorReason={error?.message ?? 'Unknown'}
              onConnect={() => {
                onConnect().then((res) => {
                  if (res.success === false) {
                    setReconnectError('Failed to reconnect');
                  }
                });
              }}
              onClose={() => {
                close();
              }}
              isConnecting={status.value === 'connecting'}
              ableToReconnect={reconnectError !== null}
            />
          );
        })
        .with('disconnected', 'connecting', () => {
          return (
            <IntroScreen
              onConnect={onConnect}
              isConnecting={status.value === 'connecting'}
            />
          );
        })
        .with('connected', () => {
          return <ConversationScreen />;
        })
        .exhaustive()}
    </ConversationFrame>
  );
};

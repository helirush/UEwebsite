import {
  parseClientToFrameAction,
  SocketConfig,
  WindowDimensions,
} from '@humeai/voice-embed-react';
import { FC, useEffect, useRef } from 'react';

export type MessageListenerProps = {
  onUpdateConfig?: (config: SocketConfig) => void;
  onCancel?: () => void;
  onOpen?: (dimensions: WindowDimensions) => void;
  onResize?: (dimensions: WindowDimensions) => void;
  onSessionLaunch?: (payload: unknown) => void;
};

export const MessageListener: FC<MessageListenerProps> = (props) => {
  const onUpdateConfig = useRef(props.onUpdateConfig);
  onUpdateConfig.current = props.onUpdateConfig;

  const onCancel = useRef(props.onCancel);
  onCancel.current = props.onCancel;

  const onOpen = useRef(props.onOpen);
  onOpen.current = props.onOpen;

  const onResize = useRef(props.onResize);
  onResize.current = props.onResize;
  const onSessionLaunch = useRef(props.onSessionLaunch);
  onSessionLaunch.current = props.onSessionLaunch;

  useEffect(() => {
    const listener = async (event: MessageEvent<unknown>) => {
      const rawData =
        event && event.data && typeof event.data === 'object'
          ? (event.data as { type?: unknown; payload?: unknown })
          : null;
      if (rawData && rawData.type === 'maxwellian_session_launch') {
        onSessionLaunch.current?.(rawData.payload);
        return;
      }
      const action = await parseClientToFrameAction(event.data)
        .then((res) => res)
        .catch(() => new Error());

      if (action instanceof Error) {
        return;
      }

      switch (action.type) {
        case 'update_config': {
          onUpdateConfig.current?.(action.payload);
          break;
        }
        case 'cancel': {
          onCancel.current?.();
          break;
        }
        case 'expand_widget_from_client': {
          onOpen.current?.(action.payload);
          break;
        }
        case 'send_window_size': {
          onResize.current?.(action.payload);
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

  return null;
};

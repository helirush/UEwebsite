import { Button } from '@/components/Button';
import { useDerivedLayoutState } from '@/store/useDerivedLayoutState';
import { cn } from '@/utils';
import { motion } from 'framer-motion';

export const IntroScreen = ({
  onConnect,
  isConnecting,
}: {
  onConnect: () => void;
  isConnecting: boolean;
}) => {
  const { isShortFrame } = useDerivedLayoutState();
  const characterDisplayName =
    typeof window !== 'undefined'
      ? (new URLSearchParams(window.location.search).get('character_name') || '').trim() || 'Clerk Maxwell'
      : 'Clerk Maxwell';

  return (
    <motion.div
      className={cn(
        'absolute inset-0 flex items-center justify-center px-6',
        isShortFrame ? 'py-5' : 'py-8',
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, translateY: -4 }}
      transition={{ duration: 2 }}
    >
      <div
        className={cn(
          'relative w-full max-w-[720px] overflow-hidden rounded-[30px] border border-white/25 bg-black/15 backdrop-blur-[1px]',
          isShortFrame ? 'px-7 py-7' : 'px-10 py-12',
        )}
      >
        <div className={cn('relative z-10 flex flex-col items-center', isShortFrame ? 'gap-4' : 'gap-6')}>
          <h2 className={cn('text-center text-white', isShortFrame ? 'text-[1.95rem]' : 'text-[2.35rem]')}>
            <span className="block">Speak with;</span>
            <span className="mt-1 block">{characterDisplayName}</span>
          </h2>
          <div className="w-fit">
            <motion.div
              variants={{
                initial: {
                  y: '100%',
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    opacity: {
                      duration: 0.7,
                      ease: 'easeInOut',
                    },
                    y: {
                      duration: 1.1,
                      ease: 'easeInOut',
                    },
                  },
                },
                exit: {
                  opacity: 0,
                },
              }}
            >
              <Button
                className={cn(
                  'h-[42px] border border-white/30 bg-black/65 px-6 text-[1rem] font-semibold text-white backdrop-blur-sm',
                  'hover:bg-black/72',
                )}
                onClick={() => {
                  onConnect();
                }}
                isLoading={isConnecting}
                loadingText={'Connecting...'}
              >
                Start Conversation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

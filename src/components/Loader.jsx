'use client'
import useColor from "@/hooks/useColor";
import { Html, useProgress } from "@react-three/drei";
import { ring2 } from 'ldrs'

ring2.register()

// Default values shown



export default function CanvasLoader() {
  const primary = useColor('primary')
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-[200px] h-[200px] border-2 text-primary text-4xl animate-spin border-transparent flex items-center justify-center border-t-secondary rounded-full">
          {/* <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg> */}
        </div>
      </div>
    </Html>
  );
};
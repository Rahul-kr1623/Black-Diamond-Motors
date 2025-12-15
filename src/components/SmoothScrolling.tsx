"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

// 👇 'any' use karne se Version 19 ka type conflict ignore ho jayega
function SmoothScrolling({ children }: { children: any }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
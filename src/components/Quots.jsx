"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function Quots() {
  return (
    <div
      className="flex h-[40rem] w-full items-center justify-center overflow-hidden bg-black">
      <MaskContainer
        revealText={
          <p
            className="mx-auto max-w-4xl text-center text-4xl font-bold text-white">
            Transforming problems into powerful digital solutions.
          </p>
        }
        className="h-[40rem] rounded-md border-none bg-black text-gray-400">
        Discover the power of{" "}
        <span className="text-yellow-500">innovative solutions</span> with cutting-edge
        technology and seamless development with
        <span className="text-yellow-500">powerful results</span>.
      </MaskContainer>
    </div>
  );
}

// Default export for easier importing
export default Quots;

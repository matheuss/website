"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Index = () => {
  const searchParams = useSearchParams();
  const brightness = searchParams.get("brightness") || "1.75"; // Default to 1.75 if not specified

  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/vercel-prism.jpeg"
        alt="Background"
        fill
        className="object-cover prism-image"
        priority
        style={{ "--image-brightness": brightness } as React.CSSProperties}
      />
    </div>
  );
};

export default Index;

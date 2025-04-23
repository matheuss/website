"use client";

import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/vercel-prism.jpeg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Index;

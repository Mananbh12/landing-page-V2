"use client";

import dynamic from "next/dynamic";

const BentoGrid = dynamic(() => import('./BentoGrid').then(mod => mod.BentoGrid), {
  ssr: false,
});

const BentoGridItem = dynamic(() => import('./BentoGrid').then(mod => mod.BentoGridItem), {
  ssr: false,
});

export { BentoGrid, BentoGridItem };

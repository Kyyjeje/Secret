"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LanyardScene = dynamic(() => import("@/components/ui/LanyardScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-primary" />
    </div>
  ),
});

export default function LanyardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative z-0 mx-auto flex h-[480px] w-full max-w-[420px] items-center justify-center -ml-6 sm:h-[560px] sm:max-w-[520px] sm:-ml-16 lg:h-[640px] lg:max-w-[640px] lg:-ml-40"
    >
      {/* Ambient glow behind the 3D scene */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-6 -z-10 rounded-[3rem] bg-[linear-gradient(135deg,rgba(108,99,255,0.3),rgba(0,229,255,0.2),rgba(255,77,157,0.2))] blur-3xl"
      />

      <LanyardScene photoSrc="/images/profile-photo.png" />
    </motion.div>
  );
}

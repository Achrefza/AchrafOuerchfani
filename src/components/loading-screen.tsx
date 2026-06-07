"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050506]"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        >
          <div className="relative h-20 w-20">
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10"
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-blue-400/70 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.05, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 grid place-items-center text-sm font-semibold tracking-tight text-white">AO</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

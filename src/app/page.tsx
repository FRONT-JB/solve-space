"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:gap-6 h-full py-4 md:py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r
             from-blue-500/35 to-purple-500/35 dark:from-blue-500/25 dark:to-purple-500/25 text-sm text-slate-800 dark:text-gray-400 cursor-default"
          >
            <BookOpen className="w-4 h-4" />
            문제를 해결하는 공간
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-slate-600 to-slate-500 dark:from-gray-100 dark:to-gray-300 text-transparent bg-clip-text cursor-default"
          >
            Discover & Share Code Snippets
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

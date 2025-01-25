"use client";

import { Input } from "@/components/ui/input";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Clock, Search, User } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ui/ThemeToggle";
export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-full pt-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r
             from-blue-500/10 to-purple-500/10 text-sm text-gray-400 cursor-default"
        >
          <BookOpen className="w-4 h-4" />
          문제를 해결하는 공간
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text cursor-default"
        >
          Discover & Share Code Snippets
        </motion.h1>

        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative flex items-center gap-2  min-w-0"
      >
        <Search className="absolute left-4 w-5 h-5 text-gray-400" />

        <Input
          type="text"
          placeholder="Search for code snippets"
          className="w-full h-12 pl-12 bg-[#1e1e2e]/80 hover:bg-[#1e1e2e] text-white
                  rounded-md border border-[#313244] hover:border-[#414155] transition-all duration-200
                  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        layout
      >
        <AnimatePresence mode="popLayout">
          {[1, 2, 3, 4, 5, 6, 7].map((snippet) => (
            <motion.div
              key={snippet}
              layout
              className="group relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="relative h-full bg-[#1e1e2e]/80 backdrop-blur-sm rounded-xl 
                border border-[#313244]/50 hover:border-[#313244] 
                transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 
                        group-hover:opacity-30 transition-all duration-500"
                          area-hidden="true"
                        />
                        <div
                          className="relative p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20
                         group-hover:to-purple-500/20 transition-all duration-500"
                        >
                          <Image
                            src="/javascript.png"
                            alt="javascript logo"
                            className="w-6 h-6 object-contain relative z-10"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded-md bg-gray-800/50">
                              <User className="size-3" />
                            </div>

                            <span className="truncate max-w-[150px]">
                              유저명
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="p-1 rounded-md bg-gray-800/50">
                            <Clock className="size-3" />
                          </div>
                          {new Date().toLocaleDateString("ko-KR", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                        알고리즘명
                      </h2>
                    </div>

                    <div className="relative group/code">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/5 rounded-lg opacity-0 group-hover/code:opacity-100 transition-all" />
                      <pre className="relative bg-black/30 rounded-lg p-4 overflow-hidden text-sm text-gray-300 font-mono line-clamp-3">
                        코드
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

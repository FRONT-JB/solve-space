"use client";

import { Input } from "@/components/ui/input";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Clock, Search, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  return (
    <>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative flex items-center gap-2"
        >
          <Search className="absolute left-4 w-5 h-5 dark:text-gray-400 text-slate-800 z-10" />

          <Input
            type="text"
            placeholder="Search for code snippets"
            className="w-full h-12 pl-12 dark:bg-[#1e1e2e]/80 dark:hover:bg-[#1e1e2e] text-white
                  rounded-md border dark:border-[#313244] dark:hover:border-[#414155] transition-all duration-200
                  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 md:pb-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((snippet) => (
              <motion.div
                key={snippet}
                layout
                className="group relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="relative h-full dark:bg-[#1e1e2e]/80 backdrop-blur-3xl rounded-xl 
                border dark:border-[#313244]/50 dark:hover:border-[#313244] 
                transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => push(`/snippets/${snippet}`)}
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
                              <div className="p-1 rounded-md dark:bg-gray-800/50 bg-gray-100">
                                <User className="size-3" />
                              </div>

                              <span className="truncate max-w-[150px] dark:text-white text-slate-800">
                                유저명
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="p-1 rounded-md dark:bg-gray-800/50 bg-gray-100">
                              <Clock className="size-3" />
                            </div>

                            <span className="dark:text-white text-slate-800">
                              {new Date().toLocaleDateString("ko-KR", {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold dark:text-white text-slate-800 mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                          알고리즘명
                        </h2>
                      </div>

                      <div className="relative group/code">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-500/30 dark:from-blue-500/15 dark:to-purple-500/5 rounded-lg opacity-0 group-hover/code:opacity-100 transition-all" />

                        <pre className="relative dark:bg-black/30 bg-slate-800/70 rounded-lg p-4 overflow-hidden text-sm text-gray-100 dark:text-gray-300 font-mono line-clamp-3">
                          {`// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];

// Map numbers to their squares
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);

// Filter for even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Calculate sum using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`}
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
    </>
  );
}

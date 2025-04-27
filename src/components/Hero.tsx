
import React from "react";
import { Button } from "@/components/ui/button";
import { CircleDot, Puzzle, BrainCog } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-16 sm:py-24 puzzle-pattern">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-full border border-msit-200 bg-white px-3 py-1 text-sm">
                <span className="text-msit-500 font-medium">MSIT Innovation</span>
                <div className="mx-1 h-1 w-1 rounded-full bg-msit-500"></div>
                <span className="text-muted-foreground">New Tech</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Solve Complex Problems with
              <span className="gradient-text"> TYBSync AI</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Harness the power of AI-driven synchronization to solve puzzles, analyze strategies, and boost your technical capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 min-[400px]:flex-row">
              <Button className="bg-msit-500 hover:bg-msit-600">
                Get Started
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <div className="flex gap-1">
                <div className="h-7 w-7 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center">
                  <CircleDot className="h-4 w-4 text-msit-500" />
                </div>
                <div className="h-7 w-7 -ml-2 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center">
                  <Puzzle className="h-4 w-4 text-msit-500" />
                </div>
                <div className="h-7 w-7 -ml-2 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center">
                  <BrainCog className="h-4 w-4 text-msit-500" />
                </div>
              </div>
              <div className="text-muted-foreground">
                Trusted by <span className="font-medium text-foreground">1,000+</span> tech innovators
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 animate-float">
            <div className="relative">
              <div className="absolute -left-8 -top-8 h-72 w-72 rounded-full bg-msit-100 blur-3xl opacity-70"></div>
              <div className="absolute -right-8 -bottom-8 h-72 w-72 rounded-full bg-msit-200 blur-3xl opacity-70"></div>
              <div className="relative rounded-xl border bg-white/80 backdrop-blur-sm p-6 shadow-xl">
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <div className="h-2.5 w-24 rounded-full bg-msit-100"></div>
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-msit-500 flex items-center justify-center">
                        <CircleDot className="h-6 w-6 text-white" />
                      </div>
                      <div className="h-2.5 w-32 rounded-full bg-msit-100"></div>
                    </div>
                    <div className="h-20 w-full rounded-lg bg-msit-50 flex items-center justify-center">
                      <Puzzle className="h-8 w-8 text-msit-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded bg-msit-100 flex items-center justify-center">
                        <div className="h-6 w-6 rounded bg-msit-300" />
                      </div>
                      <div className="h-16 rounded bg-msit-50 flex items-center justify-center">
                        <div className="h-6 w-6 rounded-full bg-msit-300" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-2.5 w-12 rounded-full bg-msit-100"></div>
                    <div className="h-2.5 w-12 rounded-full bg-msit-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

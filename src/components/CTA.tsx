
import React from "react";
import { Button } from "@/components/ui/button";
import { CircleDot, Puzzle } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-gradient-blue py-16 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2">
            <CircleDot className="h-6 w-6" />
            <Puzzle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold mb-4 max-w-2xl">
            Ready to Transform Your Problem-Solving Capabilities?
          </h2>
          <p className="text-msit-100 max-w-xl mb-8">
            Join thousands of tech professionals who are already using TYBSync to enhance their strategic thinking and problem-solving skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-msit-600 hover:bg-msit-100">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

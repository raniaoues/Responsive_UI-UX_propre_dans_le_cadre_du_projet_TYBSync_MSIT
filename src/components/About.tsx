
import React from "react";
import { CircleDot } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-msit-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <CircleDot className="h-5 w-5 text-msit-500" />
              <span className="font-medium text-msit-500">About MSIT TYBSync</span>
            </div>
            <h2 className="text-3xl font-bold">
              Empowering Tech Innovation Through 
              <span className="gradient-text"> Strategic Problem Solving</span>
            </h2>
            <p className="text-muted-foreground">
              At MSIT, we've developed TYBSync to revolutionize how technology professionals approach complex challenges. 
              Our platform combines chess-inspired strategic thinking with puzzle-solving methodologies, all enhanced by 
              cutting-edge AI technology.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-msit-500 mb-1">4000+</div>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-msit-500 mb-1">98%</div>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-msit-500 mb-1">12+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-msit-500 mb-1">250+</div>
                <p className="text-sm text-muted-foreground">Tech Partners</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 -left-4 -top-4 w-64 h-64 rounded-full bg-msit-200/50 blur-3xl"></div>
            <div className="bg-white rounded-xl overflow-hidden border shadow-lg">
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-gradient-blue p-6 flex items-center justify-center">
                  <CircleDot className="w-16 h-16 text-white" />
                </div>
                <div className="aspect-square flex flex-col justify-center p-6">
                  <h3 className="font-medium text-lg mb-2">Why TYBSync?</h3>
                  <p className="text-sm text-muted-foreground">
                    We combine strategic thinking with AI-powered analysis to deliver solutions that work.
                  </p>
                </div>
                <div className="aspect-square p-6 flex flex-col justify-center">
                  <h3 className="font-medium text-lg mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To empower tech professionals through innovative problem-solving tools.
                  </p>
                </div>
                <div className="aspect-square bg-msit-800 p-6 flex items-center justify-center text-white text-center">
                  <div>
                    <div className="text-xl font-bold mb-1">MSIT</div>
                    <div className="text-xs opacity-80">EST. 2012</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

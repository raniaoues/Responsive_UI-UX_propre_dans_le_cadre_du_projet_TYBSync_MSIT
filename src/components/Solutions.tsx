
import React from "react";
import { Button } from "@/components/ui/button";
import { Puzzle, BrainCog, CircuitBoard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      icon: <Puzzle className="h-8 w-8 text-msit-500" />,
      title: "TYBSync Puzzle Solver",
      description: "Interactive tool for breaking down complex problems into manageable pieces",
      features: ["Pattern recognition", "Step-by-step solutions", "Visual mapping"],
      color: "bg-msit-50"
    },
    {
      icon: <BrainCog className="h-8 w-8 text-white" />,
      title: "AI Strategic Advisor",
      description: "Advanced AI system that provides tailored strategic recommendations",
      features: ["Personalized insights", "Decision support", "Learning algorithms"],
      color: "bg-msit-600"
    },
    {
      icon: <CircuitBoard className="h-8 w-8 text-msit-500" />,
      title: "Tech Integration Platform",
      description: "Seamless connectivity between your existing tools and TYBSync capabilities",
      features: ["API connections", "Data synchronization", "Workflow integration"],
      color: "bg-msit-50"
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how TYBSync's innovative solutions can transform your approach to technical challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className={`overflow-hidden border-0 shadow-lg card-hover ${index === 1 ? 'md:-mt-6' : ''}`}>
              <div className={`${solution.color} p-6 flex items-center justify-center`}>
                {solution.icon}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-msit-500"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={index === 1 ? "default" : "outline"} className={index === 1 ? "bg-msit-500 hover:bg-msit-600 w-full" : "w-full"}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

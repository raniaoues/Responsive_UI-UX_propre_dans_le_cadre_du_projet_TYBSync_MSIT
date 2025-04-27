
import React from "react";
import { 
  CircleDot, 
  Puzzle, 
  BrainCog, 
  CircuitBoard,
  Database,
  Layers
} from "lucide-react";

const features = [
  {
    icon: <CircleDot className="h-6 w-6 text-msit-500" />,
    title: "Strategic Planning",
    description: "Advanced pawn movement analytics for optimizing your strategic approach in any technical challenge."
  },
  {
    icon: <Puzzle className="h-6 w-6 text-msit-500" />,
    title: "Problem Solving",
    description: "Interactive puzzle solutions that adapt to your skill level and learning style."
  },
  {
    icon: <BrainCog className="h-6 w-6 text-msit-500" />,
    title: "AI Enhancement",
    description: "Cognitive AI tools that learn from your interactions to provide personalized recommendations."
  },
  {
    icon: <CircuitBoard className="h-6 w-6 text-msit-500" />,
    title: "Tech Integration",
    description: "Seamless integration with existing technologies for enhanced workflow productivity."
  },
  {
    icon: <Database className="h-6 w-6 text-msit-500" />,
    title: "Data Synchronization",
    description: "Real-time synchronization across devices with intelligent data management capabilities."
  },
  {
    icon: <Layers className="h-6 w-6 text-msit-500" />,
    title: "Multi-level Solutions",
    description: "Layered problem-solving approaches for complex technical challenges and innovations."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            TYBSync combines AI-powered technology with strategic planning tools to help you solve complex problems efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border rounded-xl p-6 card-hover animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-msit-50 h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

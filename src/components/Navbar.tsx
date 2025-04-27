
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <CircleDot className="h-6 w-6 text-msit-500" />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-msit-500">TYB</span>Sync
          </span>
          <span className="ml-1 rounded-md bg-msit-800 px-1.5 py-0.5 text-xs font-medium text-white">MSIT</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="#" className="text-sm font-medium hover:text-msit-500 transition-colors">
            Home
          </Link>
          <Link to="#features" className="text-sm font-medium hover:text-msit-500 transition-colors">
            Features
          </Link>
          <Link to="#about" className="text-sm font-medium hover:text-msit-500 transition-colors">
            About
          </Link>
          <Link to="#solutions" className="text-sm font-medium hover:text-msit-500 transition-colors">
            Solutions
          </Link>
          <Button className="bg-msit-500 hover:bg-msit-600">Get Started</Button>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="container md:hidden py-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link 
              to="#" 
              className="text-sm font-medium hover:text-msit-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="#features" 
              className="text-sm font-medium hover:text-msit-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="#about" 
              className="text-sm font-medium hover:text-msit-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="#solutions" 
              className="text-sm font-medium hover:text-msit-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Button 
              className="bg-msit-500 hover:bg-msit-600 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

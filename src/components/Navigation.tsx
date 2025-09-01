'use client';

import Link from 'next/link';

interface NavigationProps {
  personalName: string;
}

export function Navigation({ personalName }: NavigationProps) {
  return (
    <header className="bg-slate-900/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          {personalName}
        </div>
        <div className="flex items-center">
          <Link 
            href="#experience" 
            className="text-slate-300 hover:text-blue-400 px-3 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-blue-900/20"
          >
            Experience
          </Link>
          <Link 
            href="#skills" 
            className="text-slate-300 hover:text-blue-400 px-3 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-blue-900/20"
          >
            Skills
          </Link>
          <Link 
            href="#projects" 
            className="text-slate-300 hover:text-blue-400 px-3 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-blue-900/20"
          >
            Projects
          </Link>
          <Link 
            href="#resume" 
            className="text-slate-300 hover:text-blue-400 px-3 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-blue-900/20"
          >
            Resume
          </Link>
          <Link 
            href="#contact" 
            className="text-slate-300 hover:text-blue-400 px-3 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-blue-900/20"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check, Play } from 'lucide-react';

export default function TerminalVisual({ onTriggerEasterEgg }) {
  const [activeCommand, setActiveCommand] = useState('whoami');
  const [copied, setCopied] = useState(false);

  const commandOutputs = {
    whoami: {
      cmd: 'whoami',
      output: [
        'bharat-sharma',
        'Final-Year B.Tech Information Technology Student @ AKTU (2023–2027)',
        'Based in Aligarh, Uttar Pradesh, India'
      ]
    },
    role: {
      cmd: 'role',
      output: [
        'Full-Stack Developer',
        'Specialization: MERN Stack | RESTful APIs | React Architectures',
        'Trainee: MERN Stack Developer Trainee @ QSpiders Noida'
      ]
    },
    stack: {
      cmd: 'stack --verbose',
      output: [
        'Frontend: React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5/CSS3',
        'Backend:  Node.js, Express.js, RESTful APIs, CRUD Architecture, Routing',
        'Database: MongoDB, Mongoose ODM, SQL Fundamentals',
        'AI/Cloud: Google Gemini API, Git/GitHub Version Control'
      ]
    },
    currently_learning: {
      cmd: 'cat currently_learning.md',
      output: [
        '• Advanced JavaScript: Closures, Currying, Debouncing, Prototypes, Event Loop',
        '• Data Structures & Algorithms: Java implementations, recursion, optimization',
        '• AI Application Engineering: Gemini API streaming integration & prompt workflows'
      ]
    },
    status: {
      cmd: 'status',
      output: [
        '● OPEN TO OPPORTUNITIES',
        'Ready for Internship & Entry-Level Software Engineering roles.',
        'Contact: bharatsharmabarauth@gmail.com'
      ]
    }
  };

  const handleCopy = () => {
    const text = commandOutputs[activeCommand].output.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16">
      <div className="rounded-2xl bg-dark-900/90 border border-white/10 shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs">
        
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-dark-950/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 font-sans font-medium text-[11px] flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-accent-cyan" />
              bharat@workstation:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Copy terminal output"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Quick Command Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-3 bg-dark-950/40 border-b border-white/5 text-[11px]">
          <span className="text-slate-500 mr-1 flex items-center gap-1">
            <Play className="w-2.5 h-2.5 text-accent-cyan" />
            Run command:
          </span>
          {Object.keys(commandOutputs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCommand(key)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeCommand === key
                  ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/40 font-semibold'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-transparent'
              }`}
            >
              ${key}
            </button>
          ))}
          <button
            onClick={onTriggerEasterEgg}
            className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all font-semibold ml-auto"
            title="Execute Easter Egg"
          >
            $ sudo hire bharat
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 space-y-3 min-h-[140px] text-slate-300">
          <div className="flex items-center gap-2 text-accent-cyan font-bold">
            <span className="text-emerald-400">bharat@workstation</span>
            <span className="text-slate-500">:</span>
            <span className="text-indigo-400">~</span>
            <span className="text-slate-400">$</span>
            <span className="text-slate-100">{commandOutputs[activeCommand].cmd}</span>
          </div>

          <div className="space-y-1 pl-2 border-l border-accent-cyan/20">
            {commandOutputs[activeCommand].output.map((line, idx) => (
              <div key={idx} className="leading-relaxed text-slate-300">
                {line.startsWith('●') ? (
                  <span className="text-emerald-400 font-bold">{line}</span>
                ) : line.startsWith('•') ? (
                  <span className="text-slate-200">{line}</span>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1 text-slate-600">
            <span className="text-emerald-500">➜</span>
            <span className="text-slate-400 font-mono text-[11px]">Ready for next command</span>
            <span className="inline-block w-2 h-4 bg-accent-cyan animate-pulse" />
          </div>
        </div>

      </div>
    </div>
  );
}

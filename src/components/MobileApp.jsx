import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle2, ShieldBan, BarChart3, Play, Square, Plus, Smartphone, Search, AlertTriangle, TrendingUp, Flame, Zap, Shield, ShieldAlert, Target, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState('focus');
  const [isFocusing, setIsFocusing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [strictLevel, setStrictLevel] = useState('hardcore'); // light, normal, hardcore
  const [toastMessage, setToastMessage] = useState(null);
  
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Design UI/UX Mockup', category: 'Work', priority: 'high', done: true },
    { id: 2, text: 'Write API Endpoints', category: 'Dev', priority: 'high', done: false },
    { id: 3, text: 'Read Chapter 4', category: 'Study', priority: 'medium', done: false },
  ]);

  const [appGroups, setAppGroups] = useState([
    {
      category: 'Social Media',
      apps: [
        { id: 'ig', name: 'Instagram', icon: '📸', blocked: true },
        { id: 'tt', name: 'TikTok', icon: '🎵', blocked: true },
        { id: 'tw', name: 'Twitter / X', icon: '🐦', blocked: true },
      ]
    },
    {
      category: 'Games & Entertainment',
      apps: [
        { id: 'yt', name: 'YouTube', icon: '▶️', blocked: false },
        { id: 'nf', name: 'Netflix', icon: '🍿', blocked: true },
      ]
    }
  ]);

  // Timer logic & Fake Toasts
  useEffect(() => {
    let interval;
    if (isFocusing && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      // Randomly simulate blocking a distraction while focusing
      if (timeLeft % 15 === 0 && timeLeft !== 25 * 60) {
        showToast("Shield Active: Blocked Instagram attempt!");
      }
    } else if (timeLeft === 0) {
      setIsFocusing(false);
      setTimeLeft(25 * 60);
      showToast("Session Complete! Great Job.");
    }
    return () => clearInterval(interval);
  }, [isFocusing, timeLeft]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const toggleAppBlock = (catIndex, appId) => {
    const newGroups = [...appGroups];
    const appIndex = newGroups[catIndex].apps.findIndex(a => a.id === appId);
    newGroups[catIndex].apps[appIndex].blocked = !newGroups[catIndex].apps[appIndex].blocked;
    setAppGroups(newGroups);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = ((25 * 60 - timeLeft) / (25 * 60)) * 100;
  const strokeDasharray = 2 * Math.PI * 105; 
  const strokeDashoffset = strokeDasharray - (progress / 100) * strokeDasharray;

  // Stat Mocks
  const weeklyData = [40, 70, 100, 50, 85, 20, 10];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="flex flex-col h-full bg-[#050507] text-white relative font-sans overflow-hidden">
      
      {/* Background Glows */}
      <div className={clsx(
        "absolute inset-0 transition-opacity duration-1000 blur-[100px] pointer-events-none z-0",
        activeTab === 'stats' ? "bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.2),transparent_70%)]" :
        activeTab === 'block' ? "bg-[radial-gradient(circle_at_50%_-20%,rgba(239,68,68,0.2),transparent_70%)]" :
        isFocusing ? "bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.25),transparent_70%)]" 
                   : "bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.2),transparent_70%)]"
      )} />

      {/* Top Status Bar Mock */}
      <div className="h-12 w-full flex justify-between items-end px-7 pb-2 text-[11px] font-semibold tracking-wider text-white/80 z-20 relative bg-gradient-to-b from-black/80 to-transparent">
        <span>9:41</span>
        <div className="flex space-x-1.5 items-center">
          <Shield className="w-3 h-3 text-emerald-400" /> {/* BrainGuard Active Icon */}
          <div className="w-4 h-3 bg-white/90 rounded-[2px] ml-1"></div>
          <div className="w-3 h-3 bg-white/90 rounded-full"></div>
        </div>
      </div>

      {/* Header for non-focus tabs */}
      {activeTab !== 'focus' && (
        <div className="px-6 pt-4 pb-2 z-20 relative flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="font-bold tracking-tight text-lg">BrainGuard</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
            <Bell className="w-4 h-4 text-white/70" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 scrollbar-hide">
        <AnimatePresence mode="wait">
          
          {/* TAB: FOCUS */}
          {activeTab === 'focus' && (
            <motion.div 
              key="focus"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full px-6 pt-2 pb-24 relative"
            >
              <div className="absolute top-4 left-0 right-0 flex justify-center">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[10px] font-medium uppercase text-white/60">
                  <Flame className="w-3 h-3 text-orange-400" /> 3 Day Streak
                </span>
              </div>

              <div className="text-center mt-12 mb-2">
                <h2 className="text-3xl font-bold tracking-tight">Focus Zone</h2>
                <p className="text-white/50 text-sm mt-1">Deep work session active.</p>
              </div>

              {/* Advanced Circular Timer */}
              <div className="relative w-64 h-64 mx-auto my-6 flex items-center justify-center">
                {/* Glowing Aura */}
                <div className={clsx(
                  "absolute inset-0 rounded-full blur-3xl transition-colors duration-1000",
                  isFocusing ? "bg-emerald-500/40" : "bg-blue-600/30"
                )} />
                
                {/* Outer Dashed Ring (Decorative) */}
                <svg className="absolute inset-[-15px] w-[calc(100%+30px)] h-[calc(100%+30px)] transform -rotate-90 opacity-20 animate-[spin_60s_linear_infinite]">
                  <circle cx="143" cy="143" r="135" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
                </svg>

                <svg className="absolute inset-0 w-full h-full transform -rotate-90 z-10 drop-shadow-2xl">
                  <circle cx="128" cy="128" r="105" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <circle 
                    cx="128" cy="128" r="105" 
                    fill="none" 
                    stroke={isFocusing ? "#10b981" : "#3b82f6"} 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-linear"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                  />
                </svg>
                
                <div className="relative z-20 flex flex-col items-center mt-2">
                  <span className="text-[64px] leading-none font-light tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-mono">
                    {formatTime(timeLeft)}
                  </span>
                  <span className={clsx(
                    "text-[10px] mt-3 tracking-[0.3em] font-bold uppercase transition-colors flex items-center gap-1",
                    isFocusing ? "text-emerald-400" : "text-blue-400"
                  )}>
                    {isFocusing ? <><ShieldAlert className="w-3 h-3" /> Shield On</> : 'Ready'}
                  </span>
                </div>
              </div>

              {/* Task Linkage */}
              <div className="mt-auto mb-6 mx-1">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Current Objective</p>
                    <p className="text-sm font-medium text-white/90 truncate">{tasks.find(t => !t.done)?.text || 'Free Focus'}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => setIsFocusing(!isFocusing)}
                className={clsx(
                  "w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center transition-all duration-300 active:scale-95 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group",
                  isFocusing 
                    ? "bg-red-500/15 text-red-400 border border-red-500/40 hover:bg-red-500/25" 
                    : "bg-blue-600 text-white border border-blue-500 hover:bg-blue-500"
                )}
              >
                {!isFocusing && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />}
                {isFocusing ? (
                  <><Square className="w-5 h-5 mr-2 fill-current" /> Forfeit Session</>
                ) : (
                  <><Play className="w-5 h-5 mr-2 fill-current" /> Initialize Focus</>
                )}
              </button>
            </motion.div>
          )}

          {/* TAB: TASKS */}
          {activeTab === 'tasks' && (
            <motion.div 
              key="tasks"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full px-6 pt-2 pb-24"
            >
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">Today's Agenda</h2>
                <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20">{tasks.filter(t => t.done).length}/{tasks.length} Done</span>
              </div>
              
              <div className="space-y-3">
                {tasks.map(task => (
                  <motion.div 
                    layout
                    key={task.id} 
                    className={clsx(
                      "p-4 rounded-2xl flex items-center transition-all duration-300 border backdrop-blur-md",
                      task.done ? "bg-white/[0.02] border-white/5 opacity-50" : "bg-white/[0.05] border-white/10 shadow-lg"
                    )}
                    onClick={() => toggleTask(task.id)}
                  >
                    <div className={clsx(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-300 shrink-0",
                      task.done ? "border-emerald-500 bg-emerald-500" : "border-white/30"
                    )}>
                      {task.done && <CheckCircle2 className="w-4 h-4 text-black" />}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <span className={clsx(
                        "block text-sm transition-all duration-300 font-medium truncate",
                        task.done ? "text-white/40 line-through" : "text-white/90"
                      )}>
                        {task.text}
                      </span>
                      <div className="flex gap-2 mt-1.5">
                        <span className="text-[9px] px-1.5 py-0.5 rounded-sm bg-white/10 text-white/60 tracking-wide">{task.category}</span>
                        {!task.done && task.priority === 'high' && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-sm bg-red-500/20 text-red-400 border border-red-500/20 tracking-wide">High Priority</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-28 right-6 z-20">
                <button className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(59,130,246,0.4)] active:scale-90 transition-transform">
                  <Plus className="w-6 h-6 text-white" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB: SHIELD */}
          {activeTab === 'block' && (
            <motion.div 
              key="block"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full px-6 pt-2 pb-24"
            >
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Shield Configuration</h2>

              {/* Strictness Level Selector */}
              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl mb-6">
                <h3 className="text-[11px] uppercase tracking-widest text-white/50 mb-3">Protection Level</h3>
                <div className="flex gap-2 bg-black/40 p-1 rounded-xl">
                  {['light', 'normal', 'hardcore'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setStrictLevel(level)}
                      className={clsx(
                        "flex-1 py-2 text-xs font-medium rounded-lg transition-all capitalize",
                        strictLevel === level 
                          ? level === 'hardcore' ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-white/10 text-white"
                          : "text-white/40 hover:text-white/70"
                      )}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                {strictLevel === 'hardcore' && (
                  <p className="text-[10px] text-red-400/80 mt-3 flex items-start gap-1.5 leading-tight">
                    <AlertTriangle className="w-3 h-3 shrink-0" /> Focus sessions cannot be cancelled. Phone restart required to bypass blocklist.
                  </p>
                )}
              </div>

              {/* App Lists */}
              {appGroups.map((group, cIdx) => (
                <div key={group.category} className="mb-6">
                  <h3 className="text-[11px] uppercase tracking-widest text-white/50 mb-3 ml-1">{group.category}</h3>
                  <div className="space-y-2">
                    {group.apps.map(app => (
                      <div key={app.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-xl border border-white/5 shadow-inner">
                            {app.icon}
                          </div>
                          <span className="text-sm font-medium text-white/90">{app.name}</span>
                        </div>
                        {/* Custom Toggle */}
                        <button 
                          onClick={() => toggleAppBlock(cIdx, app.id)}
                          className={clsx(
                            "w-12 h-[26px] rounded-full relative transition-colors duration-300 ease-in-out border",
                            app.blocked ? "bg-red-500 border-red-400/50" : "bg-black border-white/20"
                          )}
                        >
                          <motion.div 
                            layout
                            initial={false}
                            animate={{ x: app.blocked ? 24 : 2 }}
                            className="w-5 h-5 rounded-full bg-white absolute top-[2px] shadow-sm"
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="w-full py-3 mt-2 rounded-xl border border-dashed border-white/20 text-white/50 text-sm font-medium hover:bg-white/5 hover:text-white/80 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add Custom App/Website
              </button>
            </motion.div>
          )}

          {/* TAB: STATS */}
          {activeTab === 'stats' && (
            <motion.div 
              key="stats"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full px-6 pt-2 pb-24"
            >
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Analytics</h2>

              {/* Big Metric */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 p-5 rounded-3xl mb-4 relative overflow-hidden">
                <TrendingUp className="absolute top-4 right-4 w-24 h-24 text-purple-500/10 -rotate-12" />
                <p className="text-xs text-purple-200/60 uppercase tracking-widest font-semibold mb-1">Total Focus Time</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-4xl font-bold text-white tracking-tighter">34.5</p>
                  <p className="text-sm text-purple-200/60 font-medium">Hours</p>
                </div>
                <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 rounded text-[10px] text-purple-300 font-medium border border-purple-500/20">
                  <span>↑ 12% vs last week</span>
                </div>
              </div>

              {/* Small Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl">
                  <ShieldBan className="w-5 h-5 text-red-400 mb-2" />
                  <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Distractions Blocked</p>
                  <p className="text-xl font-semibold text-white">142</p>
                </div>
                <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
                  <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Tasks Completed</p>
                  <p className="text-xl font-semibold text-white">28</p>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-3xl mb-4">
                <p className="text-xs text-white/50 mb-4 font-medium uppercase tracking-wider">Focus Consistency</p>
                <div className="flex justify-between items-end h-32 gap-2">
                  {weeklyData.map((val, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 gap-2">
                      <div className="w-full bg-white/5 rounded flex items-end relative overflow-hidden group">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${val}%` }}
                          transition={{ duration: 1, delay: i * 0.1, type: 'spring' }}
                          className={clsx(
                            "w-full rounded transition-colors duration-300",
                            val === 100 ? "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "bg-purple-400/40"
                          )}
                        />
                      </div>
                      <span className={clsx(
                        "text-[10px] font-medium",
                        val === 100 ? "text-purple-400" : "text-white/40"
                      )}>{days[i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Floating Toast Notification for "Blocked!" simulation */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-16 left-6 right-6 z-50 bg-red-500/90 backdrop-blur-md text-white p-3 rounded-2xl shadow-[0_10px_25px_rgba(239,68,68,0.4)] flex items-center gap-3 border border-red-400/50"
          >
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <p className="text-xs font-medium leading-tight">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glassmorphism Bottom Navigation */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-[#050507]/85 backdrop-blur-3xl border-t border-white/5 flex justify-around items-start pt-4 px-6 z-30 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {[
          { id: 'focus', icon: Timer, label: 'Focus', color: 'blue' },
          { id: 'tasks', icon: CheckCircle2, label: 'Tasks', color: 'emerald' },
          { id: 'block', icon: ShieldBan, label: 'Shield', color: 'red' },
          { id: 'stats', icon: BarChart3, label: 'Stats', color: 'purple' }
        ].map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center relative w-16 group"
            >
              {isActive && (
                <motion.div 
                  layoutId="navIndicator" 
                  className={clsx(
                    "absolute -top-4 w-8 h-[3px] rounded-b-full",
                    item.color === 'blue' ? "bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.8)]" :
                    item.color === 'emerald' ? "bg-emerald-500 shadow-[0_2px_8px_rgba(16,185,129,0.8)]" :
                    item.color === 'red' ? "bg-red-500 shadow-[0_2px_8px_rgba(239,68,68,0.8)]" :
                    "bg-purple-500 shadow-[0_2px_8px_rgba(168,85,247,0.8)]"
                  )} 
                />
              )}
              <item.icon 
                className={clsx(
                  "w-6 h-6 mb-1.5 transition-all duration-300", 
                  isActive ? `text-${item.color}-400 drop-shadow-[0_0_8px_currentColor]` : "text-white/30 group-hover:text-white/60"
                )} 
              />
              <span className={clsx(
                "text-[9px] font-semibold tracking-wide transition-colors duration-300",
                isActive ? `text-${item.color}-400` : "text-white/30"
              )}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Forced Focus Strict Mode Overlay Effect */}
      <AnimatePresence>
        {isFocusing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={clsx(
              "absolute inset-0 border-[4px] pointer-events-none z-40 mix-blend-screen transition-colors duration-1000",
              strictLevel === 'hardcore' ? "border-red-500/20" : "border-emerald-500/20"
            )}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileApp;

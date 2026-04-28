import React from 'react';

const PhoneFrame = ({ children }) => {
  return (
    <div className="relative mx-auto border-[#1c1c1e] bg-[#1c1c1e] border-[14px] rounded-[3.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8),_inset_0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-white/10 z-10 transition-transform duration-500 hover:scale-[1.01] flex flex-col" style={{ width: '390px', height: '844px', transformOrigin: 'center center', transform: 'scale(0.85) lg:scale(1)' }}>
      
      {/* Glare Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent rounded-[3rem] pointer-events-none z-50" />

      {/* Dynamic Island / Notch */}
      <div className="absolute top-3 inset-x-0 mx-auto w-32 h-8 bg-black rounded-full z-40 flex justify-end items-center px-2.5 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_-2px_4px_rgba(255,255,255,0.1)]">
        {/* Camera Lens */}
        <div className="w-3.5 h-3.5 bg-[#0f0f13] rounded-full border border-white/10 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)] flex items-center justify-center">
          <div className="w-1 h-1 bg-blue-500/30 rounded-full blur-[1px]"></div>
        </div>
      </div>
      
      {/* Hardware Buttons */}
      <div className="absolute h-20 w-1.5 bg-[#2c2c2e] rounded-r-xl -right-[15.5px] top-40 shadow-[inset_-1px_0_2px_rgba(255,255,255,0.15)] border-y border-r border-[#1c1c1e]"></div>
      
      {/* Action Button */}
      <div className="absolute h-10 w-1.5 bg-[#2c2c2e] rounded-l-xl -left-[15.5px] top-32 shadow-[inset_1px_0_2px_rgba(255,255,255,0.15)] border-y border-l border-[#1c1c1e]"></div>
      
      {/* Volume Buttons */}
      <div className="absolute h-16 w-1.5 bg-[#2c2c2e] rounded-l-xl -left-[15.5px] top-52 shadow-[inset_1px_0_2px_rgba(255,255,255,0.15)] border-y border-l border-[#1c1c1e]"></div>
      <div className="absolute h-16 w-1.5 bg-[#2c2c2e] rounded-l-xl -left-[15.5px] top-72 shadow-[inset_1px_0_2px_rgba(255,255,255,0.15)] border-y border-l border-[#1c1c1e]"></div>

      {/* Screen Container */}
      <div className="rounded-[3rem] overflow-hidden w-full h-full bg-black relative shadow-[inset_0_0_30px_rgba(0,0,0,1)]">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;

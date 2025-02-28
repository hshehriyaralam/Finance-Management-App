import React from 'react';

const ButtonComponent = ({ Name }) => {
  return (
    <button className="relative inline-block px-4 text-[#090909] text-lg font-semibold rounded-lg bg-[#e8e8e8] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-200 ease-in overflow-hidden z-10 hover:text-white hover:border-[#009087] active:text-gray-600 active:shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff] before:content-[''] before:absolute before:left-1/2 before:top-full before:w-[140%] before:h-[180%] before:bg-[rgba(0,0,0,0.05)] before:rounded-full before:transform before:-translate-x-1/2 before:scale-y-100 before:scale-x-[1.25] before:transition-all before:duration-500 before:delay-100 before:ease-[cubic-bezier(0.55,0,0.1,1)] before:z-[-1] after:content-[''] after:absolute after:left-[55%] after:top-[180%] after:w-[160%] after:h-[190%] after:bg-[#009087] after:rounded-full after:transform after:-translate-x-1/2 after:scale-y-100 after:scale-x-[1.45] after:transition-all after:duration-500 after:delay-100 after:ease-[cubic-bezier(0.55,0,0.1,1)] after:z-[-1] hover:before:top-[-35%] hover:before:bg-[#009087] hover:before:scale-y-130 hover:before:scale-x-80 hover:after:top-[-45%] hover:after:bg-[#009087] hover:after:scale-y-130 hover:after:scale-x-80">
      {Name}
    </button>
  );
};

export default ButtonComponent;
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-slate-700";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-black ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="mr-3 mt-2 h-1 bg-purple-500"
      ></motion.div>
    </button>
  );
};

export default TabButton;

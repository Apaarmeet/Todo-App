import { useState } from "react";
import { useAppDispatch } from "../app/hook";
import { hidePopup } from "../features/popupSlice";
import { addTodo } from "../features/todoSlice";
import { motion } from "framer-motion";

const CreateTodo = () => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = () => {
        dispatch(addTodo({ title, description }));
        dispatch(hidePopup());
    };

    return (
      <motion.div 
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-slate-800 w-80 p-6 grid rounded-lg shadow-slate-400 shadow-xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <svg 
            className="h-8 w-8 text-red-500 -mt-3 relative left-64 cursor-pointer" 
            onClick={() => dispatch(hidePopup())} 
            width="24" height="24" viewBox="0 0 24 24" 
            strokeWidth="2" stroke="currentColor" 
            fill="none" strokeLinecap="round" strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <line x1="18" y1="6" x2="6" y2="18" />  
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>

          <input
            className="m-2 bg-slate-300 placeholder:text-slate-500 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition focus:outline-none"
            placeholder="Title" 
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="m-2 bg-slate-300 placeholder:text-slate-500 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition focus:outline-none"
            placeholder="Description" 
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="mt-4 mx-auto rounded bg-slate-400 py-2 px-4 text-black transition-all shadow-sm hover:bg-slate-700 hover:text-gray-300"
          >
            Create Todo
          </button>
        </motion.div>
      </motion.div>
    );
};

export default CreateTodo;

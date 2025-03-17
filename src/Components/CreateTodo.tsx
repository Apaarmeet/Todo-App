import { useState } from "react";
import { useAppDispatch } from "../app/hook"
import { hidePopup } from "../features/popupSlice"
import { addTodo } from "../features/todoSlice";


const CreateTodo = () => {
    const dispatch = useAppDispatch();
    const [title,setTitle] =useState("")
    const [description,setDescription] =useState("")

    const handleClick = ()=>{
       dispatch(addTodo({title,description})) 
       dispatch(hidePopup())
        
    }
  
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-slate-800 w-80 p-6 grid rounded-lg shadow-slate-400 shadow-xl">
        <svg className="h-8 w-8 text-red-500 -mt-3 relative left-64" onClick={()=>{dispatch(hidePopup())}} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
          <input
            className="m-2 bg-slate-300 placeholder:text-slate-500 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Title" onChange={(e)=>setTitle(e.target.value)}
          />
          <input
            className="m-2 bg-slate-300 placeholder:text-slate-500 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Description" onChange={(e)=>setDescription(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="mt-4 mx-auto rounded bg-slate-400 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:text-gray-300 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Create Todo
          </button>
        </div>
      </div>
    );
  };
  
  export default CreateTodo;
  
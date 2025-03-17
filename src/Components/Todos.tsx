import { useAppDispatch, useAppSelector } from '../app/hook'
import { removeTodo, selectTodos } from '../features/todoSlice'

const Todos = () => {
    const todos = useAppSelector(selectTodos)
    const dispatch = useAppDispatch()
    function handleClick(index:number){
        dispatch(removeTodo(index))
    }

    return <div>
    {todos.map((todos, index) => (
        <div key={index} className="relative flex flex-col my-6 bg-indigo-500 shadow-sm border border-slate-200 rounded-lg w-96" >
          <h2  className="m-2 bg-slate-300 placeholder:text-slate-500 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">{todos.title}</h2>
          <h4 className="m-2 bg-slate-300 placeholder:text-slate-500 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">{todos.description}</h4>
          <button
            onClick={()=>{handleClick(index)}}
            className="mt-4 mx-auto rounded bg-slate-400 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:text-gray-300 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            delete Todo
          </button>
        </div>
      ))}
      </div>
  
}

export default Todos
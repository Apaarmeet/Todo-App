import { AnimatePresence } from "framer-motion";
import TopBar from "./Components/TopBar";
import CreateTodo from "./Components/CreateTodo";
import { useAppSelector } from "./app/hook";
import { selectPopup } from "./features/popupSlice";
import Todos from "./Components/Todos";

export default function App() {  
  const popup = useAppSelector(selectPopup);

  return (
    <div className="  bg-gray-300 min-h-screen flex">
      <div className="flex-grow">
      <TopBar />
      <AnimatePresence>
        {popup && <CreateTodo />}
      </AnimatePresence>
      <Todos/>
      </div>    
    </div>
  );
}

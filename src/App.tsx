import TopBar from "./Components/TopBar";
import CreateTodo from "./Components/CreateTodo";
import { useAppSelector } from "./app/hook";
import { selectPopup } from "./features/popupSlice";
import Todos from "./Components/Todos";


export default function App() {  
const popup = useAppSelector(selectPopup)

  return (
    <div className="h-svh bg-gray-300">
      <TopBar />
      {popup && <CreateTodo/>}
        <Todos/>    
    </div>
  );
}

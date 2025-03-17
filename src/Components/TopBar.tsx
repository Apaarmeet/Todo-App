import Button from './Button'
import { useAppDispatch } from '../app/hook';
import { showPopup } from '../features/popupSlice';



const TopBar = () => {
  const dispatch = useAppDispatch()
  const handleClick = ()=>{
    dispatch(showPopup())
  }
  
  return (
    <div className="flex justify-between p-6 border-b-4 border-indigo-500">
    <h1 className="text-3xl font-serif">Todo List</h1>
    <Button onClick={handleClick}>Create Todo</Button>
    </div>
  )
}

export default TopBar
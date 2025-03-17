
type ButtonProps={
  children: string;
  onClick:()=>void
}
function Button({children, onClick}:ButtonProps  ) {
  return (
    <button className="border border-black p-2  rounded-md bg-slate-400 font-semibold " 
    onClick={onClick}> {children} </button>
  )
}

export default Button
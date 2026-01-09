import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import Swal from 'sweetalert2'
import { House } from 'lucide-react';
import { AiFillCarryOut } from "react-icons/ai";

function App() {

  const showAlert = () => {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
  }

  const showSuccess = ()=>{
    toast.success('Successfully toasted!')
  }

  return (
    <>
      <h2 className='font-black jakarta flex items-center justify-center gap-10 my-10 opacity-60 text-amber-500 text-5xl'>
        <House size={40} />
        Planora
        <AiFillCarryOut size={35}/>
      </h2>

      <p className='mx-10 text-gray-500 text-center inter mb-10'>
        Plan Your Future
      </p>

      <button
        className="btn btn-primary"
        onClick={showAlert}
      >
        Show Alert
      </button>
      <button
        className="btn btn-secondary"
        onClick={showSuccess}
      >
        Show toast
      </button>
      <Toaster />
    </>
  )
}

export default App

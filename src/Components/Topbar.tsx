import { IoMenuOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoListOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../Images/Group 3.svg";
import { useGlobalContext } from "../Context/GlobalContext";

const Topbar = () => {
    const {open, setOpen} = useGlobalContext()

  return (
    <div className="flex justify-between items-center h-[4rem] w-full bg-white shadow-md fixed z-20 px-6">
      <div className="flex gap-4">
        {open? 
        <button onClick={() => setOpen(false)} className="text-2xl h-[2rem] w-[2rem] flex justify-center items-center bg-blue-100 rounded-full duration-500 hover:rotate-[360deg]">
            <IoMdClose/>
        </button> :
        <button onClick={() => setOpen(true)} className="text-2xl h-[2rem] w-[2rem] flex justify-center items-center bg-blue-100 rounded-full duration-500 hover:rotate-[360deg]">
            <IoMenuOutline/>
        </button>}
        <img src={logo} />
      </div>

      <div className="flex items-center gap-10">
        <NavLink to={"/home"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <IoHomeOutline className="text-2xl"/>
            <p>Home</p>
        </NavLink>
        <NavLink to={"/alerts"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <GoBell className="text-2xl"/>
            <p>Alerts</p>
        </NavLink>
        <NavLink to={"/tasks"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <IoListOutline className="text-2xl"/>
            <p>Tasks</p>
        </NavLink>
        <NavLink to={"/notifications"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <BsEnvelope className="text-2xl"/>
            <p>Notifications</p>
        </NavLink>
        <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[2.5rem] h-[2.5rem] rounded-full object-cover object-center" />

      </div>
    </div>
  )
}

export default Topbar

import Topbar from "../Components/Topbar"
import ProSideBar from "../Components/ProSideBar"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useGlobalContext } from "../Context/GlobalContext"


const Layout = () => {
  const {open} = useGlobalContext();
  return (
    <div>
      <Topbar/>
      <Toaster position="bottom-right" reverseOrder={false}/>
      <div className="flex w-full">
        <div>
          <ProSideBar />
        </div>
        <div className={open? "mt-[5rem] pl-[16.5rem] duration-1000": "mt-[5rem] pl-[6rem] duration-1000"}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout

import Topbar from "../Components/Topbar"
import ProSideBar from "../Components/ProSideBar"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"


const Layout = () => {
  
  return (
    <div className="flex flex-col">
      <Topbar/>
      <Toaster/>
      <div className="flex w-full">
        <ProSideBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout

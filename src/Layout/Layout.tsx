import Topbar from "../Components/Topbar"
import ProSideBar from "../Components/ProSideBar"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"


const Layout = () => {
  
  return (
    <div>
      <Topbar/>
      <div className="flex w-full">
        <ProSideBar />
        <Toaster position="bottom-right" reverseOrder={false}/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout

import Topbar from "../Components/Topbar"
import ProSideBar from "../Components/ProSideBar"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

const Layout = () => {
  return (
    <div>
      <Topbar/>
      
      <Toaster/>
      <ProSideBar/>
      <Outlet/>
    </div>
  )
}

export default Layout

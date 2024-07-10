import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const ManageControlsPage = () => {
    const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Controls" endRoute="Manage Controls" endRoutePath="/manage-controls"/>
      <p className="mt-4">Manage Controls</p>
    </div>
  )
}

export default ManageControlsPage

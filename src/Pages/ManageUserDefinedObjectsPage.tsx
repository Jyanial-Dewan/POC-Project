import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const ManageUserDefinedObjectsPage = () => {
    const {open} = useGlobalContext();
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Manage Administration" endRoute="Manage User Defined Objects" endRoutePath="/manage-user-defined-objects"/>
    </div>
  )
}

export default ManageUserDefinedObjectsPage

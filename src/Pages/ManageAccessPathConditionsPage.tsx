import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const ManageAccessPathConditionsPage = () => {
    const {open} = useGlobalContext();
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Manage Administration" endRoute="Manage Access Path Conditions" endRoutePath="/manage-access-path-conditions"/>
    </div>
  )
}

export default ManageAccessPathConditionsPage

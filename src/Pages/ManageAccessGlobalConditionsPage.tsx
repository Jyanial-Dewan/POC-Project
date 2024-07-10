import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const ManageAccessGlobalConditionsPage = () => {
    const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Continuous Monitoring" endRoute="Manage Access Global Conditions" endRoutePath="/manage-access-global-conditions"/>
      <p className="mt-4">Manage Access Global Conditions</p>
    </div>
  )
}

export default ManageAccessGlobalConditionsPage

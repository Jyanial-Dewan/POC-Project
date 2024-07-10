import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";
const ControlManagementPage = () => {
  const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Finance" endRoute="Control Management" endRoutePath="/control-management"/>
      <p className="mt-4">Control Management</p>
    </div>
  )
}

export default ControlManagementPage

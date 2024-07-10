import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const RiskManagementPage = () => {
  const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Finance" endRoute="Risk Management" endRoutePath="/risk-management"/>
      <p className="mt-4">Risk Management</p>
    </div>
  )
}

export default RiskManagementPage

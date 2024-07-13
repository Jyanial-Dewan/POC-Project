import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const AlertsPage = () => {
  const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb endRoute="Alerts" endRoutePath="/alerts"/>
      <p className="mt-4">Alerts</p>
    </div>
  )
}

export default AlertsPage

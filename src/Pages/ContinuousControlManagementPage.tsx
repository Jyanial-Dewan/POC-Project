import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";
const ContinuousControlManagementPage = () => {
  const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
     <CustomBreadcrumb middleRoute="Continuous Monitoring" endRoute="Continuous Control Management" endRoutePath="/continuous-control-management"/>
      <p className="mt-4">Continuous Control Management</p>
    </div>
  )
}

export default ContinuousControlManagementPage

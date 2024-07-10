import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const ResultMangementPage = () => {
  const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Continuous Monitoring" endRoute="Result Management" endRoutePath="/result-management"/>
      <p className="mt-4">Result Management</p>
    </div>
  )
}

export default ResultMangementPage

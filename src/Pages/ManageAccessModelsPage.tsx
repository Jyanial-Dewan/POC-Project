import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";
const ManageAccessModelsPage = () => {
    const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Access Models" endRoute="Manage Access Models" endRoutePath="/manage-access-models"/>
      <p className="mt-4">Manage Access Models</p>
      
    </div>
  )
}

export default ManageAccessModelsPage

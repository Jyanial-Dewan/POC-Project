import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const CreateAccessModelPage = () => {
    const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Continuous Monitoring" endRoute="Create Access Model" endRoutePath="/create-access-model"/>
      <p className="mt-4">Create Access Model</p>
    </div>
  )
}

export default CreateAccessModelPage

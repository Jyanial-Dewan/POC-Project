import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const SetupAndAdministrationPage = () => {
    const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Tools" endRoute="Setup and Administration" endRoutePath="/setup-and-administration"/>
      <p className="mt-4">Setup and Administration</p>
    </div>
  )
}

export default SetupAndAdministrationPage

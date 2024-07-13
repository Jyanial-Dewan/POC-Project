import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const CreateAccessGlobalConditionsPage = () => {
    const {open} = useGlobalContext();
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb endRoute="Create Access Global Conditions" endRoutePath="/create-access-global-conditions" middleRoute="Manage Administration"/>
    </div>
  )
}

export default CreateAccessGlobalConditionsPage


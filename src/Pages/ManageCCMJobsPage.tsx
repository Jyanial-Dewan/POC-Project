import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const ManageCCMJobsPage = () => {
    const {open} = useGlobalContext();
    return (
      <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
        <CustomBreadcrumb middleRoute="Manage Administration" endRoute="Manage CCM Jobs" endRoutePath="/manage-ccm-jobs"/>
      </div>
    )
}

export default ManageCCMJobsPage

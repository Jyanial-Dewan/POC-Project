import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const IssueManagementPage = () => {
  const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Finance" endRoute="Issue Management" endRoutePath="/issue-management"/>
      <p className="mt-4">Issue Management</p>
    </div>
  )
}

export default IssueManagementPage

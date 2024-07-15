import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const IssueManagementPage = () => {
  return (
    <div>
      <CustomBreadcrumb middleRoute="Finance" endRoute="Issue Management" endRoutePath="/issue-management"/>
      <p className="mt-4">Issue Management</p>
    </div>
  )
}

export default IssueManagementPage

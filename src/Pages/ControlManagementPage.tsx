import CustomBreadcrumb from "../Components/CustomBreadcrumb";
const ControlManagementPage = () => {
  return (
    <div>
      <CustomBreadcrumb middleRoute="Finance" endRoute="Control Management" endRoutePath="/control-management"/>
      <p className="mt-4">Control Management</p>
    </div>
  )
}

export default ControlManagementPage

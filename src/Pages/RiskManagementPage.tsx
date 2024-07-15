import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const RiskManagementPage = () => {
  return (
    <div>
      <CustomBreadcrumb middleRoute="Finance" endRoute="Risk Management" endRoutePath="/risk-management"/>
      <p className="mt-4">Risk Management</p>
    </div>
  )
}

export default RiskManagementPage

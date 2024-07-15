import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const ManageControlsPage = () => {
  return (
    <div>
      <CustomBreadcrumb middleRoute="Controls" endRoute="Manage Controls" endRoutePath="/manage-controls"/>
      <p className="mt-4">Manage Controls</p>
    </div>
  )
}

export default ManageControlsPage

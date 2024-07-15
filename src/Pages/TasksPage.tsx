import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const TasksPage = () => {
  return (
    <div>
      <CustomBreadcrumb endRoute="Tasks" endRoutePath="/tasks"/>
      <p className="mt-4">Tasks</p>
    </div>
  )
}

export default TasksPage

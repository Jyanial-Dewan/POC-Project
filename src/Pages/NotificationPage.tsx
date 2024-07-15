import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const NotificationPage = () => {
  return (
    <div>
      <CustomBreadcrumb middleRoute="Notifications" endRoute="Inbox" endRoutePath="/notifications/inbox"/>
      <p className="mt-4">Notifications</p>
    </div>
  )
}

export default NotificationPage

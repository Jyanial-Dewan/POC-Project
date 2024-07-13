import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";

const NotificationPage = () => {
  const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Notifications" endRoute="Inbox" endRoutePath="/notifications/inbox"/>
      <p className="mt-4">Notifications</p>
    </div>
  )
}

export default NotificationPage

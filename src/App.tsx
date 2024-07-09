import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import HomePage from "./Pages/HomePage"
import AlertsPage from "./Pages/AlertsPage"
import TasksPage from "./Pages/TasksPage"
import NotificationPage from "./Pages/NotificationPage"
import RiskManagementPage from "./Pages/RiskManagementPage"
import ControlManagementPage from "./Pages/ControlManagementPage"
import IssueManagementPage from "./Pages/IssueManagementPage"
import { GlobalContextProvider } from "./Context/GlobalContext"

function App() {
  

  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/alerts" element={<AlertsPage/>}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/notifications" element={<NotificationPage/>}/>
          <Route path="/risk-management" element={<RiskManagementPage/>}/>
          <Route path="/control-management" element={<ControlManagementPage/>}/>
          <Route path="/issue-management" element={<IssueManagementPage/>}/>
        </Route>
      </Routes>
    </GlobalContextProvider>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import HomePage from "./Pages/HomePage"
import AlertsPage from "./Pages/AlertsPage"
import TasksPage from "./Pages/TasksPage"
import NotificationPage from "./Pages/NotificationPage"
import RiskManagementPage from "./Pages/RiskManagementPage"
import ControlManagementPage from "./Pages/ControlManagementPage"
import IssueManagementPage from "./Pages/IssueManagementPage"
import ContinuousControlManagementPage from "./Pages/ContinuousControlManagementPage"
import ResultMangementPage from "./Pages/ResultMangementPage"
import LoginPage from "./Pages/LoginPage"
import { GlobalContextProvider } from "./Context/GlobalContext"

function App() {
  

  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/log-in" element={<LoginPage/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/alerts" element={<AlertsPage/>}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/notifications" element={<NotificationPage/>}/>
          <Route path="/risk-management" element={<RiskManagementPage/>}/>
          <Route path="/control-management" element={<ControlManagementPage/>}/>
          <Route path="/issue-management" element={<IssueManagementPage/>}/>
          <Route path="/continuous-control-management" element={<ContinuousControlManagementPage/>}/>
          <Route path="/result-management" element={<ResultMangementPage/>}/>
        </Route>
      </Routes>
    </GlobalContextProvider>
  )
}

export default App

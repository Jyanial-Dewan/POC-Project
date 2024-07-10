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
import SetupAndAdministrationPage from "./Pages/SetupAndAdministrationPage"
import ManageControlsPage from "./Pages/ManageControlsPage"
import ManageAccessModelsPage from "./Pages/ManageAccessModelsPage"
import CreateAccessModelPage from "./Pages/CreateAccessModelPage"
import ManageAccessEntitlementsPage from "./Pages/ManageAccessEntitlementsPage"
import ManageAccessGlobalConditionsPage from "./Pages/ManageAccessGlobalConditionsPage"
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
          <Route path="/setup-and-administration" element={<SetupAndAdministrationPage/>}/>
          <Route path="/manage-controls" element={<ManageControlsPage/>}/>
          <Route path="/manage-access-models" element={<ManageAccessModelsPage/>}/>
          <Route path="/create-access-model" element={<CreateAccessModelPage/>}/>
          <Route path="/manage-access-entitlements" element={<ManageAccessEntitlementsPage/>}/>
          <Route path="/manage-access-global-conditions" element={<ManageAccessGlobalConditionsPage/>}/>
        </Route>
      </Routes>
    </GlobalContextProvider>
  )
}

export default App

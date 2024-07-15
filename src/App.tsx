import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import AlertsPage from "./Pages/AlertsPage";
import TasksPage from "./Pages/TasksPage";
import NotificationPage from "./Pages/NotificationPage";
import RiskManagementPage from "./Pages/RiskManagementPage";
import ControlManagementPage from "./Pages/ControlManagementPage";
import IssueManagementPage from "./Pages/IssueManagementPage";
import ContinuousControlManagementPage from "./Pages/ContinuousControlManagementPage";
import ResultMangementPage from "./Pages/ResultMangementPage";
import SetupAndAdministrationPage from "./Pages/SetupAndAdministrationPage";
import ManageControlsPage from "./Pages/ManageControlsPage";
import ManageAccessModelsPage from "./Pages/ManageAccessModelsPage";
import CreateAccessModelPage from "./Pages/CreateAccessModelPage";
import ManageAccessEntitlementsPage from "./Pages/ManageAccessEntitlementsPage";
import ManageAccessGlobalConditionsPage from "./Pages/ManageAccessGlobalConditionsPage";
import CreateAccessGlobalConditionsPage from "./Pages/CreateAccessGlobalConditionsPage";
import ManageAccessPathConditionsPage from "./Pages/ManageAccessPathConditionsPage";
import ManageUserDefinedObjectsPage from "./Pages/ManageUserDefinedObjectsPage";
import ManageCCMJobsPage from "./Pages/ManageCCMJobsPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import { useGlobalContext } from "./Context/GlobalContext";
import { useEffect } from "react";

function App() {
  const { setToken, token } = useGlobalContext();

  //Fetch token from LocalStorage

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if(savedToken) {
      setToken(savedToken)
    }
    
  }, [setToken]);


 return (
  <Routes>
    <Route path="/" element={token? <Layout/> : <LoginPage/>}>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/alerts" element={<AlertsPage/>}/>
      <Route path="/tasks" element={<TasksPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/notifications/inbox" element={<NotificationPage/>}/>
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
      <Route path="/create-access-global-conditions" element={<CreateAccessGlobalConditionsPage/>}/>
      <Route path="/manage-access-path-conditions" element={<ManageAccessPathConditionsPage/>}/>
      <Route path="/manage-user-defined-objects" element={<ManageUserDefinedObjectsPage/>}/>
      <Route path="/manage-ccm-jobs" element={<ManageCCMJobsPage/>}/>
    </Route>
  </Routes>
  )
  return (
    <Routes>
      <Route path="/" element={token ? <Layout /> : <LoginPage />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications/inbox" element={<NotificationPage />} />
        <Route path="/risk-management" element={<RiskManagementPage />} />
        <Route path="/control-management" element={<ControlManagementPage />} />
        <Route path="/issue-management" element={<IssueManagementPage />} />
        <Route
          path="/continuous-control-management"
          element={<ContinuousControlManagementPage />}
        />
        <Route path="/result-management" element={<ResultMangementPage />} />
        <Route
          path="/setup-and-administration"
          element={<SetupAndAdministrationPage />}
        />
        <Route path="/manage-controls" element={<ManageControlsPage />} />
        <Route
          path="/manage-access-models"
          element={<ManageAccessModelsPage />}
        />
        <Route
          path="/create-access-model"
          element={<CreateAccessModelPage />}
        />
        <Route
          path="/manage-access-entitlements"
          element={<ManageAccessEntitlementsPage />}
        />
        <Route
          path="/manage-access-global-conditions"
          element={<ManageAccessGlobalConditionsPage />}
        />
        <Route
          path="/create-access-global-conditions"
          element={<CreateAccessGlobalConditionsPage />}
        />
        <Route
          path="/manage-access-path-conditions"
          element={<ManageAccessPathConditionsPage />}
        />
        <Route
          path="/manage-user-defined-objects"
          element={<ManageUserDefinedObjectsPage />}
        />
        <Route path="/manage-ccm-jobs" element={<ManageCCMJobsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

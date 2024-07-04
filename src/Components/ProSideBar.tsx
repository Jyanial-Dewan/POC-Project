import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useGlobalContext } from '../Context/GlobalContext';
import { Link } from 'react-router-dom';
import riskManagement from '../Images/risk-management.png';
import finance from '../Images/finance.svg';
import controlManagement from '../Images/control-management.svg';
import issueManagement from '../Images/issue-management.svg';
import continuousMonitoring from '../Images/continuous-monitoring.svg';
import continuousControlManagement from '../Images/continuous-control-management.svg';
import resultManagement from '../Images/result-management.svg';
import tools from '../Images/tools.svg';
import setupAndAdministration from '../Images/setup-and-administration.svg';
import controls from '../Images/controls.png';
import manageControls from '../Images/manage-controls.png';
import accessModels from '../Images/access-model.png'
import manageAccessModels from '../Images/manage-access-models.png';
import createAccessModels from '../Images/create-access-model.png';
import manageAdministration from '../Images/manage-administration.png'

const ProSideBar = () => {
    const {open} = useGlobalContext();

  return (
    <Sidebar collapsed={!open} transitionDuration={1000} style={{height: "100vh", backgroundColor: "white", paddingTop: "5rem", position: "fixed", zIndex: "10", fontSize: "13px"}} >
        <Menu>
            <SubMenu label="Finance" icon={<img src={finance} className='w-[20px] h-[20px]'/>}>
                <MenuItem component={<Link to={'/risk-management'}/>} icon={<img src={riskManagement} className='w-[20px] h-[20px]'/>}>Risk Management</MenuItem>
                <MenuItem component={<Link to={'/control-management'}/>} icon={<img src={controlManagement} className='w-[20px] h-[20px]'/>}>Control Management</MenuItem>
                <MenuItem component={<Link to={'/issue-management'}/>} icon={<img src={issueManagement} className='w-[20px] h-[20px]'/>}>Issue Management</MenuItem>
            </SubMenu>
            <SubMenu label="Continuous Monitoring" icon={<img src={continuousMonitoring} className='w-[20px] h-[20px]'/>}>
                <MenuItem component={<Link to={'/continuous-control-management'}/>} icon={<img src={continuousControlManagement} className='w-[20px] h-[20px]'/>}>Continuous Control Management</MenuItem>
                <MenuItem component={<Link to={'/result-management'}/>} icon={<img src={resultManagement} className='w-[20px] h-[20px]'/>}>Result Management</MenuItem>
            </SubMenu>
            <SubMenu label="Tools" icon={<img src={tools} className='w-[20px] h-[20px]'/>}>
                <MenuItem component={<Link to={'/setup-and-administration'}/>} icon={<img src={setupAndAdministration} className='w-[20px] h-[20px]'/>}>Setup and Administration</MenuItem>
            </SubMenu>
            <SubMenu label="Controls" icon={<img src={controls} className='w-[20px] h-[20px]'/>}>
                <MenuItem component={<Link to={'/manage-controls'}/>} icon={<img src={manageControls} className='w-[20px] h-[20px]'/>}>Manage Controls</MenuItem>
            </SubMenu>
            <SubMenu label="Access Models" icon={<img src={accessModels} className='w-[20px] h-[20px]'/>}>
                <MenuItem component={<Link to={'/manage-access-models'}/>} icon={<img src={manageAccessModels} className='w-[20px] h-[20px]'/>}>Manage Access Models</MenuItem>
                <MenuItem component={<Link to={'/create-access-model'}/>} icon={<img src={createAccessModels} className='w-[20px] h-[20px]'/>}>Create Access Model</MenuItem>
            </SubMenu>
            <SubMenu label="Manage Administration" icon={<img src={manageAdministration} className='w-[20px] h-[20px]'/>}>
                <MenuItem component={<Link to={'/manage-access-entitlements'}/>} icon={<img src={continuousControlManagement} className='w-[20px] h-[20px]'/>}>Manage Access Entitlements</MenuItem>
                <MenuItem component={<Link to={'/manage-access-global-conditions'}/>} icon={<img src={resultManagement} className='w-[20px] h-[20px]'/>}>Manage Access Global Conditions</MenuItem>
                <MenuItem component={<Link to={'/create-access-global-conditions'}/>} icon={<img src={resultManagement} className='w-[20px] h-[20px]'/>}>Create Access Global Conditions</MenuItem>
                <MenuItem component={<Link to={'/manage-access-path-conditions'}/>} icon={<img src={resultManagement} className='w-[20px] h-[20px]'/>}>Manage Access Path Conditions</MenuItem>
                <MenuItem component={<Link to={'/manage-user-defined-objects'}/>} icon={<img src={resultManagement} className='w-[20px] h-[20px]'/>}>Manage User Defined Objects</MenuItem>
                <MenuItem component={<Link to={'/manage-ccm-jobs'}/>} icon={<img src={resultManagement} className='w-[20px] h-[20px]'/>}>Manage CCM Jobs</MenuItem>
            </SubMenu>
        </Menu>
    </Sidebar>
  
  )
}

export default ProSideBar

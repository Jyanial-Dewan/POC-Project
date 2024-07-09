import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useGlobalContext } from '../Context/GlobalContext';
import { Link, useLocation } from 'react-router-dom';
import menu from '../Menu/menu.json'

interface MenuItems {
    name: string;
    icon: string;
    path: string
}

interface MenuData {
    submenu: string;
    submenuIcon: string;
    menuItems: MenuItems[];
    paths: string[];
}

const ProSideBar = () => {
    const {open} = useGlobalContext();
    const location = useLocation();
    const pathname = location.pathname;

    const menuData: MenuData[] = menu

    const getMenuitemStyle = (path: string) => {
        if(pathname === path) {
            return "text-rose-600"
        }
    };

    const getSubMenuStyle = (paths: string[]) => {
        if(paths.includes(pathname)) {
            return "bg-blue-100"
        }
    }

return (
    <Sidebar collapsed={!open} transitionDuration={1000} style={{height: "100vh", backgroundColor: "white", marginTop: "5rem", position: "fixed", fontSize: "13px"}} >
        <Menu>
            {menuData.map((menu) => (
                <SubMenu className={getSubMenuStyle(menu.paths)} key={menu.submenu} label={menu.submenu} icon={<img src={menu.submenuIcon} className='w-[20px] h-[20px]'/>}>
                    {menu.menuItems.map(item => (
                        <MenuItem className={getMenuitemStyle(item.path)} key={item.name} component={<Link to={item.path}/>} icon={<img src={item.icon} className='w-[20px] h-[20px]'/>}>{item.name}</MenuItem>
                    ))}
                </SubMenu>
            ))}
        </Menu>
    </Sidebar>
  
  )
}

export default ProSideBar

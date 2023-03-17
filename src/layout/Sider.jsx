import { useState } from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import { useLocation, useNavigate } from 'react-router-dom';
import { routers } from '../router';
function Sider() {
    const MenuItem = Menu.Item;
    const Sider = Layout.Sider;
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    // console.log()
    const location = useLocation();
    const navigate = useNavigate();
    return (<>
            <Sider className={'h-full'} collapsed={collapsed} onCollapse={handleCollapsed} collapsible={true} trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />} breakpoint='xl'>
                <div className='p-2 text-center font-bold'>Logo</div>
                <Menu defaultSelectedKeys={['0_3']} style={{ width: '100%' }}>
                    {routers.map((item) => {
            return (<MenuItem onClick={() => navigate(item.path)} key={item.path} className={location.pathname === item.path ? 'arco-menu-selected' : ''}>
                                <item.icon />
                                {item.name}
                            </MenuItem>);
        })}
                </Menu>
            </Sider>
        </>);
}
export default Sider;
//# sourceMappingURL=Sider.jsx.map
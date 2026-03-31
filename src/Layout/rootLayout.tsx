import { Outlet } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import SidebarEsquerdo from '../components/SidebarEsquerdo/sidebarEsquerdo';

const RootLayout = () => (
    <Fragment>
        <SidebarEsquerdo />
        <Outlet />
    </Fragment>
);

export default RootLayout;
import { Home, NotFound } from '../../pages';
import routeNames from './routeNames';

const routes = [
    {
        path: routeNames.HOME,
        element: <Home/>,
    },
    {
        path: routeNames.NOT_FOUND,
        element: <NotFound/>,
    }
];

export default routes;
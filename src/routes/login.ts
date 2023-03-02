import { lazy } from "react";
import { ROUTE_PATHS } from "../commons/constants/route-paths";


const Login = lazy(async () => await import('../pages/Login')
    .then(({ Login }) => ({ default: Login }))
);

const login = [
    {
        path: `${ROUTE_PATHS.home}`,
        component: Login
    }
]

export default login;
import { lazy } from "react";
import { ROUTE_PATHS } from "../commons/constants/route-paths";


const RegisterUser = lazy(async () => await import('../pages/Users/Register')
    .then(({ RegisterUser }) => ({ default: RegisterUser }))
);

const user = [
    {
        path: `${ROUTE_PATHS.users}/novo-usuario`,
        component: RegisterUser
    }
]

export default user;
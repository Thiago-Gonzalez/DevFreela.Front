import { lazy } from 'react';
import { ROUTE_PATHS } from '../commons/constants/route-paths';

const Projects = lazy(async () => await import('../pages/Projects/List')
    .then(({ Projects }) => ({ default: Projects }))
);

const RegisterProject = lazy(async () => await import('../pages/Projects/Register')
    .then(({ RegisterProject }) => ({ default: RegisterProject }))
);

const EditProject = lazy(async () => await import('../pages/Projects/Edit')
    .then(({ EditProject }) => ({ default: EditProject }))
);

const project = [
    {
        path: `${ROUTE_PATHS.projects}`,
        component: Projects
    },
    {
        path: `${ROUTE_PATHS.projects}/novo-projeto`,
        component: RegisterProject
    },
    {
        path: `${ROUTE_PATHS.projects}/:idProject`,
        component: EditProject
    }
]

export default project;
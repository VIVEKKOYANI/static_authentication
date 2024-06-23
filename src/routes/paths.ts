function path(root?: string, sublink?: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const WORKSPACE = '/workspace';
const EMPLOYEE = '/employee';
const PROFILE = '/profile';

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
}

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    general: {
        app: path(ROOTS_DASHBOARD, '/admin'),
    },
    workspace: {
        root: WORKSPACE,
    },
    employee: {
        root: EMPLOYEE,
    },
    profile: {
        root: PROFILE
    }
}
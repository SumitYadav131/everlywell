import { AuthenticationRoutes } from "./authenticationRoutes";
import { MainRoutes } from "./mainRoutes";

export const navLinks = [
    ...MainRoutes,
    ...AuthenticationRoutes,
];
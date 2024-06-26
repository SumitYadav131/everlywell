const AuthenticationRoutes = [
    {name: "Register", href:"/signup"}, 
    {name: "Login", href:"/login"},
];

const MainRoutes = [
    { name: "Dashboard", href:"/admin/dashboard" },
    // { name: "About", href:"/" },
    // { name: "Products", href:"/" },
    // { name: "Contact Us", href:"/" },
    { name: "Categories", href:"/admin/categories" },
    { name: "Posts", href:"/admin/blog" },
    { name: "Profile", href:"/admin/profile" },
];

export const navLinks = [
    ...MainRoutes,
    ...AuthenticationRoutes,
];
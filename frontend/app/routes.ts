import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    // route("dashboard", "routes/dashboard.tsx")
    layout("layouts/dashboard_layout.tsx", [
        route("upload", "routes/upload_resume.tsx" )
    ]),

] satisfies RouteConfig;

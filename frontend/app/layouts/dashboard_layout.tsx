import { Outlet } from "react-router";
export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Outlet />
        </div>
    );
}
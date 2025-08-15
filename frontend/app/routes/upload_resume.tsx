
import { LockClosedIcon } from "@radix-ui/react-icons"

type ResumeDropboxProps = {
    className?: string,
};

export const ResumeDropbox = () => {
    return (
        <>
            <h1>Hello this is the dashboard/</h1>
        </>
    );
}

// This is the main component for the dashboard route
export default function Dashboard() {
    return (
        <>
            <h1>Dashboard Page</h1>
            <ResumeDropbox />
        </>
    );
}
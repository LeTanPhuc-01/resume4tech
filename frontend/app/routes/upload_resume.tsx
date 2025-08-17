"use client";
import { ResumeDropbox } from "~/components/dashboard/ResumeDropbox";
import { useState } from "react";
// This is the main component for the dashboard route
export default function Dashboard() {
    const [hasAddedResume, setHasAddedResume] = useState(false);
    const onFileUrlChange = (fileUrl: string) => {
        setHasAddedResume(Boolean(fileUrl));
    };
    return (
        <>
            <h1>Dashboard Page</h1>
            <ResumeDropbox
                onFileUrlChange={onFileUrlChange}
                className="mt-8" />
        </>
    );
}
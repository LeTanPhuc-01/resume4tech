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
        <main>
            <div className="mx-auto mt-14 max-w-3xl rounded-md border border-gray-200 px-10 py-10 text-center shadow-md">
                <h1>Dashboard Page</h1>
                <ResumeDropbox
                    onFileUrlChange={onFileUrlChange}
                    className="mt-8" />
            </div>
        </main>
    );
}
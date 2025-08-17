import { LockClosedIcon, Cross2Icon } from "@radix-ui/react-icons"
import addpdf from "/addpdf.svg"
import { cn } from "~/lib/utils";
// import { useNavigate } from "react-router";
import { useState } from "react";

const defaultFileState = {
    name: "",
    size: 0,
    fileUrl: "",
};
type ResumeDropboxProps = {
    className?: string,
    onFileUrlChange: (fileUrl: string) => void;
};

export const ResumeDropbox = ({
    onFileUrlChange,
    className,
}: ResumeDropboxProps) => {
    const [file, setFile] = useState(defaultFileState);
    const [isHoveredOnDropzone, setIsHoveredOnDropzone] = useState(false);
    const [hasNonPdfFile, setHasNonPdfFile] = useState(false);
    // const navigate = useNavigate();
    const hasFile = Boolean(file.name);

    const setNewFile = (newFile: File) => {
        if (file.fileUrl) {
            URL.revokeObjectURL(file.fileUrl);
        }

        const { name, size } = newFile;
        const fileUrl = URL.createObjectURL(newFile);
        setFile({ name, size, fileUrl });
        onFileUrlChange(fileUrl);
    };
    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const newFile = event.dataTransfer.files[0];
        if (newFile.name.endsWith(".pdf")) {
            setHasNonPdfFile(false);
            setNewFile(newFile);
        } else {
            setHasNonPdfFile(true);
        }
        setIsHoveredOnDropzone(false);
    };

    const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        const newFile = files[0];
        setNewFile(newFile);
    };

    const onRemove = () => {
        setFile(defaultFileState);
        onFileUrlChange("");
    };
    return (
        <div
            className={cn(
                "flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-12",
                isHoveredOnDropzone && "border-sky-400",
                className
            )}
            onDragOver={(event) => {
                event.preventDefault();
                setIsHoveredOnDropzone(true);
            }}
            onDragLeave={() => setIsHoveredOnDropzone(false)}
            onDrop={onDrop}
        >
            <div
                className={cn(
                    "text-center space-y-3",
                )}
            >
                <img
                    src={addpdf}
                    className="mx-auto h-14 w-14"
                    alt="Add pdf"
                    aria-hidden="true"
                />

                {!hasFile ? (
                    <>
                        <p
                            className={cn(
                                "pt-3 text-gray-700 text-lg font-semibold",
                            )}
                        >
                            Browse a pdf file or drop it here
                        </p>
                        <p className="flex text-sm text-gray-500">
                            <LockClosedIcon className="mr-1 mt-1 h-3 w-3 text-gray-400" />
                            File data is used locally and never leaves your browser
                        </p>
                    </>
                ) : (
                    <div className="flex items-center justify-center gap-3 pt-3">
                        <div className="pl-7 font-semibold text-gray-900">
                            {file.name} - {getFileSizeString(file.size)}
                        </div>
                        <button
                            type="button"
                            className="outline-theme-blue rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                            title="Remove file"
                            onClick={onRemove}
                        >
                            <Cross2Icon className="h-6 w-6" />
                        </button>
                    </div>
                )}
                <div className="pt-4">
                    {!hasFile ? (
                        <>
                            <label
                                className={cn(
                                    "within-outline-theme-purple cursor-pointer rounded-full px-6 pb-2.5 pt-2 font-semibold shadow-sm bg-primary",
                                )}
                            >
                                Browse file
                                <input
                                    type="file"
                                    className="sr-only"
                                    accept=".pdf"
                                    onChange={onInputChange}
                                />
                            </label>
                            {hasNonPdfFile && (
                                <p className="mt-6 text-red-400">Only pdf file is supported</p>
                            )}
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="btn-primary"
                            // onClick={}
                            >
                                Import and Continue <span aria-hidden="true">→</span>
                            </button>
                            <p className={cn(" text-gray-500 mt-6")}>
                                Note: Import works best on
                                single column resume
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
const getFileSizeString = (fileSizeB: number) => {
    const fileSizeKB = fileSizeB / 1024;
    const fileSizeMB = fileSizeKB / 1024;
    if (fileSizeKB < 1000) {
        return fileSizeKB.toPrecision(3) + " KB";
    } else {
        return fileSizeMB.toPrecision(3) + " MB";
    }
};
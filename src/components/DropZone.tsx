import clsx from "clsx";
import { Upload } from "lucide-react";

interface DropZoneProps {
    isDragActive?: boolean;
}

export function DropZone({ isDragActive }: DropZoneProps) {
    return (
        <div
            className={clsx(
                "border-2 border-dashed rounded-2xl text-center cursor-pointer overflow-hidden",
                "transition-all duration-300 ease-out",
                isDragActive
                    ? "border-lime-600 bg-lime-50 py-12 px-8"
                    : "border-gray-300 hover:border-gray-400 py-3 px-4"
            )}
        >
            <div className={clsx(
                "flex items-center justify-center gap-3 transition-all duration-300",
                isDragActive ? "flex-col" : "flex-row"
            )}>
                <Upload className={clsx(
                    "text-gray-400 transition-all duration-300",
                    isDragActive ? "w-10 h-10 text-lime-600" : "w-5 h-5"
                )} />
                <div>
                    <p className={clsx(
                        "font-medium text-gray-700 transition-all duration-300",
                        isDragActive ? "text-lg" : "text-sm"
                    )}>
                        {isDragActive ? "Drop your bank CSV here" : "Drop CSV to import"}
                    </p>
                    {isDragActive && (
                        <p className="text-sm text-gray-500 mt-2 animate-in fade-in duration-200">
                            or paste copied data from a spreadsheet
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

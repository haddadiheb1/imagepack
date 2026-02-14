'use client';

import { useState, useCallback, useRef } from 'react';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    accept?: string;
    maxSizeMB?: number;
    label?: string;
}

export default function FileUpload({
    onFileSelect,
    accept = "image/*",
    maxSizeMB = 5,
    label = "Upload an image"
}: FileUploadProps) {
    const [isDragOver, setIsDragOver] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    }, []);

    const validateAndSelectFile = useCallback((file: File) => {
        setError(null);

        // Check file type
        if (accept && accept !== '*') {
            const acceptedTypes = accept.split(',').map(type => type.trim());
            const fileType = file.type;
            // Simple check, can be improved for edge cases
            const isAccepted = acceptedTypes.some(type => {
                if (type.endsWith('/*')) {
                    return fileType.startsWith(type.replace('/*', ''));
                }
                return fileType === type;
            });

            if (!isAccepted) {
                setError(`File type not accepted. Please upload ${accept}`);
                return;
            }
        }

        // Check size
        if (file.size > maxSizeMB * 1024 * 1024) {
            setError(`File is too large. Max size is ${maxSizeMB}MB`);
            return;
        }

        onFileSelect(file);
    }, [accept, maxSizeMB, onFileSelect]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            validateAndSelectFile(e.dataTransfer.files[0]);
        }
    }, [validateAndSelectFile]);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            validateAndSelectFile(e.target.files[0]);
        }
    }, [validateAndSelectFile]);

    const triggerFileSelect = () => {
        inputFileRef.current?.click();
    };

    return (
        <div className="w-full">
            <div
                onClick={triggerFileSelect}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          relative group cursor-pointer
          flex flex-col items-center justify-center 
          w-full h-64 
          rounded-2xl border-2 border-dashed 
          transition-all duration-300 ease-in-out
          ${isDragOver
                        ? 'border-blue-500 bg-blue-50/50 scale-[0.99]'
                        : 'border-gray-200 bg-gray-50/30 hover:bg-gray-50 hover:border-blue-400'
                    }
        `}
            >
                <input
                    ref={inputFileRef}
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={handleFileChange}
                />

                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                    <div className={`
            mb-4 p-4 rounded-full bg-white shadow-sm ring-1 ring-gray-100 
            transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md
            ${isDragOver ? 'scale-110 ring-blue-100 text-blue-500' : 'text-gray-400'}
          `}>
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                    </div>

                    <p className="mb-2 text-lg font-medium text-gray-700">
                        {isDragOver ? 'Drop file here' : label}
                    </p>
                    <p className="text-sm text-gray-400">
                        Drag & drop or click to browse
                        {maxSizeMB && <span className="block mt-1 text-xs">Max size: {maxSizeMB}MB</span>}
                    </p>
                </div>
            </div>

            {error && (
                <div className="mt-3 p-3 text-sm text-red-600 bg-red-50 rounded-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                </div>
            )}
        </div>
    );
}

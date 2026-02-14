'use client';

import { useState } from 'react';
import FileUpload from '@/app/components/FileUpload/FileUpload';

export default function ImageCompressor() {
    // We'll use this state later for logic, keeping it ready for the backend phase
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
        console.log("File selected:", selectedFile.name);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-8">
                <FileUpload
                    label="Drop images here to compress"
                    accept="image/jpeg,image/png,image/webp"
                    onFileSelect={handleFileSelect}
                />
            </div>

            {/* Placeholder for selected files and settings - will be interactive in the next phase */}
            <div className={`space-y-6 transition-opacity duration-200 ${file ? 'opacity-100' : 'opacity-50 pointer-events-none filter grayscale'}`}>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Compression Level</span>
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-blue-500"></div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                        Compress Images
                    </button>
                </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
                Files are processed locally in your browser for maximum privacy.
            </p>
        </div>
    );
}

import type { Metadata } from 'next';
import ImageCompressor from './ImageCompressor';

export const metadata: Metadata = {
    title: 'Compress Image Online - Free Tool',
    description: 'Reduce image size without losing quality with our free online image compressor. Optimize your images for web and mobile.',
};

export default function ImageCompressionPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Compress Image Online
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Reduce image size without losing quality. Our advanced compression tool helps you optimize PNG, JPG, and WebP images instantly.
                </p>
            </div>

            <ImageCompressor />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    title="Lossless Quality"
                    description="Reduce file size significantly while maintaining the original image quality."
                />
                <FeatureCard
                    title="Lightning Fast"
                    description="Process dozens of images in seconds directly in your web browser."
                />
                <FeatureCard
                    title="Secure & Private"
                    description="Your images never leave your device. All processing happens locally."
                />
            </div>
        </div>
    );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

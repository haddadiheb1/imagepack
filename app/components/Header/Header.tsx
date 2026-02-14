import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full py-4 px-6 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 group">
                    Image<span className="text-blue-600">Pack</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-xs font-medium text-gray-400">Toolkit</span>
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/tools/image-compression" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                        Compression
                    </Link>
                    <Link href="/categories" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                        All Tools
                    </Link>
                    <a href="#" className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                        Get Started
                    </a>
                </nav>
            </div>
        </header>
    );
}

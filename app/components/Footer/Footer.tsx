import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-6 bg-gray-50 border-t border-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        Image<span className="text-blue-600">Pack</span>
                    </Link>
                    <p className="mt-4 text-sm text-gray-500 max-w-sm leading-relaxed">
                        Free, secure, and fast image tools for everyone. Compress, convert, and edit your images directly in your browser without uploading to a server.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Tools</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li>
                            <Link href="/tools/image-compression" className="hover:text-blue-600 transition-colors">
                                Image Compression
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-blue-600 transition-colors">
                                Coming Soon...
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li>
                            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-blue-600 transition-colors">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                <p>© {currentYear} ImagePack. All rights reserved.</p>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-600 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-gray-600 transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Tools - ImagePack',
  description: 'Collection of free online tools for image editing, conversion, and optimization.',
};

const categories = [
  {
    name: "Image Tools",
    description: "Edit, convert, and optimize your images instantly.",
    tools: [
      {
        name: "Image Compression",
        description: "Reduce image size without losing quality. Support for PNG, JPG, and WebP.",
        href: "/tools/image-compression",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        badge: "Popular"
      },
      // Future tools will be added here
    ]
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4 pt-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Free Tools for <span className="text-blue-600">Everyone</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          A growing collection of free, privacy-focused tools. No registration required.
        </p>
      </section>

      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category.name} className="space-y-6">
            <div className="border-b border-gray-100 pb-2">
              <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              <p className="text-gray-500">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {tool.icon}
                    </div>
                    {tool.badge && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

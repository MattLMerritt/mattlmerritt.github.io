import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { websiteData } from '@/data/website';

export default function NotFound() {
  const { personalInfo } = websiteData;

  return (
    <>
      <Navigation personalName={personalInfo.name} />
      <main className="container mx-auto px-6 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4 hero-text">Project Not Found</h2>
            <p className="text-lg subtitle-text mb-8">
              The project you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="modern-button">
              Go to Home
            </Link>
            <Link href="/#projects" className="modern-button bg-gray-700 hover:bg-gray-600">
              View All Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

import { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { GatedContentForm } from './GatedContentForm';
import { BookOpen, ArrowLeft, CheckCircle2, Download } from 'lucide-react';

interface ResourcePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  content: ReactNode;
  resourceName: string;
  downloadContent: string;
}

export const ResourcePageLayout = ({
  title,
  subtitle,
  description,
  benefits,
  content,
  resourceName,
  downloadContent
}: ResourcePageLayoutProps) => {
  const [showDownload, setShowDownload] = useState(false);

  const handleDownload = () => {
    // Create a blob from the content
    const blob = new Blob([downloadContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resourceName.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-width py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Athens School of Selling</span>
            </Link>
            <Link
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-200 font-semibold mb-4">{subtitle}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-blue-100">{description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-width section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">What You'll Learn</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              {content}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-8 sticky top-8">
              {!showDownload ? (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Download This Resource
                    </h3>
                    <p className="text-gray-600">
                      Fill out the form below to get instant access to this comprehensive guide.
                    </p>
                  </div>

                  <GatedContentForm
                    resourceName={resourceName}
                    onSuccess={() => setShowDownload(true)}
                  />
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your download is ready. Click the button below to get your resource.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="btn-primary w-full mb-4"
                  >
                    <Download className="w-5 h-5 mr-2 inline" />
                    Download Now
                  </button>
                  <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-700 font-semibold block"
                  >
                    ← Back to All Resources
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container-width py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="w-6 h-6" />
              <p className="text-lg font-semibold">Athens School of Selling</p>
            </div>
            <p className="text-gray-400 mb-2">
              &copy; {new Date().getFullYear()} Athens School of Selling. All rights reserved.
            </p>
            <a
              href="https://www.athensschoolofselling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              www.athensschoolofselling.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

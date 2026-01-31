import { Link } from 'react-router-dom';
import { BookOpen, Target, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const Homepage = () => {
  const resources = [
    {
      title: "Strategic Sales Opportunity Planning Guide",
      description: "Master the art of strategic selling with our comprehensive workshop workbook. Learn to map business drivers, identify compelling events, and develop winning sales strategies.",
      icon: <Target className="w-8 h-8" />,
      link: "/resource/strategic-sales-guide",
      benefits: ["Business Environment Analysis", "Competitive Strategy", "Tactical Planning Framework"]
    },
    {
      title: "The ALIGN Sales Methodology",
      description: "Transform your sales approach with the ALIGN methodology: Ask, Listen, Implication, Gain Agreement, Next Steps. A proven framework for consultative selling.",
      icon: <Users className="w-8 h-8" />,
      link: "/resource/align-methodology",
      benefits: ["Consultative Selling Skills", "Objection Handling", "Closing Techniques"]
    },
    {
      title: "Pre-Call Planning Mastery",
      description: "Elevate every customer interaction with our strategic pre-call planning framework. Learn the critical questions that drive successful sales outcomes.",
      icon: <CheckCircle className="w-8 h-8" />,
      link: "/resource/pre-call-planning",
      benefits: ["Strategic Planning Questions", "Purpose-Process-Payoff Framework", "Gap Analysis"]
    },
    {
      title: "Creating Unique Business Value",
      description: "Differentiate yourself from competitors by creating, capturing, and communicating unique business value. Learn to build quantifiable ROI business cases.",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/resource/unique-business-value",
      benefits: ["Value Creation Framework", "ROI Calculation", "Competitive Differentiation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-width section-padding py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Athens School of Selling</h1>
            </div>
            <a
              href="https://www.athensschoolofselling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Visit Main Site
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container-width section-padding py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Transform Your Sales Team with Proven Methodologies
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Access Pete Athens' exclusive sales training resources designed for medium to large enterprises.
              31 years of proven experience with Fortune 500 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#resources" className="btn-primary inline-flex items-center justify-center">
                Download Free Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://www.athensschoolofselling.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Learn More About Our Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Pete Athens */}
      <section className="bg-gray-50">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">About Pete Athens</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <strong>Pete Athens</strong> brings over 31 years of sales and leadership experience from
                  Nalco/Ecolab and 5 years with Dyno Nobel, working with some of the world's largest
                  industrial companies.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>AVP, Training Director, CAM, District Manager, Sales Representative</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>US Army Veteran</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Bucknell University, BSME</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Strategic Sales Planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Leadership Development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Value Selling & ROI Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Pete has authored multiple books and developed comprehensive curriculum programs that combine
                  proven methodologies from Wilson Learning, Think Inc, and his own Athens School of Selling frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Free Sales Excellence Resources</h3>
            <p className="text-xl text-gray-600">
              Download our comprehensive guides and frameworks - trusted by sales professionals at Fortune 500 companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {resource.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">{resource.title}</h4>
                <p className="text-gray-600 mb-6">{resource.description}</p>

                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-3">What you'll learn:</p>
                  <ul className="space-y-2">
                    {resource.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={resource.link}
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  Download Free Guide
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="container-width section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Sales Organization?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Explore our comprehensive sales and leadership curriculum programs including
              in-person and virtual training options.
            </p>
            <a
              href="https://www.athensschoolofselling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              View All Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-width py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="w-6 h-6" />
              <p className="text-lg font-semibold">Athens School of Selling</p>
            </div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Athens School of Selling. All rights reserved.
            </p>
            <a
              href="https://www.athensschoolofselling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
            >
              www.athensschoolofselling.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

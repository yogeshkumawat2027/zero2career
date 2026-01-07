import React from 'react';
import { 
  HiEnvelope,
  HiMapPin,
  HiClock,
  HiCheckCircle,
  HiArrowRight,
  HiChatBubbleLeftRight
} from 'react-icons/hi2';
import { 
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: HiEnvelope,
      title: "Email Us",
      description: "Send us your queries and we'll get back to you within 24 hours",
      contact: "zero2careerofficial@gmail.com",
      action: "mailto:zero2careerofficial@gmail.com",
      buttonText: "Send Email",
      color: "blue"
    },
    {
      icon: FaInstagram,
      title: "Follow on Instagram",
      description: "Get daily career tips, success stories, and updates on our Instagram",
      contact: "@zero2career_official",
      action: "https://instagram.com/zero2career_",
      buttonText: "Follow Us",
      color: "pink"
    },
    {
      icon: FaFacebookF,
      title: "Connect on Facebook", 
      description: "Join our community and connect with fellow career seekers",
      contact: "Zero2Career Official",
      action: "https://facebook.com/zero2career",
      buttonText: "Connect",
      color: "blue"
    }
  ];

  const officeInfo = [
    {
      icon: HiMapPin,
      title: "Office Address",
      details: "Kota (Rajasthan), India"
    },
    {
      icon: HiClock,
      title: "Working Hours", 
      details: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      icon: HiChatBubbleLeftRight,
      title: "Response Time",
      details: "Within 24 hours"
    }
  ];

  const faqs = [
    {
      question: "How can I get career guidance?",
      answer: "Contact us through email or social media, and our career counselors will guide you through the process."
    },
    {
      question: "Do you provide free consultation?",
      answer: "Yes! We offer a free initial consultation to understand your career goals and suggest the best path forward."
    },
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="block lg:hidden h-[100px]">
          
          </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-blue-200">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Have questions about your career path? We're here to help you succeed
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <HiCheckCircle className="text-green-400" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <HiCheckCircle className="text-green-400" />
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your <span className="text-blue-600">Preferred Way</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with us through your favorite platform and get personalized career guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const colorClasses = {
                blue: {
                  iconBg: "bg-blue-100",
                  iconColor: "text-blue-600",
                  button: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                },
                pink: {
                  iconBg: "bg-pink-100", 
                  iconColor: "text-pink-600",
                  button: "bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800"
                }
              };

              const colors = colorClasses[method.color];

              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-100"
                >
                  {/* Icon & Title */}
                  <div className="text-center mb-6">
                    <div className={`${colors.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`text-2xl ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="text-center mb-6">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <span className="text-gray-800 font-semibold">
                        {method.contact}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {method.action.startsWith('mailto:') ? (
                    <a
                      href={method.action}
                      className={`w-full ${colors.button} text-white py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}
                    >
                      {method.buttonText}
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full ${colors.button} text-white py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}
                    >
                      {method.buttonText}
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Office <span className="text-blue-600">Information</span>
            </h2>
            <p className="text-xl text-gray-600">
              Know more about our office hours and location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeInfo.map((info, index) => {
              const IconComponent = info.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-xl text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">
                    {info.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Reach out to us today and take the first step towards your dream career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:zero2careerofficial@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <HiEnvelope className="text-xl" />
              Email Us Now
            </a>
            <div className="text-blue-200 text-sm">
              ✓ Quick response • ✓ Expert guidance
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
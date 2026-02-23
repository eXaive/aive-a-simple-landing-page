import { Zap, Shield, Globe, Smartphone, Database, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Safe',
      description: 'Your data is protected with enterprise-grade security measures.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Scale globally with our worldwide content delivery network.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile First',
      description: 'Perfectly optimized for all devices and screen sizes.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Smart Analytics',
      description: 'Gain insights with powerful analytics and reporting tools.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Get help anytime with our dedicated customer support team.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools and features you need to build, 
            scale, and grow your business with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
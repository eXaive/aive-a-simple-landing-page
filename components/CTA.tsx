import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of satisfied customers who have transformed their 
          business with our platform. Start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Start Free Trial
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
            Contact Sales
          </button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CTA
'use client'

import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Amazing
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Transform your ideas into reality with our cutting-edge platform. 
              Join thousands of creators who are already building the future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                <Play className="mr-2" size={20} />
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10k+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                  <div className="space-y-2 pt-4">
                    <div className="h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-6 bg-gray-100 rounded"></div>
                      <div className="h-6 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'

import {
    BarChart3,
    Bell,
    Clock,
    FileSearch,
    LineChart,
    Shield,
    AlertTriangle,
    ArrowRight,
    Users,
    UserCog,
    UserCheck,
  } from 'lucide-react';

function Landing()
{
    return(
        <>
         <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
                      {/* Hero Section */}
                      <header className="bg-white shadow-sm">
                        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-8 w-8 text-blue-600" />
                              <span className="text-xl font-bold text-gray-900">STRIVERS</span>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                              Login
                            </button>
                          </div>
                        </nav>
                      </header>
                
                      <main>
                        {/* Hero Section */}
                        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                          <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"><hr className='rounded-2xl border-black mb-4'/>
                              AUTOMATED COMPLIANCE <br /><span className='text-blue-700'>MANAGEMENT SYSTEM</span><hr className='rounded-2xl border-black mt-5'/>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                              Stay compliant with real-time monitoring, automated tracking, and intelligent analytics
                            </p>
                          </div>
                        </section>
                
                        {/* Features Grid */}
                        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Real-time Dashboard */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <BarChart3 className="h-6 w-6 text-blue-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Real-time Dashboard</h3>
                              <p className="text-gray-600">
                                Monitor your regulatory compliance status in real-time with our intuitive dashboard
                              </p>
                            </div>
                
                            {/* Regulation Tracking */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <FileSearch className="h-6 w-6 text-green-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Official Source Tracking</h3>
                              <p className="text-gray-600">
                                Automatically track regulations from official government sources and regulatory bodies
                              </p>
                            </div>
                
                            {/* Audit Trail */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-purple-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Audit Trail Generation</h3>
                              <p className="text-gray-600">
                                Maintain comprehensive audit trails for all compliance-related activities
                              </p>
                            </div>
                
                            {/* Alert Notifications */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Bell className="h-6 w-6 text-red-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Alert Notifications</h3>
                              <p className="text-gray-600">
                                Receive instant notifications about new regulations and compliance updates
                              </p>
                            </div>
                
                            {/* Risk Scoring */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Risk Scoring</h3>
                              <p className="text-gray-600">
                                Advanced risk assessment and scoring system to prioritize compliance efforts
                              </p>
                            </div>
                
                            {/* Analytics */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <LineChart className="h-6 w-6 text-indigo-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Compliance Analytics</h3>
                              <p className="text-gray-600">
                                Detailed analytics and insights to optimize your compliance strategy
                              </p>
                            </div>
                          </div>
                        </section>
                
                        {/* Role-Based Access Control Section */}
                        <section className="bg-white py-16">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Role-Based Access Control
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Granular control over user permissions with customizable roles and access levels
                              </p>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                              {/* Admin Role */}
                              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                                <div className="h-16 w-16 bg-blue-200 rounded-lg flex items-center justify-center mb-6">
                                  <UserCog className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Administrator</h3>
                                <ul className="space-y-3">
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                                    Full system configuration
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                                    User management
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                                    Role assignment
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                                    Audit log access
                                  </li>
                                </ul>
                              </div>
                
                              {/* Compliance Manager Role */}
                              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                                <div className="h-16 w-16 bg-green-200 rounded-lg flex items-center justify-center mb-6">
                                  <UserCheck className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Manager</h3>
                                <ul className="space-y-3">
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                                    Compliance monitoring
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                                    Risk assessment
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                                    Report generation
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                                    Alert management
                                  </li>
                                </ul>
                              </div>
                
                              {/* Analyst Role */}
                              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
                                <div className="h-16 w-16 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                                  <Users className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analyst</h3>
                                <ul className="space-y-3">
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                                    View dashboards
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                                    Generate reports
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                                    Track regulations
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                                    Receive alerts
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </section>
                
                        {/* CTA Section */}
                        <section className="bg-blue-600 py-16 mt-16">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                              Ready to Transform Your Regulatory Compliance?
                            </h2>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                              Join thousands of companies using RegulateIQ to streamline their compliance processes
                            </p>
                          </div>
                        </section>
                      </main>
                
                      {/* Footer */}
                      <footer className="bg-gray-900 text-gray-400 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-8 w-8 text-blue-500" />
                              <span className="text-xl font-bold text-white">STRIVERS</span>
                            </div>
                            <p>© 2025 RegulateIQ. All rights reserved.</p>
                          </div>
                        </div>
                      </footer>
                    </div>
        </>
    )
}

export default Landing;
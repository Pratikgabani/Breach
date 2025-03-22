import React from "react";
import {
    BarChart3,
    Shield,
    AlertCircle,
    CheckCircle2,
    Clock,
    FileCheck2,
    AlertTriangle,
    ArrowUpCircle,
    Bell,
    Settings,
    FileText,
    History,
    AlertOctagon,
    TrendingUp,
    PieChart
  } from 'lucide-react';

function Dashboard()
{

    const [activeTab, setActiveTab] = useState('analytics');

    return(
        <>
           <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-indigo-600" />
                <h1 className="ml-2 text-2xl font-bold text-gray-900">ComplianceWatch</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Bell className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                <Settings className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-white font-medium">JD</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Bar */}
            <nav className="flex space-x-1">
              <button
                onClick={() => setActiveTab('sources')}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'sources'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileText className="h-5 w-5 mr-2" />
                Official Source Tracking
              </button>
              
              <button
                onClick={() => setActiveTab('audit')}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'audit'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <History className="h-5 w-5 mr-2" />
                Audit Trail Generation
              </button>
              
              <button
                onClick={() => setActiveTab('alerts')}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'alerts'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <AlertOctagon className="h-5 w-5 mr-2" />
                Alert Notifications
              </button>
              
              <button
                onClick={() => setActiveTab('risk')}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'risk'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Risk Scoring
              </button>
              
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'analytics'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <PieChart className="h-5 w-5 mr-2" />
                Compliance Analytics
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">Compliance Score</h2>
                <p className="text-2xl font-bold text-gray-900">92%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <AlertCircle className="h-10 w-10 text-red-500" />
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">Critical Issues</h2>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="h-10 w-10 text-yellow-500" />
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">Pending Reviews</h2>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FileCheck2 className="h-10 w-10 text-blue-500" />
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">Completed Tasks</h2>
                <p className="text-2xl font-bold text-gray-900">145</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Compliance Alerts */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Compliance Alerts</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Data Privacy Policy Update Required",
                    severity: "high",
                    time: "2 hours ago",
                    icon: AlertTriangle,
                    color: "text-red-500"
                  },
                  {
                    title: "Security Assessment Due",
                    severity: "medium",
                    time: "5 hours ago",
                    icon: AlertCircle,
                    color: "text-yellow-500"
                  },
                  {
                    title: "Employee Training Completed",
                    severity: "low",
                    time: "1 day ago",
                    icon: CheckCircle2,
                    color: "text-green-500"
                  }
                ].map((alert, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <alert.icon className={h-6 w-6 ${alert.color}} />
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
                      <p className="text-sm text-gray-500">{alert.time}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                      alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance Trends */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Compliance Trends</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Data Protection</span>
                  <div className="flex items-center">
                    <ArrowUpCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-500">98%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">Security Protocols</span>
                  <div className="flex items-center">
                    <ArrowUpCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-500">85%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">Policy Compliance</span>
                  <div className="flex items-center">
                    <ArrowUpCircle className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium text-yellow-500">72%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
        </>
    )
}

export default Dashboard;
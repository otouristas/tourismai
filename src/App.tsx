import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  MapPin,
  Star,
  DollarSign,
  MessageSquare,
  Cloud,
  Building2,
  Train,
  PartyPopper,
  Leaf,
  Globe,
  Briefcase,
  Map
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'weather', label: 'Weather Impact', icon: Cloud },
    { id: 'competitors', label: 'Competition', icon: Building2 },
    { id: 'transport', label: 'Transportation', icon: Train },
    { id: 'events', label: 'Events', icon: PartyPopper },
    { id: 'sustainability', label: 'Sustainability', icon: Leaf },
    { id: 'sentiment', label: 'Global Sentiment', icon: Globe },
    { id: 'economic', label: 'Economic Impact', icon: Briefcase },
    { id: 'heatmap', label: 'Heat Maps', icon: Map }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">TourismAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tourism Analytics Dashboard</h1>
          <p className="mt-2 text-gray-600">Comprehensive insights and predictions for optimal tourism management</p>
        </div>

        <div className="mb-8 bg-white rounded-xl shadow-sm p-4">
          <div className="flex space-x-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Users, label: 'Expected Visitors', value: '12,458', trend: '+14%' },
            { icon: Calendar, label: 'Peak Season', value: 'July-Aug', trend: 'Upcoming' },
            { icon: DollarSign, label: 'Avg. Spending', value: '$245/day', trend: '+5%' },
            { icon: Star, label: 'Sentiment Score', value: '4.8/5', trend: '+0.3' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="ml-2 text-sm text-green-600">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Weather Impact Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Weather Impact</h2>
              <Cloud className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { day: 'Today', temp: '24°C', impact: 'High', visitors: '+15%' },
                { day: 'Tomorrow', temp: '22°C', impact: 'Moderate', visitors: '+8%' },
                { day: 'Next Week', temp: '19°C', impact: 'Low', visitors: '-3%' }
              ].map((forecast, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{forecast.day}</p>
                    <p className="text-sm text-gray-600">{forecast.temp}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-indigo-600">{forecast.impact}</p>
                    <p className="text-sm text-gray-600">{forecast.visitors}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitor Analysis */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Competitive Analysis</h2>
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Resort A', occupancy: '85%', pricing: '$180', trend: '+5%' },
                { name: 'Hotel B', occupancy: '78%', pricing: '$150', trend: '+2%' },
                { name: 'Villa C', occupancy: '92%', pricing: '$220', trend: '+8%' }
              ].map((competitor, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900">{competitor.name}</p>
                    <span className="text-indigo-600">{competitor.trend}</span>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>Occupancy: {competitor.occupancy}</span>
                    <span>Avg. Price: {competitor.pricing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transportation Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Transport Hub</h2>
              <Train className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { type: 'Airport', status: 'On Time', capacity: '75%' },
                { type: 'Train Station', status: 'Delayed', capacity: '90%' },
                { type: 'Bus Terminal', status: 'On Time', capacity: '60%' }
              ].map((transport, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{transport.type}</p>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className={`${
                      transport.status === 'On Time' ? 'text-green-600' : 'text-orange-600'
                    }`}>{transport.status}</span>
                    <span className="text-gray-600">Capacity: {transport.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Impact */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
              <PartyPopper className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Summer Festival', date: 'Jul 15-20', impact: 'High', revenue: '+$1.2M' },
                { name: 'Food Fair', date: 'Aug 5-7', impact: 'Medium', revenue: '+$800K' },
                { name: 'Cultural Week', date: 'Aug 25-31', impact: 'High', revenue: '+$1.5M' }
              ].map((event, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{event.name}</p>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-indigo-600">Impact: {event.impact}</span>
                    <span className="text-green-600">{event.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Metrics */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Sustainability</h2>
              <Leaf className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { metric: 'Carbon Footprint', value: '-12%', status: 'Improving' },
                { metric: 'Water Usage', value: '-8%', status: 'Stable' },
                { metric: 'Waste Recycling', value: '+15%', status: 'Excellent' }
              ].map((metric, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{metric.metric}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className={`text-sm ${
                      metric.value.startsWith('+') ? 'text-green-600' : 'text-blue-600'
                    }`}>{metric.value}</span>
                    <span className="text-sm text-gray-600">{metric.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Economic Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Economic Impact</h2>
              <Briefcase className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { category: 'Local Employment', value: '12,500 jobs', growth: '+8%' },
                { category: 'Business Revenue', value: '$45M', growth: '+15%' },
                { category: 'Tax Revenue', value: '$8.2M', growth: '+12%' }
              ].map((economic, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{economic.category}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-lg font-semibold text-indigo-600">{economic.value}</span>
                    <span className="text-sm text-green-600">{economic.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Sentiment */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Global Sentiment</h2>
              <Globe className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { language: 'English', sentiment: 4.8, reviews: '15,420' },
                { language: 'Spanish', sentiment: 4.6, reviews: '8,750' },
                { language: 'Mandarin', sentiment: 4.9, reviews: '12,300' }
              ].map((sentiment, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900">{sentiment.language}</p>
                    <span className="text-sm text-gray-600">{sentiment.reviews} reviews</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${(sentiment.sentiment / 5) * 100}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm font-medium text-indigo-600">
                        {sentiment.sentiment}/5
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heat Map */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Tourist Density Heat Map</h2>
            <Map className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive heat map visualization would be displayed here</p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { area: 'City Center', density: 'High', trend: '↑' },
              { area: 'Beach Front', density: 'Medium', trend: '→' },
              { area: 'Historic District', density: 'Low', trend: '↓' }
            ].map((area, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">{area.area}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className={`text-sm ${
                    area.density === 'High' ? 'text-red-600' :
                    area.density === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                  }`}>{area.density}</span>
                  <span className="text-gray-600">{area.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
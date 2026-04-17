// StatsOverview.tsx
import React from 'react';

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto">
      
      {/* Total Friends */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="text-5xl font-bold text-blue-600 mb-1 text-center">16</div>
        <p className="text-gray-600 text-sm font-medium text-center">Total Friends</p>
      </div>

      {/* On Track */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="text-5xl font-bold text-green-600 mb-1 text-center">3</div>
        <p className="text-gray-600 text-sm font-medium text-center">On Track</p>
      </div>

      {/* Need Attention */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="text-5xl font-bold text-orange-600 mb-1 text-center">6</div>
        <p className="text-gray-600 text-sm font-medium text-center">Need Attention</p>
      </div>

      {/* Interactions This Month */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="text-5xl font-bold text-purple-600 mb-1 text-center">12</div>
        <p className="text-gray-600 text-sm font-medium text-center">Interactions This Month</p>
      </div>

    </div>
  );
};

export default StatsOverview;
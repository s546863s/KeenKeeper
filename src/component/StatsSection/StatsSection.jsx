import React from 'react';

const StatsSection = () => {
  // sata data object
  const statsData = [
    { id: 1, value: "10", label: "Total Friends" },
    { id: 2, value: "3", label: "On Track" },
    { id: 3, value: "6", label: "Need Attention" },
    { id: 4, value: "12", label: "Interactions This Month" },
  ];

  return (
    <div className="bg-white pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {statsData.map((stat) => (
          <div 
            key={stat.id} 
            className="card bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 py-10"
          >
            <div className="flex flex-col items-center justify-center text-center">
              {/* Number Value */}
              <h2 className="text-5xl font-bold text-[#1a303d] mb-2">
                {stat.value}
              </h2>
              {/* Label */}
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </p>
            </div>
          </div>
        ))}

      </div>
      
      
      <div className="max-w-7xl mx-auto mt-8 border-b border-gray-200"></div>
    </div>
  );
};

export default StatsSection;
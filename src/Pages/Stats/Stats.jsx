import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FriendContext } from '../../FriendContext/FriendContext';

const Stats = () => {
    const { logs } = useContext(FriendContext);

    // Data formate
    const dataCount = logs.reduce((acc, log) => {
        acc[log.type] = (acc[log.type] || 0) + 1;
        return acc;
    }, {});

    // make date for Chat
    const chartData = Object.keys(dataCount).map(key => ({
        name: key,
        value: dataCount[key]
    }));

    // color configuration 
    const COLORS = {
        'Text': '#A855F7',   // Purple
        'Call': '#1F4D36',   // Dark Green
        'Video': '#22C55E',  // Bright Green
        'Meetup': '#F59E0B'  // Orange (Optional)
    };

    return (
        <div className="p-10 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-[#1a303d]">Friendship Analytics</h1>

            <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h3 className="text-lg font-bold text-gray-700 mb-4">By Interaction Type</h3>
                
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}   
                                outerRadius={120}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#8884d8'} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36}/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;
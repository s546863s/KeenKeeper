import React, { useContext, useState } from 'react';
import { FriendContext } from '../../FriendContext/FriendContext';

const TimeLine = () => {
    const { logs } = useContext(FriendContext);
    const [filterType, setFilterType] = useState('All');
    
    
    // All data showing

    // Filtering all
    const filteredLogs = filterType === 'All' 
        ? logs 
        : logs.filter(log => log.type === filterType);

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-[#1a303d]">Timeline</h1>

            {/* Droupdoun  */}
            <div className="mb-8">
                <select 
                    className="select select-bordered w-full max-w-xs bg-white text-gray-500"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option value="All">Filter timeline (All)</option>
                    <option value="Call">Calls Only</option>
                    <option value="Text">Texts Only</option>
                    <option value="Video">Videos Only</option>
                    <option value="Meetup">Meetups Only</option>
                </select>
            </div>

            {/* loop tata filtaring*/}
            <div className="space-y-4">
                {filteredLogs.length > 0 ? (
                    filteredLogs.map(log => (
                        <div key={log.id} className="flex items-center p-4 bg-white border rounded-lg shadow-sm gap-4 transition-all hover:shadow-md">
                             <div className="text-2xl bg-gray-50 p-3 rounded-full">
                                {log.type === 'Call' && '📞'}
                                {log.type === 'Text' && '💬'}
                                {log.type === 'Video' && '🎥'}
                                {log.type === 'Meetup' && '🤝'}
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-lg">
                                    {log.type} <span className="text-gray-400 font-normal">with {log.friendName}</span>
                                </p>
                                <p className="text-gray-400 text-sm">{log.date} at {log.time}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 text-gray-400 border-2 border-dashed rounded-xl">
                        No {filterType} history found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeLine;
import React, { useContext } from 'react';
import { FriendContext } from '../../FriendContext/FriendContext';



const TimeLine = () => {
    const { logs } = useContext(FriendContext);
    return (
    <div className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Timeline</h2>
        <div className="space-y-4">
            {logs.map((log) => (
                <div key={log.id} className="flex items-center p-4 bg-white border rounded-lg shadow-sm gap-4">
                    <div className="text-2xl">
                        {log.type === 'Call' && '📞'}
                        {log.type === 'Text' && '💬'}
                        {log.type === 'Video' && '🎥'}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">
                            {log.type} <span className="text-gray-500 font-normal">with {log.friendName}</span>
                        </p>
                        <p className="text-gray-400 text-sm">{log.date} at {log.time}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default TimeLine;
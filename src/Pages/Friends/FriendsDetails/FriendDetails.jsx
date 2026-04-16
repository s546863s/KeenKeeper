import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LuPhone, LuMessageSquare, LuVideo, LuCalendarClock } from "react-icons/lu";
import { FriendContext } from '../../../FriendContext/FriendContext';

const FriendDetails = () => {

    const navigate = useNavigate();

    const { id } = useParams(); // URL to id
    const { friends, addLog } = useContext(FriendContext);

    // find Friend
    const friend = friends.find(f => f.id === parseInt(id));

    if (!friend) {
        return <div className="text-center py-20 text-2xl">Friend not found!</div>;
    }

    const handleAction = (type) => {
        const logEntry = {
            id: Date.now(),
            friendName: friend.name,
            type: type,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
        addLog(logEntry);
        alert(`${type} log added for ${friend.name}`);
    };


    const handelBack = () =>{
        navigate('/');
    }

    return (

       <section>
        <div className='mt-16 ml-8 mb-8'>
            <Link to={'/'}>
            <button className='btn btn-accent'>
                Go Back
            </button>
            </Link>
        </div>
         <div className="bg-gray-50  p-6 md:p-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
                
                {/* left card */}
               <div className="lg:col-span-2 space-y-6">
                 <div className="bg-white p-8 rounded-xl border shadow-sm text-center ">
                    <img 
                        src={friend.picture} 
                        alt={friend.name} 
                        className="w-32 h-32 rounded-full mx-auto border-4 border-gray-100 object-cover" 
                    />
                    <h2 className="text-2xl font-bold mt-4 text-[#1a303d]">{friend.name}</h2>
                    <div className="mt-2">
                        <span className="badge badge-success text-white px-4 py-3 uppercase text-xs font-bold">
                            {friend.status}
                        </span>
                    </div>
                    <div className="grid
                    grid-cols-2 md:grid-cols-3 gap-2 justify-center mt-4">
                        {friend.tags.map((tag, index) => (
                            <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-100">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-6 text-gray-500 italic">"{friend.bio}"</p>
                    <p className="mt-4 text-sm text-gray-400">Preferred: {friend.email}</p>
                </div>


                {/* Profile Card Section */}
<div className="bg-white p-4 rounded-xl border shadow-sm text-center">
   
    {/* ... tags and bio ... */}

    {/* (Action Buttons) */}
    <div className=" space-y-3">
        {/* Snooze Button */}
        <button className="btn btn-outline w-full bg-white text-[#1a303d] border-gray-200 hover:bg-gray-50 normal-case flex justify-center gap-3 py-3 h-auto">
            <LuCalendarClock className="text-xl" />
            <span className="font-semibold text-base">Snooze 2 weeks</span>
        </button>

        {/* Archive Button */}
        <button className="btn btn-outline w-full bg-white text-[#1a303d] border-gray-200 hover:bg-gray-50 normal-case flex justify-center gap-3 py-3 h-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"/><path d="M21 3H3v5h18V3z"/><path d="M10 12h4"/></svg>
            <span className="font-semibold text-base">Archive</span>
        </button>

        {/* Delete Button */}
        <button className="btn btn-outline w-full bg-white text-red-500 border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 normal-case flex justify-center gap-3 py-3 h-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            <span className="font-semibold text-base">Delete</span>
        </button>
    </div>
</div>
               </div>

                {/* Right card */}
                <div className="lg:col-span-3 space-y-6">
                    
                    {/* উপরের ছোট ৩টি কার্ড (Stats) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
                            <h4 className="text-4xl font-bold text-[#244d40]">{friend.days_since_contact}</h4>
                            <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
                            <h4 className="text-4xl font-bold text-[#244d40]">{friend.goal}</h4>
                            <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
                            <h4 className="text-xl font-bold text-[#244d40]">{friend.next_due_date}</h4>
                            <p className="text-gray-500 text-sm mt-1">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Section */}
                    <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold text-[#244d40]">Relationship Goal</h3>
                            <p className="text-gray-500">Connect every <span className="font-bold text-black">{friend.goal} days</span></p>
                        </div>
                        <button className="btn btn-outline btn-sm px-6">Edit</button>
                    </div>

                    {/* Quick Check-In (Buttons) */}
                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                        <h3 className="text-lg font-bold mb-6 text-[#244d40]">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleAction('Call')} className="btn btn-ghost border-gray-100 h-28 flex flex-col gap-2 hover:bg-gray-50">
                                <LuPhone size={32} />
                                <span className="font-bold">Call</span>
                            </button>
                            <button onClick={() => handleAction('Text')} className="btn btn-ghost border-gray-100 h-28 flex flex-col gap-2 hover:bg-gray-50">
                                <LuMessageSquare size={32} />
                                <span className="font-bold">Text</span>
                            </button>
                            <button onClick={() => handleAction('Video')} className="btn btn-ghost border-gray-100 h-28 flex flex-col gap-2 hover:bg-gray-50">
                                <LuVideo size={32} />
                                <span className="font-bold">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </section>
    );
};

export default FriendDetails;
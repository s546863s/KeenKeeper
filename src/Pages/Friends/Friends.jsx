import React from 'react';
import { Link } from 'react-router-dom';
import  { useContext } from 'react';
import { FriendContext } from '../../FriendContext/FriendContext';


const Friends = () => {
   const { friends, loading } = useContext(FriendContext);
   
   if (loading) return <div className="text-center mt-20">Loading friends...</div>;

   const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'overdue':
        return 'bg-[#ff4d4d] text-white'; // লাল কালার
      case 'almost due':
        return 'bg-[#f0ad4e] text-white'; // কমলা/হলুদ কালার
      case 'on-track':
        return 'bg-[#1a432e] text-white'; // গাঢ় সবুজ কালার
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };
  


    return (
       <section className=' mx-auto'>
        <h1 className='text-xl font-bold mb-6'>Your Friends:</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {friends.map(friend => (
                <Link to={`/details/${friend.id}`}>
                
                <div key={friend.id} className="card bg-base-100 shadow-xl border border-gray-100">
                    <figure className="px-10 pt-10">
                        <img src={friend.picture} alt={friend.name} className="rounded-full w-24 h-24 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1a303d]">{friend.name}</h2>
                        <span className={`badge ${getStatusClasses(friend.status)} text-white`}>
                            {friend.status}
                        </span>
                        <div className="card-actions mt-4">
                           
                        </div>
                    </div>
                </div>

                </Link>
            ))}
        </div>
       </section>
    );
};

export default Friends;
import React from 'react';
import { Link } from 'react-router-dom';

const Friends = ({friendsp}) => {
    console.log(friendsp)
    const friends = [
  {
    "id": 1,
    "name": "Ayesha Rahman",
    "picture": "https://randomuser.me/api/portraits/women/44.jpg",
    "email": "ayesha.rahman@email.com",
    "days_since_contact": 45,
    "status": "overdue",
    "tags": ["Painting", "Yoga", "Reading fiction"],
    "bio": "Passionate artist and yoga instructor who loves escaping into books on weekends. Always up for deep conversations over coffee.",
    "goal": 30,
    "next_due_date": "May 10, 2026"
  },
  {
    "id": 2,
    "name": "Rahim Khan",
    "picture": "https://randomuser.me/api/portraits/men/32.jpg",
    "email": "rahim.khan92@gmail.com",
    "days_since_contact": 5,
    "status": "on-track",
    "tags": ["Cricket", "Photography", "Cooking"],
    "bio": "Cricket enthusiast and amateur photographer. I enjoy experimenting with new recipes from around the world.",
    "goal": 14,
    "next_due_date": "April 19, 2026"
  },
  {
    "id": 3,
    "name": "Sofia Patel",
    "picture": "https://randomuser.me/api/portraits/women/68.jpg",
    "email": "sofia.patel@outlook.com",
    "days_since_contact": 18,
    "status": "almost due",
    "tags": ["Dancing", "Traveling", "Gardening", "Baking"],
    "bio": "Bollywood dance lover who dreams of exploring every corner of the world. My garden and kitchen are my happy places.",
    "goal": 21,
    "next_due_date": "April 26, 2026"
  },
  {
    "id": 4,
    "name": "Tariq Hossain",
    "picture": "https://randomuser.me/api/portraits/men/51.jpg",
    "email": "tariq.hossain@gmail.com",
    "days_since_contact": 62,
    "status": "overdue",
    "tags": ["Chess", "Cycling", "History"],
    "bio": "Strategic thinker who enjoys long bike rides and diving into historical novels. Always ready for a good debate.",
    "goal": 30,
    "next_due_date": "May 5, 2026"
  },
  {
    "id": 5,
    "name": "Nadia Chowdhury",
    "picture": "https://randomuser.me/api/portraits/women/22.jpg",
    "email": "nadia.chowdhury@yahoo.com",
    "days_since_contact": 12,
    "status": "on-track",
    "tags": ["Music", "Hiking", "Volunteering"],
    "bio": "Guitarist and nature lover. I spend my free time hiking trails and volunteering at local animal shelters.",
    "goal": 14,
    "next_due_date": "April 19, 2026"
  },
  {
    "id": 6,
    "name": "Imran Ahmed",
    "picture": "https://randomuser.me/api/portraits/men/86.jpg",
    "email": "imran.ahmed@protonmail.com",
    "days_since_contact": 28,
    "status": "almost due",
    "tags": ["Gaming", "Fitness", "Movies"],
    "bio": "Tech geek and fitness fanatic. I unwind by playing video games and watching classic films.",
    "goal": 21,
    "next_due_date": "April 26, 2026"
  },
  {
    "id": 7,
    "name": "Meherun Nessa",
    "picture": "https://randomuser.me/api/portraits/women/33.jpg",
    "email": "meherun.nessa@gmail.com",
    "days_since_contact": 3,
    "status": "on-track",
    "tags": ["Knitting", "Poetry", "Bird watching"],
    "bio": "Creative soul who finds peace in knitting and writing poetry. Early mornings are best spent watching birds.",
    "goal": 7,
    "next_due_date": "April 12, 2026"
  },
  {
    "id": 8,
    "name": "Kamal Bashir",
    "picture": "https://randomuser.me/api/portraits/men/45.jpg",
    "email": "kamal.bashir@email.com",
    "days_since_contact": 51,
    "status": "overdue",
    "tags": ["Football", "Coding", "Coffee tasting"],
    "bio": "Die-hard football fan and self-taught coder. Nothing beats a perfect cup of coffee on a Sunday morning.",
    "goal": 30,
    "next_due_date": "May 5, 2026"
  }
];

    return (
       <section className=' mx-auto'>
        <h1>Friends avelabol</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {friends.map(friend => (
                <div key={friend.id} className="card bg-base-100 shadow-xl border border-gray-100">
                    <figure className="px-10 pt-10">
                        <img src={friend.picture} alt={friend.name} className="rounded-full w-24 h-24 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1a303d]">{friend.name}</h2>
                        <span className={`badge ${friend.status === 'overdue' ? 'badge-error' : 'badge-success'} text-white`}>
                            {friend.status}
                        </span>
                        <div className="card-actions mt-4">
                            <Link to={`/details/${friend.id}`} className="btn bg-[#244d40] text-white hover:bg-[#1a3a30] border-none px-6">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </section>
    );
};

export default Friends;
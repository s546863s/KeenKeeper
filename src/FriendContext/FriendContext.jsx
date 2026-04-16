import React, { createContext, useState, useEffect } from 'react';

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    const [friends, setFriends] = useState([]); 

    const [logs, setLogs] = useState([]); 
    
    const [loading, setLoading] = useState(true); 

    // JSON useEffect hook 
    useEffect(() => {
        fetch('/friends.json') // 
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            })
            .catch(err => console.error("Data loading failed:", err));
    }, []);

    // activity log
    const addLog = (logEntry) => {
        const updatedLogs = [logEntry, ...logs];
        setLogs(updatedLogs);
        localStorage.setItem('activityLogs', JSON.stringify(updatedLogs));
    };

    return (
        <FriendContext.Provider value={{ friends, logs, addLog, loading }}>
            {children}
        </FriendContext.Provider>
    );
};
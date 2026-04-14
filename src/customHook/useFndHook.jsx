import React, { useEffect, useState } from 'react';

const useFndHook = () => {

 const [friends, setFriends] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const friendsFetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      console.log("Data fetching from custom hook page", data);
      setFriends(data);
      setLoading(false);
    };
    friendsFetchData();
  }, []);
    return {friends, loading};
};
 

export default useFndHook;
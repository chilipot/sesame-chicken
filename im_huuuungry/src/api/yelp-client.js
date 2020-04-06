import React, { useState, useEffect } from 'react';
import sortOn from 'sort-on';

const config = {
  method: 'GET',
  headers: { 'Authorization': `Bearer YqbefqOq2jNunehGeK0lKrKr7FPQlH8Nqkavs8o3zPo90dXss1nYVujW6z_Jp-YcLCK2u9lk1zM3ZjvL7oHerEvI179WqK_n0GnlYE7pHIUWVAEJuapAyLQduWJIXnYx` }
};

const useYelpApi = () => {
  const [businesses, setBusinesses] = useState([]);

  const getBusinesses = async (latitude, longitude) => {
    const res = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`, config);
    let { businesses } = await res.json();

    businesses = sortOn(businesses, 'distance');
    setBusinesses(businesses)
  };

  return [businesses, getBusinesses]
};

export default useYelpApi;
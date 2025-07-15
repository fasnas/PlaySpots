import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const VenueContext = createContext();

export const VenueProvider = ({ children }) => {
  const [venues, setVenues] = useState([]);
  const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchVenues = async () => {
    try {
      const response = await axios.get("https://phtest.demosoftfruit.com/venue-api/");
      const sorted = quickSort(response.data);
      setVenues(sorted);
      setLoading(false); // ✅ set loading to false on success
    } catch (err) {
      console.error("Failed to fetch venues:", err);
      setLoading(false); // ✅ set loading to false on failure
    }
  };
  fetchVenues();
}, []);

  
  const quickSort = (data) => {
    return data.sort((a, b) => a.kilometres-b.kilometres);
  };

  return (
    <VenueContext.Provider value={{ venues, favorites, setFavorites,loading }}>
      {children}
    </VenueContext.Provider>
  );
};

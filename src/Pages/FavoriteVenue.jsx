import { useContext } from "react";
import { VenueContext } from "../Context/Context";

const FavoritesPage = () => {
  const { favorites, setFavorites } = useContext(VenueContext);
  const lifoOrder = [...favorites].reverse(); // Avoid mutating original state

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((venue) => venue.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Favorite Venues</h1>

      {lifoOrder.length === 0 ? (
        <p className="text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifoOrder.map((venue) => (
            <div
              key={venue.id}
              className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition duration-200"
            >
              <img
                src={`https://phtest.demosoftfruit.com/${venue.logo}`}
                alt={venue.name}
                className="w-full h-48 object-contain bg-gray-50"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{venue.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{venue.address}</p>
                <p className="text-sm text-green-600 font-medium mb-4">
                  Rating: {venue.rating} ⭐
                </p>
                <button
                  onClick={() => removeFromFavorites(venue.id)}
                  className="w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

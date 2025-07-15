import { useContext } from "react";
import { VenueContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

const VenueList = () => {
  const { venues, favorites, setFavorites, loading } = useContext(VenueContext);
  const navigate = useNavigate();

  const toggleFavorite = (venue) => {
    const exists = favorites.some((f) => f.id === venue.id);
    setFavorites(
      exists ? favorites.filter((f) => f.id !== venue.id) : [...favorites, venue]
    );
  };

  const isFavorited = (id) => favorites.some((f) => f.id === id);

  if (loading) return <Loader />;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Venues</h1>
        <button
          onClick={() => navigate("/favorites")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-200"
        >
          View Favorites
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
      >
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition duration-200 overflow-hidden"
          >
            <img
              src={`https://phtest.demosoftfruit.com/${venue.logo}`}
              alt={venue.name}
              className="w-full h-48 object-contain bg-gray-50"
              onClick={() => navigate(`/${venue.id}`)}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{venue.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{venue.address}</p>
              <div className="text-sm text-gray-700 space-y-1 mb-3">
                <p><span className="font-medium text-green-600">Rating:</span> {venue.rating} ⭐</p>
                <p><span className="font-medium text-blue-600">Sports:</span> {venue.sports?.join(", ")}</p>
                <p><span className="font-medium">Distance:</span> {venue.kilometres} km</p>
              </div>
              <button
                onClick={() => toggleFavorite(venue)}
                className={`w-full py-2 rounded-lg font-medium transition duration-150 ${
                  isFavorited(venue.id)
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {isFavorited(venue.id) ? "Remove Favorite" : "Add to Favorite"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueList;

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { VenueContext } from "../Context/Context";

const VenueDetails = () => {
  const { id } = useParams();
  const { venues } = useContext(VenueContext);

  const venue = venues.find((v) => v.id === parseInt(id));

  if (!venue)
    return (
      <div className="text-center mt-20 text-xl font-semibold text-gray-600">
        Venue not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-10 md:p-14 border border-gray-200">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
          {venue.name}
        </h1>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={`https://phtest.demosoftfruit.com/${venue.logo}`}
              alt={venue.name}
              className="w-full h-80 object-contain bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-4"
            />
          </div>

          <div className="flex-1 space-y-6 text-gray-800 text-lg">
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-900">📍 Address:</span>{" "}
                {venue.address}
              </p>
              <p>
                <span className="font-semibold text-gray-900">📏 Distance:</span>{" "}
                {venue.kilometres} km
              </p>
              <p>
                <span className="font-semibold text-gray-900">⭐ Rating:</span>{" "}
                {venue.rating}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                🏅 Sports & Pricing
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venue.sports.map((sport) => (
                  <li
                    key={sport}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center shadow-sm"
                  >
                    <span className="font-medium">{sport}</span>
                    <span className="text-green-600 font-bold">
                      ₹{venue.price[sport]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;

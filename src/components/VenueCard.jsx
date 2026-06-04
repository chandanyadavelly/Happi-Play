import { Link } from "react-router-dom";
import { Star, Users } from "lucide-react";

const VenueCard = ({ venue }) => {
  return (
    <Link to={`/venue/${venue.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">

        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-52 object-cover"
        />

        <div className="p-4">

          <h2 className="text-xl font-semibold">
            {venue.name}
          </h2>

          {/* Sport + Rating Row */}
          <div className="flex justify-between items-center mt-3">

            <span className="bg-[#E8F0D5] text-[#556B2F] px-3 py-1 rounded-full text-sm font-medium">
              {venue.sport}
            </span>

            <div className="flex items-center gap-3 text-sm">
              
              <div className="flex items-center gap-1 text-sm text-gray-700">
  <Star
    size={16}
    fill="gold"
    stroke="gold"
  />
  <span>{venue.rating}</span>

  <span className="text-gray-500">
    by
  </span>

  <Users size={16} />

  <span>{venue.players}</span>
</div>

            </div>

          </div>

          <p className="font-bold text-[#556B2F] mt-4">
            ₹{venue.price}/hour
          </p>

          <button className="mt-4 bg-[#556B2F] text-white px-4 py-2 rounded-lg w-full hover:bg-[#445523]">
            View Details
          </button>

        </div>
      </div>
    </Link>
  );
};

export default VenueCard;
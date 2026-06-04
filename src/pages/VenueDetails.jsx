import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import venues from "../data/venues";
import { useState } from "react";

const VenueDetails = () => {
  const { id } = useParams();

  const venue = venues.find(
    (v) => v.id === Number(id)
  );

  const [selectedSlot, setSelectedSlot] =
    useState("");

  const slots = [
    "6:00 AM - 7:00 AM",
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "6:00 PM - 7:00 PM",
  ];

  if (!venue) {
    return <h1>Venue not found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#F8F8F2]">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-96 object-cover rounded-xl"
        />

        <h1 className="text-4xl font-bold mt-6">
          {venue.name}
        </h1>

        <p className="text-gray-600 mt-2">
          📍 {venue.location}
        </p>

        <p className="text-yellow-500 mt-2">
          ⭐ {venue.rating}
        </p>

        <p className="text-[#556B2F] font-bold text-2xl mt-2">
          ₹{venue.price}/hour
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Amenities
          </h2>

          <div className="space-y-2">
            <p>✓ Parking</p>
            <p>✓ Washroom</p>
            <p>✓ Drinking Water</p>
            <p>✓ Seating Area</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Available Slots
          </h2>

          <div className="flex flex-wrap gap-3">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() =>
                  setSelectedSlot(slot)
                }
                className={`px-4 py-2 rounded-lg border ${
                  selectedSlot === slot
                    ? "bg-[#556B2F] text-white"
                    : "bg-white"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-8 bg-[#556B2F] text-white px-8 py-3 rounded-xl text-lg">
          Book Now
        </button>

      </div>
    </div>
  );
};

export default VenueDetails;
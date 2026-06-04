import { Search, MapPin } from "lucide-react";
import { useState } from "react";

const cities = [
  "Vijayawada",
  "Hyderabad",
  "Visakhapatnam",
  "Warangal",
  "Guntur",
  "Tirupati",
  "Rajahmundry",
  "Kakinada",
  "Nellore",
  "Khammam",
];

const LocationModal = ({
  isOpen,
  selectedLocation,
  setSelectedLocation,
  onConfirm,
}) => {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleCitySelect = (city) => {
    setSelectedLocation(city);
    onConfirm();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-2xl w-[95%] max-w-6xl shadow-2xl overflow-hidden">

        {/* Search Bar */}
        <div className="p-6 border-b">
          <div className="flex items-center border rounded-lg px-4 py-3">
            <Search size={22} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search for your city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-3 outline-none w-full"
            />
          </div>

          <button
            className="flex items-center gap-2 mt-4 text-red-500 font-medium"
            onClick={() => {
              setSelectedLocation("Current Location");
              onConfirm();
            }}
          >
            <MapPin size={18} />
            Detect my location
          </button>
        </div>

        {/* Popular Cities */}
        <div className="p-8">
          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8">
            Popular Cities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

            {filteredCities.map((city) => (
              <div
                key={city}
                onClick={() => handleCitySelect(city)}
                className="cursor-pointer flex flex-col items-center hover:scale-105 transition"
              >
                <div className="w-20 h-20 rounded-full bg-[#F8F8F2] border flex items-center justify-center text-3xl">
                  🏟️
                </div>

                <p className="mt-3 font-medium text-gray-700 text-center">
                  {city}
                </p>
              </div>
            ))}

          </div>

          <div className="text-center mt-10">
            <button className="text-red-500 font-medium hover:underline">
              View All Cities
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LocationModal;
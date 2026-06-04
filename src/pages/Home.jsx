import Navbar from "../components/Navbar";
import VenueCard from "../components/VenueCard";
import venues from "../data/venues";
import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [search, setSearch] = useState("");
const [location, setLocation] =
  useState("Vijayawada");

const [showModal, setShowModal] =
  useState(true);

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F8F2]">
      <Navbar />
      <LocationModal
  isOpen={showModal}
  selectedLocation={location}
  setSelectedLocation={setLocation}
  onConfirm={() => setShowModal(false)}
/>
      

      <div className="max-w-7xl mx-auto p-6">

        <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4">

          <input
            type="text"
           placeholder={`Search venues in ${location}`}
            readOnly
            className="border p-3 rounded-lg flex-1"
          />

          <input
            type="text"
            placeholder="Search venue by name"
            className="border p-3 rounded-lg flex-1"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="border p-3 rounded-lg">
            <option>Filters</option>
            <option>Badminton</option>
            <option>Football</option>
            <option>Cricket</option>
          </select>

        </div>

        <h2 className="text-3xl font-bold text-[#556B2F] mt-8 mb-6">
          Venues
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
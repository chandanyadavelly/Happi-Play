import { UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#556B2F] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="w-12">
          {/* Future Logo */}
        </div>

        <h1 className="text-3xl font-bold tracking-wide">
          Happi Play
        </h1>

        <UserCircle size={32} />
      </div>
    </nav>
  );
};

export default Navbar;
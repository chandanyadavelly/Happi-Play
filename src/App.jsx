import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VenueDetails from "./pages/VenueDetails";
import MasterSignIn from "./pages/MasterSignIn";
import OwnerSignIn from "./pages/OwnerSignIn";
import OwnerSignUp from "./pages/OwnerSignUp";
import PlayerSignIn from "./pages/PlayerSignIn";
import PlayerSignUp from "./pages/PlayerSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue/:id" element={<VenueDetails />} />

        <Route path="/master-signin" element={<MasterSignIn />} />
        <Route path="/owner-signin" element={<OwnerSignIn />} />
        <Route path="/owner-signup" element={<OwnerSignUp />} />
        <Route path="/player-signin" element={<PlayerSignIn />} />
        <Route path="/player-signup" element={<PlayerSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

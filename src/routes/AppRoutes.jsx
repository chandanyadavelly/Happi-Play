import { BrowserRouter, Routes, Route } from "react-router-dom";

import OwnerSignIn from "../pages/OwnerSignIn";
import OwnerSignUp from "../pages/OwnerSignUp";
import PlayerSignIn from "../pages/PlayerSignIn";
import PlayerSignUp from "../pages/PlayerSignUp";
import MasterSignIn from "../pages/MasterSignIn";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OwnerSignIn />} />
        <Route path="/owner-signin" element={<OwnerSignIn />} />
        <Route path="/owner-signup" element={<OwnerSignUp />} />
        <Route path="/player-signin" element={<PlayerSignIn />} />
        <Route path="/player-signup" element={<PlayerSignUp />} />
        <Route path="/master-signin" element={<MasterSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

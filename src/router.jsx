import React from "react";
import { Route, Routes } from "react-router-dom";
import Memory from "./components/templates/dashboard/Memory";
import Users from "./components/templates/dashboard/Users";

function RoutesMap() {
  return (
    <Routes>
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/memory" element={<Memory />} />
      <Route path="*" element={''} />
    </Routes>
  );
}

export default RoutesMap;

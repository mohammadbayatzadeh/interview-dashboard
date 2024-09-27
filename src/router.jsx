import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//templates
import Memory from "./components/templates/dashboard/Memory";
import Users from "./components/templates/dashboard/Users";

function RoutesMap() {
  return (
    <Routes>
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/memory" element={<Memory />} />
      <Route
        path="*"
        element={<Navigate to="/dashboard/users" replace={true} />}
      />
    </Routes>
  );
}

export default RoutesMap;

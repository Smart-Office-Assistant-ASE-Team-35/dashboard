import React from "react";
import TheMain from "./Components/TheMain";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Error from "./Pages/404/Error";

export const MainWrapper = styled(Box)({
  display: "flex",
  ".mainContent": {
    width: "100%",
  },
});

function App() {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/" element={<TheMain />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </MainWrapper>
  );
}

export default App;

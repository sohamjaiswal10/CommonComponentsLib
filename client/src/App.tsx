import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.scss";

import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";
import { Main } from "./pages/main";

export const App = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState(<></>);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"404"} />} />
          <Route path="/api/login" element={<Login />} />
          <Route path="/api/signup" element={<SignUp />} />
          <Route
            path="/main"
            element={
              <Main
                search={search}
                setSearch={setSearch}
                view={view}
                setView={setView}
              />
            }
          />
          {/* <Route path="*" element={<span> 404 </span>} /> */}
        </Routes>
      </Router>
    </div>
  );
};

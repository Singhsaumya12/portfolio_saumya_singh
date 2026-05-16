import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import StarBackground from "./Stars";
import CursorGlow from "./CursorGlow";
import Loader from "./Loader";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <StarBackground />
      <CursorGlow />

      <Navbar />

      <main className="pt-20">
        {children}
      </main>
    </>
  );
};

export default Layout;

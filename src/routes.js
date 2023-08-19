import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader/loader";
import Navbar from "./components/navbar/navbar";
const LazyHome = React.lazy(() => import("./pages/home"));
const LazyDashboard = React.lazy(() => import("./pages/dashboard"));
const Lazyprofile = React.lazy(() => import("./pages/profile"));

function Routing() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              {/* <LazyHome /> */}
            </React.Suspense>
          }
        >
          Home
        </Route>
        <Route
          path="/dashboard"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyDashboard />
            </React.Suspense>
          }
        >
          Dashboard
        </Route>
        <Route
          path="/profile"
          element={
            <React.Suspense fallback={<Loader />}>
              <Lazyprofile />
            </React.Suspense>
          }
        >
          Profile
        </Route>
      </Routes>
    </>
  );
}

export default Routing;

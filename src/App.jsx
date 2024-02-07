import { Suspense, lazy } from "react";
import "./App.css";
import Contact from "./components/Pages/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import Home from "./components/Pages/Home";
// import Root from "./components/Pages/Root";
const Root = lazy(() => import("./components/Shared/Root"));
const Home = lazy(() => import("./components/Pages/Home"));
const Reducer = lazy(() => import("./components/Pages/Reducer"));

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "reducer",
          element: <Reducer />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

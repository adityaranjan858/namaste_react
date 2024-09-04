import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestroMenu from "./components/RestroMenu";
import { UserContext } from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import { appStore } from "./redux/store/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    let data = {
      name: "Aditya Ranjan",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
      <Provider store={appStore}>
        {/* by default , it will show "Default User" */}
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          {/* Aditya Ranjan */}
          <div className="container-fluid">
            {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
            {/* Elon Musk */}
            <Header />
            {/* </UserContext.Provider> */}
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      // ":resId" : this part of the URL is dynamic.
      // this means resId can be changed according to the ID of the restaurant.
      // So, this resId will be the ID of the restaurant.
      {
        path: "/restaurants/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

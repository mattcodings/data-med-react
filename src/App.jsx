import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Error,
  HomeLayout,
  Landing,
  Login,
  Products,
  PrivateRoute,
  Checkout,
  Register,
  SingleProduct,
  Profile,
} from "./pages";
import Test from "./pages/Test";
import Tab1 from "./components/CheckoutContainer/Tab1";
import Tab2 from "./components/CheckoutContainer/Tab2";
import Tab3 from "./components/CheckoutContainer/Tab3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Tab1 /> },
          { path: "tab1", element: <Tab1 /> },
          { path: "tab2", element: <Tab2 /> },
          { path: "tab3", element: <Tab3 /> },
        ],
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RegisterPage } from "./Pages/RegisterPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/404.jsx";
import Producs from "./Pages/Producs.jsx";
import Profile from "./Pages/Profile.jsx";
import { ProductDetail } from "./Pages/ProductDetail.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./context/DarkMode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/producs",
    element: <Producs />,
  }
  ,
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/producs/:id",
    element: <ProductDetail />
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);

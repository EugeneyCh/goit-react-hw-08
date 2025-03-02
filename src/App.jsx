import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Contacts from "./pages/ContactsPage/ContactsPage";
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <RestrictedRoute component={<Login />} redirectTo="/contacts" />
        }
      />
      <Route
        path="/register"
        element={<RestrictedRoute component={<Register />} redirectTo="/" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { lazy, useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const ContactsPage = lazy(() => import("./pages/Contacts"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;

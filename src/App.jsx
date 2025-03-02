// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";

// import s from "./App.module.css";
// import { useEffect } from "react";
// import { fetchContacts } from "./redux/contacts/operations";
// import { useDispatch } from "react-redux";

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const abortController = new AbortController();
//     dispatch(fetchContacts({ signal: abortController.signal }));
//     return () => {
//       abortController.abort();
//     };
//   }, [dispatch]);

//   return (
//     <div className={s.flexContainer}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contacts from "./pages/ContactsPage/ContactsPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
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

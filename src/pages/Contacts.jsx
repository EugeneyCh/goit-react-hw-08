import { useSelector } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import { selectLoading } from '../redux/contacts/selectors';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
};

export default Contacts;

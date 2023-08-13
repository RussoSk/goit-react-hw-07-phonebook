import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilterValue } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import Contact from 'components/Contact/Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);
  const filteredContacts = filterValue
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : contacts;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactList;

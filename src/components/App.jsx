import React from 'react';
import { Container, Ul } from './App.styled';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Container>
      <Title text="Phonebook" />
      <ContactForm />
      <Title text="Contacts" />
      <Filter />
      <Ul>
        <ContactList />
      </Ul>
      <Toaster />
    </Container>
  );
};

export default App;


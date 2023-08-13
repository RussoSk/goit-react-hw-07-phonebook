import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { FormTag, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addNewContact = (name, number) => {
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!isContactExist) {
      dispatch(addContact({ name, phone: number }));
      setName('');
      setNumber('');
    } else {
      Notify.warning('Sorry, but this name already exists!');
      
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    addNewContact(name, number);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <FormTag onSubmit={submitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number.trim()}
          required
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Button type="submit" >Add contact</Button>
    </FormTag>
  );
};

export default ContactForm;

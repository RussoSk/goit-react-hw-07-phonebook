
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { Button, ListItem } from './Contact.styled';


const Contact = ({ contact }) => {
  
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id)).finally(() => {
    });
  };

  return (
    <ListItem>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <Button type="button" onClick={handleDeleteClick} >
        Delete
      </Button>
    </ListItem>
  );
};

export default Contact;

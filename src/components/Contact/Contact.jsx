import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { List, Item, BtnDelete } from './Contact.module';

export const ContactItem = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <div>
              <FaUserAlt />
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </div>
            <BtnDelete type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </BtnDelete>
          </Item>
        );
      })}
    </List>
  );
};

ContactItem.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      numder: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

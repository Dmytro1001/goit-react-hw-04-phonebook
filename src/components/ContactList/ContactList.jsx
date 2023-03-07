import { ContactWrapper } from './ContactList.module';

export const ContactList = ({ children }) => {
  return (
    <ContactWrapper>
      <h2>Contacts</h2>
      {children}
    </ContactWrapper>
  );
};

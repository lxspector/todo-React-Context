import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const UserContacts = () => {
  const { email, phone } = useContext(AppContext);
  return (
    <div>
      <h3>Контакты</h3>
      <div>Почта: {email}</div>
      <div>Телефон: {phone}</div>
    </div>
  );
};

import { UserPersonalInfo, UserContacts } from './components';

export const UserBlock = () => {
  return (
    <div>
      <h2>Пользователь</h2>
      <UserPersonalInfo />
      <UserContacts />
    </div>
  );
};

import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const UserPersonalInfo = () => {
  const { name, age } = useContext(AppContext);
  return (
    <div>
      <h3>Персональные данные</h3>
      <div>Имя: {name}</div>
      <div>Возраст: {age}</div>
    </div>
  );
};

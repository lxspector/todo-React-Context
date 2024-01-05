import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const CurrentUser = () => {
  const { name } = useContext(AppContext);
  return (
    <div>
      <div>Текущий пользователь: {name}</div>
    </div>
  );
};

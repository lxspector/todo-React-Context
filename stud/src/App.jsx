import { useState, useEffect } from 'react';
import { Header, UserBlock } from './components';
import styles from './App.module.css';
import { AppContext } from './context';

const getUserFromServer = () => ({
  id: 'a1001',
  name: 'Иван',
  age: 25,
  email: 'ivan@mail.ru',
  phone: '+7999-999-99-99',
});

const getAnotherGetUserFromServer = () => ({
  id: 'a1001',
  name: 'Василий',
  age: 25,
  email: 'ivan@mail.ru',
  phone: '+7999-999-99-99',
});

export const App = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const userDataFromServer = getUserFromServer();

    setUserData(userDataFromServer);
  }, []);

  const onUserChange = () => {
    const anotherUserDataFromServer = getAnotherGetUserFromServer();

    setUserData(anotherUserDataFromServer);
  };

  return (
    <AppContext.Provider value={userData}>
      <div className={styles.app}>
        <Header />
        <hr />
        <UserBlock />
        <button onClick={onUserChange}>Сменить пользователя</button>
      </div>
    </AppContext.Provider>
  );
};

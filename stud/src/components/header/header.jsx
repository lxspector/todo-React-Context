import { CurrentUser } from './components';

export const Header = () => {
  return (
    <div>
      <div>Информация в шапке приложения</div>
      <CurrentUser />
    </div>
  );
};

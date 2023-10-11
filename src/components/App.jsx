import Contact from './Contact/Contact';
import css from './App.module.css';

const testContact = {
  id: 'id-1',
  name: 'Stan Alexandru',
  number: '0729626513',
};

export const App = () => {
  return (
    <div className={css.container}>
      <Contact contact={testContact}></Contact>
    </div>
  );
};

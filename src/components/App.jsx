import Contact from './Contact/Contact';

const testContact = {
  id: 'id-1',
  name: 'Stan Alexandru',
  number: '0729626513',
};

export const App = () => {
  return <Contact contact={testContact}></Contact>;
};

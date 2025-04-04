import { AppBar } from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <ContactForm />
      <ContactList />
    </Layout>
  );
};

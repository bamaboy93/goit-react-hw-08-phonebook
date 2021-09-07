import React from 'react';
import Typography from '@mui/material//Typography';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/operations';

import ContactForm from '../Components/Form/Form';
import ContactsList from '../Components/ContactList/ContactList';
import Filter from '../Components/Filter/Filter';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <div className="Container">
      <Typography component="h1" variant="h2" sx={{ mt: 10, mb: 5 }}>
        Phonebook
      </Typography>

      <ContactForm />

      <Typography component="h2" variant="h4" sx={{ mt: 5, mb: 5 }}>
        Contacts
      </Typography>

      <Filter />

      <ContactsList />
    </div>
  );
}

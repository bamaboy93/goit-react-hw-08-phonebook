import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/operations';
import { getContacts } from '../../redux/selectors';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const inputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');
    if (!name || !number) return;

    const contactName = contacts.map(contact => contact.name.toLowerCase());
    if (contactName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(operations.addContact(name, number));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={formSubmit}
    >
      <TextField
        id="outlined-required"
        label="Name"
        defaultValue="Hello World"
        type="text"
        onChange={inputChange}
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />

      <TextField
        id="outlined-required"
        label="Tel"
        defaultValue="Hello World"
        type="tel"
        value={number}
        onChange={inputChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      />

      <IconButton color="primary" aria-label="add " type="submit" size="large">
        <AddBoxIcon />
      </IconButton>
    </Box>
  );
};

export default Form;

import * as React from 'react';
import operations from '../../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilteredContacts } from '../../redux/selectors';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function GutterlessList() {
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <List sx={{ width: '100%', maxWidth: 500, mt: 5 }}>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          disableGutters
          secondaryAction={
            <IconButton onClick={() => onDeleteContact(id)} color="primary">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <AccountBoxIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={` ${name}: ${number}`} />
        </ListItem>
      ))}
    </List>
  );
}

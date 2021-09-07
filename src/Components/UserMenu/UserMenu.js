import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

const styles = {
  div: {
    textAlign: 'right',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.div}>
      <Typography component="subtitle1" sx={{ mr: 1 }}>
        Welcome {name}!
      </Typography>

      <IconButton onClick={() => dispatch(authOperations.logOut())}>
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
}

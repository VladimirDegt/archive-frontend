import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Avatar, Container } from '@mui/material';
import { selectAvatar } from 'redux/users/selectors';

export const CardUser = ({ handleClose, isCardUser, user }) => {
  const avatarURL = useSelector(selectAvatar);

  return (
    <Container sx={{ paddingTop: 10 }} align="center">
      <Card sx={{ maxWidth: 240 }} open={isCardUser} onClose={handleClose}>
        <Avatar
          alt="avatar"
          src={avatarURL}
          sx={{
            width: 56,
            height: 56,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 2,
            marginTop: 2,
          }}
        />
        <CardContent>
          <Typography variant="h5">Email:</Typography>
          <Typography mb={2}> {user?.email}</Typography>
          <Typography variant="h5">Subscription:</Typography>
          <Typography>{user?.subscription} </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleClose}>Cancel</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

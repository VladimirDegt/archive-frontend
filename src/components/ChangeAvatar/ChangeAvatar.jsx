import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
} from '@mui/material';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAvatar } from 'redux/users/reducer';
import { selectAvatar } from 'redux/users/selectors';
import { useChangeAvatarMutation } from 'utils/RTK-Query';

export const ChangeAvatar = ({ isOpen, handleClose, user }) => {
  const avatar = useSelector(selectAvatar);
  const dispatch = useDispatch();
  const [changeAvatar] = useChangeAvatarMutation();
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      Notify.warning('Please choose a file', {
        position: 'center-top',
        distance: '10px',
      });
      return;
    }
    setSelectedFile('');
    handleClose();
    Notify.success('Avatar upgrade', {
      position: 'center-top',
      distance: '10px',
    });
    try {
      const response = await changeAvatar(selectedFile);
      const avatarURL = `http://localhost:3001/${response.data}`;
      dispatch(addAvatar(avatarURL));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="registration">
      <form onSubmit={handleSubmit}>
        <DialogTitle id="registration" sx={{ textAlign: 'center' }}>
          Change avatar
        </DialogTitle>
        <Avatar
          alt="avatar"
          src={avatar}
          sx={{
            width: 56,
            height: 56,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 2,
            marginTop: 2,
          }}
        />
        <DialogContent>
          <InputLabel htmlFor="file-upload">Choose file</InputLabel>
          <TextField
            autoFocus
            margin="dense"
            name="avatar"
            id="file-upload"
            type="file"
            fullWidth
            onChange={handleFileChange}
          />
        </DialogContent>
        <DialogActions
          sx={{
            paddingRight: 3,
            paddingLeft: 3,
            justifyContent: 'center',
          }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Change</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

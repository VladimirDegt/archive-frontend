import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegistrForm/RegistrForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ChangeAvatar } from 'components/ChangeAvatar/ChangeAvatar';
import { LoadFileForm } from 'components/LoadFileForm/LoadFileForm';
import {
  useLogoutMutation,
} from 'utils/RTK-Query';
import { selectAvatar, selectToken } from 'redux/users/selectors';
import { deleteToken } from 'redux/users/reducer';
import { Notify } from 'notiflix';

export const Header = () => {
  const dispatch = useDispatch();
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenChangeAvatar, setIsOpenChangeAvatar] = useState(false);
  const [isOpenLoadFile, setIsOpenLoadFile] = useState(false);
  const { token } = useSelector(selectToken);
  const avatarURL = useSelector(selectAvatar);

  const [logout] = useLogoutMutation();

  const handleClickOpenRegistrationForm = () => {
    setIsOpenRegister(true);
  };

  const handleClickOpenLoginForm = () => {
    setIsOpenLogin(true);
  };

  const handleClose = () => {
    setIsOpenRegister(false);
    setIsOpenLogin(false);
    setIsOpenChangeAvatar(false);
    setIsOpenLoadFile(false)
  };

  const handleClickLogout = async () => {
    try {
      const response = await logout();
      if (!response.data) {
        dispatch(deleteToken());
        Notify.success('User logout', {
          position: 'center-top',
          distance: '10px',
        });
      }
    } catch (error) {}
  };


  const handleClickLoadFile = () => {
    setIsOpenLoadFile(true)
  }

  const handleClickChangeAvatar = () => {
    setIsOpenChangeAvatar(true);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          {token && (
            <Box>
              <Button color="inherit" onClick={handleClickChangeAvatar}>
                <Avatar
                  alt="avatar"
                  src={avatarURL}
                  sx={{ width: 30, height: 30 }}
                />
              </Button>
              <Button color="inherit" onClick={handleClickLoadFile}>
                <Typography>Load file</Typography>
              </Button>
            </Box>
          )}

          <Box ml={'auto'}>
            {token ? (
              <Button color="inherit" onClick={handleClickLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button color="inherit" onClick={handleClickOpenLoginForm}>
                  Log In
                </Button>
                <Button
                  color="inherit"
                  onClick={handleClickOpenRegistrationForm}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {isOpenRegister && (
        <RegisterForm handleClose={handleClose} isOpen={isOpenRegister} />
      )}
      {isOpenLogin && (
        <LoginForm handleClose={handleClose} isOpen={isOpenLogin} />
      )}

      {isOpenChangeAvatar && (
        <ChangeAvatar
          handleClose={handleClose}
          isOpen={isOpenChangeAvatar}
        />
      )}

      {isOpenLoadFile && (
        <LoadFileForm handleClose={handleClose} isOpen={isOpenLoadFile} />
      )}
    </>
  );
};

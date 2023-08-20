import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegistrForm/RegistrForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ChangeAvatar } from 'components/ChangeAvatar/ChangeAvatar';
import { LoadFileForm } from 'components/LoadFileForm/LoadFileForm';
import { useLogoutMutation } from 'utils/RTK-Query';
import {
  selectAvatar,
  selectNameUser,
  selectToken,
} from 'redux/users/selectors';
import { deleteToken } from 'redux/users/reducer';
import { Notify } from 'notiflix';
import logo from '../../img/logo.png';

export const Header = ({ data }) => {
  const dispatch = useDispatch();
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenChangeAvatar, setIsOpenChangeAvatar] = useState(false);
  const [isOpenLoadFile, setIsOpenLoadFile] = useState(false);
  const { token } = useSelector(selectToken);
  const avatarURL = useSelector(selectAvatar);
  const nameUser = useSelector(selectNameUser);

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
    setIsOpenLoadFile(false);
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
    setIsOpenLoadFile(true);
  };

  const handleClickChangeAvatar = () => {
    setIsOpenChangeAvatar(true);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              overflow: 'hidden',
              marginRight: 2,
            }}
          >
            <a
              href="http://www.infocity.kharkov.ua/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: 16 }}
            >
              <img src={logo} alt="Logo" width="30" height="30" />
            </a>
          </Box>
          {token && <Typography variant="h6">Welcome, {nameUser}</Typography>}
          {token && (
            <Button color="inherit" onClick={handleClickChangeAvatar}>
              <Avatar
                alt="avatar"
                src={avatarURL}
                sx={{ width: 30, height: 30 }}
              />
            </Button>
          )}
          {token && (
            <Button
              color="inherit"
              onClick={handleClickLoadFile}
              variant="text"
              sx={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              <Typography>Завантажити файл</Typography>
            </Button>
          )}

          <Box>
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
        <ChangeAvatar handleClose={handleClose} isOpen={isOpenChangeAvatar} />
      )}

      {isOpenLoadFile && (
        <LoadFileForm
          handleClose={handleClose}
          isOpen={isOpenLoadFile}
          data={data}
        />
      )}
    </>
  );
};

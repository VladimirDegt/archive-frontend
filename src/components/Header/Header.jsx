import { AppBar, Avatar, Box, Button, Toolbar } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegistrForm/RegistrForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { CardUser } from 'components/CardUser/CardUser';
import { ChangeAvatar } from 'components/ChangeAvatar/ChangeAvatar';
import {
  useCurrentUserQuery,
  useLogoutMutation,
  useGetContactsQuery,
} from 'utils/RTK-Query';
import { selectAvatar, selectToken } from 'redux/users/selectors';
import { deleteToken } from 'redux/users/reducer';
import { Notify } from 'notiflix';

export const Header = ({handleOpenContacts, getContacts}) => {
  const dispatch = useDispatch();
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isCardUser, setIsCardUser] = useState(false);
  const [isOpenChangeAvatar, setIsOpenChangeAvatar] = useState(false);
  const { token } = useSelector(selectToken);
  const avatarURL = useSelector(selectAvatar);

  const { data: user, refetch: currentUser } = useCurrentUserQuery();
  const { data: allContacts, refetch: fetchContacts } = useGetContactsQuery();

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
    setIsCardUser(false);
    setIsOpenChangeAvatar(false);
  };

  const handleClickCurrent = () => {
    currentUser();
    setIsCardUser(true);
  };

  const handleClickContacts = async () => {
    try {
      await fetchContacts();
      getContacts(allContacts)
      handleOpenContacts();
    } catch (error) {
      console.log(error.message);
    }
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

  const handleClickChangeAvatar = () => {
    setIsOpenChangeAvatar(true);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          {token && (
            <Button color="inherit" onClick={handleClickContacts}>
              Contacts
            </Button>
          )}

          {token && (
            <Button color="inherit" onClick={handleClickChangeAvatar}>
              <Avatar
                alt="avatar"
                src={avatarURL}
                sx={{ width: 30, height: 30 }}
              />
            </Button>
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
            {token && (
              <Button color="inherit" onClick={handleClickCurrent}>
                Current User
              </Button>
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
      {isCardUser && (
        <CardUser handleClose={handleClose} isOpen={isCardUser} user={user} />
      )}
      {isOpenChangeAvatar && (
        <ChangeAvatar
          handleClose={handleClose}
          isOpen={isOpenChangeAvatar}
          user={user}
        />
      )}
    </>
  );
};

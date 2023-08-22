import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from 'components/RegistrForm/RegistrForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ChangeAvatar } from 'components/ChangeAvatar/ChangeAvatar';
import { LoadFileForm } from 'components/LoadFileForm/LoadFileForm';
import { useGetCountDocumentQuery, useLogoutMutation } from 'utils/RTK-Query';
import {
  selectAvatar,
  selectNameUser,
  selectToken,
} from 'redux/users/selectors';
import { deleteToken } from 'redux/users/reducer';
import { Notify } from 'notiflix';
import logo from '../../img/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const Header = ({countDocument}) => {
  const dispatch = useDispatch();
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenChangeAvatar, setIsOpenChangeAvatar] = useState(false);
  const [isOpenLoadFile, setIsOpenLoadFile] = useState(false);
  const { token } = useSelector(selectToken);
  const avatarURL = useSelector(selectAvatar);
  const nameUser = useSelector(selectNameUser);
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();
  const {data: getAllNumberDocument} = useGetCountDocumentQuery();

  useEffect(()=>{
    countDocument(getAllNumberDocument)
  },[getAllNumberDocument, countDocument])

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
        Notify.success('До зустрічі!', {
          position: 'center-top',
          distance: '10px',
        });
        navigate("/", { replace: true });
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
          {token && <Typography variant="h6">Hi and welcome, {nameUser}!</Typography>}
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
              <Typography variant='h6' mr={1} >додати до архіву</Typography>
              <FileDownloadIcon/>
            </Button>
          )}

          <Box>
            {token ? (
              <IconButton color="inherit" onClick={handleClickLogout}>
                <LogoutIcon/>
              </IconButton>
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
          getAllNumberDocument={getAllNumberDocument}
        />
      )}
    </>
  );
};

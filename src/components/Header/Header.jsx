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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';
import { LoadSearchForm } from 'components/LoadSearchForm/LoadSearchForm';

export const Header = ({ countDocument }) => {
  const dispatch = useDispatch();
  const [isOpenChangeAvatar, setIsOpenChangeAvatar] = useState(false);
  const [isOpenLoadFile, setIsOpenLoadFile] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const { token } = useSelector(selectToken);
  const avatarURL = useSelector(selectAvatar);
  const nameUser = useSelector(selectNameUser);
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();
  const { data: getAllNumberDocument } = useGetCountDocumentQuery();

  useEffect(() => {
    countDocument(getAllNumberDocument);
  }, [getAllNumberDocument, countDocument]);

  const handleClose = () => {
    setIsOpenChangeAvatar(false);
    setIsOpenLoadFile(false);
    setIsOpenSearch(false)
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
        navigate('/frontend-backend', { replace: true });
      }
    } catch (error) {}
  };

  const handleClickLoadFile = () => {
    setIsOpenLoadFile(true);
  };

  const handleClickSearch = () => {
    setIsOpenSearch(true)
  }

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
          {token && (
            <Typography variant="h6">Hi and welcome, {nameUser}!</Typography>
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
          <Box sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {token && (
            <IconButton
              color="inherit"
              aria-label="add file"
              onClick={handleClickLoadFile}             
            >
              <CloudUploadIcon fontSize="large" />
            </IconButton>
          )}
          {token && (
            <IconButton
              color="inherit"
              aria-label="add file"
              onClick={handleClickSearch}
              sx={{marginLeft: 2}}
            >
              <SearchIcon fontSize="large" />
            </IconButton>
          )}
          </Box>
          {token && (
            <IconButton color="inherit" onClick={handleClickLogout} sx={{marginLeft: "auto"}}>
              <LogoutIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

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

      {isOpenSearch && (
                <LoadSearchForm
                handleClose={handleClose}
                isOpen={isOpenSearch}
                getAllNumberDocument={getAllNumberDocument}
              />
      )}
    </>
  );
};

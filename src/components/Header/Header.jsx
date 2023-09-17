import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ChangeAvatar } from 'components/ChangeAvatar/ChangeAvatar';
import { useLogoutMutation } from 'utils/RTK-Query';
import {
  selectAvatar,
  selectNameUser,
  selectToken,
} from 'redux/users/selectors';
import { deleteToken } from 'redux/users/reducer';
import logo from '../../img/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { LoadSearchForm } from 'components/LoadSearchForm/LoadSearchForm';
import { FileUploadForm } from 'components/FileUploadForm/FileUploadForm';
import { LoadFileCSV } from 'components/LoadFileCSV/LoadFileCSV';
import { Analytics } from 'components/Analytics/Analytics';

export const Header = ({
  getDocumentAfterLoadCSV,
  searchDocument,
  changeMaxPageAfterFilter,
}) => {
  const dispatch = useDispatch();
  const [isOpenChangeAvatar, setIsOpenChangeAvatar] = useState(false);
  const [isOpenLoadFile, setIsOpenLoadFile] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenLoadCSV, setIsOpenLoadCSV] = useState(false);
  const [isOpenAnalytics, setIsOpenAnalytics] = useState(false);
  const { token } = useSelector(selectToken);
  const avatarURL = useSelector(selectAvatar);
  const nameUser = useSelector(selectNameUser);
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  const handleClose = () => {
    setIsOpenChangeAvatar(false);
    setIsOpenLoadFile(false);
    setIsOpenSearch(false);
    setIsOpenLoadCSV(false);
    setIsOpenAnalytics(false);
  };

  const handleClickLogout = async () => {
    try {
      const response = await logout();
      if (!response.data) {
        dispatch(deleteToken());
        navigate('/', { replace: true });
      }
    } catch (error) {}
  };

  const handleClickSearch = () => {
    setIsOpenSearch(true);
  };

  const handleClickChangeAvatar = () => {
    setIsOpenChangeAvatar(true);
  };

  // const handleClickLoadFile = () => {
  //   setIsOpenLoadFile(true);
  // };

  const handleClickLoadCSV = () => {
    setIsOpenLoadCSV(true);
  };

  const handleClickReload = () => {
    window.location.reload();
  };

  const handleClickAnalytics = () => {
    setIsOpenAnalytics(true);
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
            {/* {token && (
              <IconButton
                color="inherit"
                aria-label="add file"
                onClick={handleClickLoadFileOld}
              >
                <CloudUploadIcon fontSize="large" />
              </IconButton>
            )} */}

            {/* {token && (
              <IconButton
                color="inherit"
                aria-label="vchasno"
                onClick={handleClickLoadFile}
                sx={{ marginLeft: 2 }}
              >
                <CloudUploadIcon fontSize="large" />
              </IconButton>
            )} */}
            {token && (
              <IconButton
                color="inherit"
                aria-label=".csv"
                onClick={handleClickLoadCSV}
                sx={{ marginLeft: 2 }}
              >
                <SaveAltIcon fontSize="large" />
              </IconButton>
            )}
            {token && (
              <IconButton
                color="inherit"
                aria-label="add file"
                onClick={handleClickSearch}
                sx={{ marginLeft: 2 }}
              >
                <FilterAltIcon fontSize="large" />
              </IconButton>
            )}
            {token && (
              <IconButton
                color="inherit"
                aria-label="reload"
                onClick={handleClickReload}
                sx={{ marginLeft: 2 }}
              >
                <FilterAltOffIcon fontSize="large" />
              </IconButton>
            )}
            {token && (
              <IconButton
                color="inherit"
                aria-label="reload"
                onClick={handleClickAnalytics}
                sx={{ marginLeft: 2 }}
              >
                <AnalyticsIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
          {token && (
            <IconButton
              color="inherit"
              onClick={handleClickLogout}
              sx={{ marginLeft: 'auto' }}
            >
              <LogoutIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {isOpenChangeAvatar && (
        <ChangeAvatar handleClose={handleClose} isOpen={isOpenChangeAvatar} />
      )}

      {isOpenSearch && (
        <LoadSearchForm
          handleClose={handleClose}
          isOpen={isOpenSearch}
          searchDocument={searchDocument}
          changeMaxPageAfterFilter={changeMaxPageAfterFilter}
        />
      )}

      {isOpenLoadFile && (
        <FileUploadForm handleClose={handleClose} isOpen={isOpenLoadFile} />
      )}
      {isOpenLoadCSV && (
        <LoadFileCSV
          handleClose={handleClose}
          isOpen={isOpenLoadCSV}
          getDocumentAfterLoadCSV={getDocumentAfterLoadCSV}
        />
      )}
      {isOpenAnalytics && (
        <Analytics handleClose={handleClose} isOpen={isOpenAnalytics} />
      )}
    </>
  );
};

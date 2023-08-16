import { Box } from '@mui/material';
import { useState } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const App = () => {
  const [isOpenContacts, setIsOpenContacts] = useState(false);
  const [allContacts, setAllContacts] = useState(null)

  const handleOpenContacts = () => {
    setIsOpenContacts(true)
  };

  const getContacts = (contacts) => {
    setAllContacts(contacts)
  };

  return (
    <Box >
      <Header handleOpenContacts={handleOpenContacts} getContacts={getContacts}/>
      <Main isOpenContacts={isOpenContacts} allContacts={allContacts}/>
    </Box>
  );
};

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { useState } from 'react';

export const Archive = () => {
  const [countDocumentDB, setCountDocumentDB] = useState();

  const countDocument = count => {
    setCountDocumentDB(count);
  };

  return (
    <>
      <Header countDocument={countDocument} />
      <Main countDocumentDB={countDocumentDB} />
      <Footer />
    </>
  );
};

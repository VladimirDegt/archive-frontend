import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { TableAllDocument } from 'components/TableAllDocument/TableAllDocument';

const Archive = () => {
  const [countDocumentDB, setCountDocumentDB] = useState();
  const [searchDocumentDB, setSearchDocumentDB] = useState();

  const countDocument = count => {
    setCountDocumentDB(count);
  };
  const searchDocument = search => {
    setSearchDocumentDB(search);
  };

  return (
    <>
      <Header countDocument={countDocument} searchDocument={searchDocument} />
      {/* <Main
        countDocumentDB={countDocumentDB}
        searchDocumentDB={searchDocumentDB}
      /> */}
      <TableAllDocument         
        countDocumentDB={countDocumentDB}
        searchDocumentDB={searchDocumentDB}
        />
      <Footer />
    </>
  );
};

export default Archive;

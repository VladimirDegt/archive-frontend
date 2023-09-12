import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
// import { Main } from 'components/Main/Main';
import { TableAllDocument } from 'components/TableAllDocument/TableAllDocument';
import { PaginationPage } from 'components/Pagination/Pagination';

const Archive = () => {
  const [pageContent, setPageContent] = useState([]);
  const [searchDocumentDB, setSearchDocumentDB] = useState();

  const searchDocument = search => {
    setSearchDocumentDB(search);
  };
  const getDocumentCurrentPage = documents => {
    setPageContent(documents);
  };

  return (
    <>
      <Header
      //  countDocument={countDocument} 
       searchDocument={searchDocument} />
      {/* <Main
        countDocumentDB={countDocumentDB}
        searchDocumentDB={searchDocumentDB}
      /> */}
      <TableAllDocument
        pageContent={pageContent}
        searchDocumentDB={searchDocumentDB}
        />
        <PaginationPage getDocumentCurrentPage={getDocumentCurrentPage}/>
      <Footer />
    </>
  );
};

export default Archive;

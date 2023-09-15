import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
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
  const getDocumentAfterLoadCSV = documents => {
    setPageContent(documents)
  }

  return (
    <>
      <Header
      getDocumentAfterLoadCSV={getDocumentAfterLoadCSV}
       searchDocument={searchDocument} />
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

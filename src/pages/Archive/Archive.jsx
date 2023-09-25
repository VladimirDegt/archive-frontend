import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { TableAllDocument } from 'components/TableAllDocument/TableAllDocument';
import { PaginationPage } from 'components/Pagination/Pagination';

const Archive = () => {
  const [pageContent, setPageContent] = useState([]);
  const [searchDocumentDB, setSearchDocumentDB] = useState();
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [closeFilter, setCloseFilter] = useState(false)

  const searchDocument = search => {
    setSearchDocumentDB(search);
  };
  const getDocumentCurrentPage = documents => {
    setPageContent(documents);
  };
  const getDocumentAfterLoadCSV = documents => {
    setPageContent(documents)
  }
  const changeMaxPageAfterFilter = () => {
    setIsFilterOn(true)
  }

  const reloadTable = (bool) => {
    setCloseFilter(bool)
  }

  return (
    <>
      <Header
      getDocumentAfterLoadCSV={getDocumentAfterLoadCSV}
       searchDocument={searchDocument}
       changeMaxPageAfterFilter={changeMaxPageAfterFilter}
       reloadTable={reloadTable}
        />
      <TableAllDocument
        pageContent={pageContent}
        searchDocumentDB={searchDocumentDB}
        closeFilter={closeFilter}
        reloadTable={reloadTable}
        />
        <PaginationPage getDocumentCurrentPage={getDocumentCurrentPage} isFilterOn={isFilterOn}/>
      <Footer />
    </>
  );
};

export default Archive;

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { SkeletonLoading } from 'components/Skeletons/SkeletonLoading';
import { Suspense, useState } from 'react';

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
      <Suspense fallback={<SkeletonLoading>Loading...</SkeletonLoading>}>
      <Main
        countDocumentDB={countDocumentDB}
        searchDocumentDB={searchDocumentDB}
      />
      </Suspense>
      <Footer />
    </>
  );
};

export default Archive;
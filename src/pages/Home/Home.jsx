import { Box, Button, Paper } from '@mui/material';
import { Footer } from 'components/Footer/Footer';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegistrForm/RegistrForm';
import { useState } from 'react';
import backgroundImage from '../../img/backgroundimage-full.jpg';
import { StyledContainer, StyledTypography } from './Home.styled';

const Home = () => {
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  // const handleOpenRegistration = () => {
  //   setIsOpenRegister(true);
  // };

  const handleOpenLogin = () => {
    setIsOpenLogin(true);
  };

  const handleClose = () => {
    setIsOpenRegister(false);
    setIsOpenLogin(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <main>
        <section>
          <Paper
            square={false}
            sx={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: `calc(100vh - 78px)`,
            }}
          >
            <StyledContainer
              maxWidth="md"
              sx={{ marginLeft: 10, paddingTop: 15 }}
            >
              <StyledTypography
                variant="h4"
                align="left"
                gutterBottom
                sx={{ color: '#FAFAFA', marginBottom: 5 }}
              >
                <q>
                  Архіви – це пам'ять нашого суспільства. Вони зберігають докази
                  минулого, надають свідоцтва про наші здобутки та навчають нас
                  наслідувати помилки. Архіви є спільним скарбом, який
                  зберігається для нас та передається майбутнім поколінням.
                </q>{' '}
                - Джеймс Гленн, архівіст
              </StyledTypography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ minWidth: 200, minHeight: 40 }}
                  onClick={handleOpenLogin}
                >
                  вхід
                </Button>
                {/* <Button
                  variant="contained"
                  color="secondary"
                  sx={{ minWidth: 200, minHeight: 40 }}
                  onClick={handleOpenRegistration}
                >
                  реєстрація
                </Button> */}
              </Box>
            </StyledContainer>
          </Paper>
          {isOpenRegister && (
            <RegisterForm handleClose={handleClose} isOpen={isOpenRegister} />
          )}
          {isOpenLogin && (
            <LoginForm handleClose={handleClose} isOpen={isOpenLogin} />
          )}
        </section>
      </main>
      <Footer />
    </Box>
  );
};

export default Home;
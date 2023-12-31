import logo from '../../img/logo.png';
import { StyledTypography } from './Footer.styled';
const { Box } = require('@mui/material');

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: 'rgb(48, 56, 70)',
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 1,
          paddingRight: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
        <StyledTypography
          paragraph
          align="center"
          color="#FAFAFA"
          sx={{ marginBottom: 0 }}
        >
          Copyright © 2023 КП "МІЦ". Created by Volodymyr Dehtiarev
        </StyledTypography>
      </Box>
    </footer>
  );
};

import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

export const StyledContainer = styled(Container)`
  @media (max-width: 767px) {
    margin-left: 16px;
    padding-top: 16px;
  }
`;

export const StyledTypography = styled(Typography)`
@media (max-width: 767px) {
  font-size: 20px;
}
`;
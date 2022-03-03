import { styled } from "@mui/material";
import { theme } from "../../../assets/theme";

export const Styles = styled('section')({
  width: '100%',
  height: '76vh',
  marginTop: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
});

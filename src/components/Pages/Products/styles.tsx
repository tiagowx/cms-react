import { styled } from "@mui/system";
import { theme } from "../../../assets/theme";

export const Styles = styled('section')({
  width: '100%',
  height: '86vh',
  marginTop: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.light,
});
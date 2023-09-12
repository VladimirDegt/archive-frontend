import {
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const CopyURLFile = ({ handleClose, isOpen, viewURLFile }) => {
  const handleCloseForm = () => {
    handleClose();
  };

  const handleSaveURL = () => {
    navigator.clipboard.writeText(viewURLFile);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="copyURL">
      <DialogContent id="registration" sx={{ textAlign: 'center' }}>
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{fontSize: 12}} align="left">{viewURLFile}</Typography>
        <IconButton onClick={handleSaveURL}>
          <ContentCopyIcon />
        </IconButton>
        </Container>
        <Button onClick={handleCloseForm}>Cancel</Button>
      </DialogContent>
    </Dialog>
  );
};

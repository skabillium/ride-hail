import * as React from 'react';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RatingModal = ({ rideId, active }) => {
  const [open, setOpen] = React.useState(false);
  const [stars, setStars] = React.useState(2.5);

  const handleOpen = () => {
    if (active) setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    const user = JSON.parse(localStorage.getItem('user'));
    await axios.post('/ratings', {
      user: user._id,
      ride: rideId,
      stars,
    });

    handleClose();
    window.location.reload();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Rate ride
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Rate this ride
            </Typography>
            <Rating
              name="half-rating"
              defaultValue={stars}
              precision={0.5}
              onChange={(e, newValue) => setStars(newValue)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default RatingModal;

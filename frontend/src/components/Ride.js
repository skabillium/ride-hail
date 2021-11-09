import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const Ride = ({ ride, handleRate }) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={ride.vehicle}
          subheader={new Date(ride.createdAt).toLocaleDateString()}
        />
        <CardContent>
          <Button
            onClick={() => handleRate(ride)}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ride;

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import RatingModal from './RatingModal';

const Ride = ({ ride, survey }) => {
  const activeModal = survey === null;
  return (
    <div>
      <Card>
        <CardHeader
          title={ride.vehicle}
          subheader={new Date(ride.createdAt).toLocaleDateString()}
        />
        <CardContent>
          <RatingModal active={activeModal} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Ride;

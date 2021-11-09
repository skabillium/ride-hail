import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Survey = () => {
  const { rideId } = useParams();
  const survey = JSON.parse(localStorage.getItem('survey'));

  return (
    <div>
      {survey.questions.map((q) => (
        <p>{q.text}</p>
      ))}
    </div>
  );
};

export default Survey;

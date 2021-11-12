import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import AppBar from '../components/AppBar';
import SingleChoice from '../components/questions/SingleChoice';
import MultipleChoice from '../components/questions/MultipleChoice';
import FreeText from '../components/questions/FreeText';
import axios from 'axios';

const Survey = () => {
  const { rideId } = useParams();
  const survey = JSON.parse(localStorage.getItem('survey'));
  const user = JSON.parse(localStorage.getItem('user'));

  const [submissions, setSubmissions] = useState([]);

  const navigate = useNavigate();

  const handleSubmission = (question, answer) => {
    setSubmissions([
      ...submissions.filter((sub) => sub.question !== question),
      { question, answer },
    ]);
  };

  const handleSubmit = async () => {
    const data = {
      ride: rideId,
      survey: survey._id,
      user: user._id,
      submissions,
    };

    try {
      const response = await axios.post('/responses', data);

      // Redirect to dashboard if no error
      if (response.status === 201) navigate(`/dashboard/${user._id}`);
      else window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  // Display each question according to it's type
  return (
    <div>
      <AppBar />
      <FormControl component="fieldset">
        {survey.questions.map((question) => {
          switch (question.type) {
            case 'SingleChoice':
              return (
                <Card variant="outlined" style={{ marginTop: '15%' }}>
                  <CardHeader title={question.text} />
                  <CardContent>
                    <SingleChoice
                      text={question.text}
                      options={question.options}
                      handleSubmission={handleSubmission}
                    />
                  </CardContent>
                </Card>
              );
            case 'MultipleChoice':
              return (
                <Card variant="outlined" style={{ marginTop: '15%' }}>
                  <CardHeader title={question.text} />
                  <CardContent>
                    <MultipleChoice
                      text={question.text}
                      options={question.options}
                      handleSubmission={handleSubmission}
                    />
                  </CardContent>
                </Card>
              );
            case 'FreeText':
              return (
                <Card variant="outlined" style={{ marginTop: '15%' }}>
                  <CardHeader title={question.text} />
                  <CardContent>
                    <FreeText
                      text={question.text}
                      handleSubmission={handleSubmission}
                    />
                  </CardContent>
                </Card>
              );
            default:
              return;
          }
        })}
        <Button
          fullWidth
          style={{ marginTop: '15%', marginBottom: '15%' }}
          onClick={handleSubmit}
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit survey
        </Button>
      </FormControl>
    </div>
  );
};

export default Survey;

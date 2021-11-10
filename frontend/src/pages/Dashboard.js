import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import axios from 'axios';

import Ride from '../components/Ride';
import AppBar from '../components/AppBar';

const Dashboard = () => {
  // Get User id from url
  const { userId } = useParams();

  // Set state params
  const [survey, setSurvey] = useState(null);
  const [unratedRides, setUnratedRides] = useState([]);

  // Get rides not rated by user and survey if available
  const getUnratedRides = async () => {
    const { data } = await axios.get(`/rides/unrated/${userId}`);
    return data;
  };
  const getCurrentSurvey = async () => {
    const { data } = await axios.get(`/surveys/current/${userId}`);
    return data;
  };

  useEffect(() => {
    const getAllData = async () => {
      const unratedRides = await getUnratedRides();
      const currentSurvey = await getCurrentSurvey();

      if (unratedRides) setUnratedRides(unratedRides);
      if (currentSurvey) {
        setSurvey(currentSurvey);
        localStorage.setItem('survey', JSON.stringify(currentSurvey));
      }
    };

    getAllData();
  }, []);

  return (
    <div>
      <AppBar />
      <Container style={{ marginTop: '5%' }}>
        <Typography variant="h3">Dashboard</Typography>
        <Typography>
          {unratedRides.length !== 0
            ? `You have ${unratedRides.length} unrated rides`
            : 'You have rated all your previous rides'}
        </Typography>

        <Grid container spacing={3}>
          {unratedRides.map((ride, i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <Ride ride={ride} survey={survey} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;

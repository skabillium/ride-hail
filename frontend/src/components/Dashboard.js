import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import axios from 'axios';

import Ride from './Ride';
import TransitionsModal from './TransitionModal';

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

      if (currentSurvey) setSurvey(currentSurvey);
      if (unratedRides) setUnratedRides(unratedRides);
    };

    getAllData();
  }, []);

  const handleRate = (ride) => {
    survey ? console.log('SURVEY') : console.log('RATING');
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <p>Hello {userId}</p>
      <p>Unrated rides {unratedRides.length}</p>

      <Grid container spacing={3}>
        {unratedRides.map((ride, i) => (
          <Grid item key={i} xs={12} md={6} lg={4}>
            <Ride ride={ride} handleRate={handleRate} />
          </Grid>
        ))}
      </Grid>
      <TransitionsModal />
    </Container>
  );
};

export default Dashboard;

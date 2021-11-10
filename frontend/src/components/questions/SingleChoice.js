import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const SingleChoice = ({ text, options, handleSubmission }) => {
  return (
    <div style={{ marginTop: '15%' }}>
      <Typography>{text}</Typography>
      <RadioGroup name="radio-buttons-group">
        {options.map((option, i) => (
          <FormControlLabel
            key={i}
            value={option}
            control={<Radio />}
            label={option}
            onClick={(e) => handleSubmission(text, e.target.value)}
          />
        ))}
      </RadioGroup>
      <TextField
        margin="normal"
        fullWidth
        id="other"
        label="Other"
        name="other"
        autoFocus
        onChange={(e) => handleSubmission(text, e.target.value)}
      />
    </div>
  );
};

export default SingleChoice;

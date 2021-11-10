import { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const MultipleChoice = ({ text, options, handleSubmission }) => {
  const [otherAnswer, setOtherAnswer] = useState('');
  const [checkboxAnswers, setCheckboxAnswers] = useState([]);

  // Currently buggy, probably something to do with checkbox in material ui
  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckboxAnswers([...checkboxAnswers, e.target.value]);
    } else {
      setCheckboxAnswers([
        ...checkboxAnswers.filter((answer) => answer !== e.target.value),
      ]);
    }

    if (otherAnswer) setCheckboxAnswers([...checkboxAnswers, otherAnswer]);
    handleSubmission(text, checkboxAnswers);
  };

  // Display multiple choice question as checkbox
  return (
    <FormGroup style={{ marginTop: '15%' }}>
      <Typography>{text}</Typography>

      {options.map((option, i) => (
        <FormControlLabel
          key={i}
          label={option}
          control={<Checkbox onChange={handleChange} value={option} name={i} />}
        />
      ))}

      <TextField
        margin="normal"
        id="other"
        label="Other"
        name="other"
        autoFocus
        onChange={(e) => setOtherAnswer(e.target.value)}
      />
    </FormGroup>
  );
};

export default MultipleChoice;

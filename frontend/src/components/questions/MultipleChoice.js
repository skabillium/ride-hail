import { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const MultipleChoice = ({ text, options, handleSubmission }) => {
  const [otherAnswer, setOtherAnswer] = useState('');
  const [checkboxAnswers, setCheckboxAnswers] = useState(
    options.slice().fill(false),
  );

  const handleCheckbox = (target, index) => {
    // Updated answers array
    const updatedAnwers = checkboxAnswers;
    updatedAnwers[index] = target.checked;
    setCheckboxAnswers(updatedAnwers);

    const submissions = options.filter(
      (option, index) => checkboxAnswers[index],
    );
    if (otherAnswer) submissions.push(otherAnswer);

    handleAnswers(submissions, otherAnswer);
  };

  const handleText = (value) => {
    setOtherAnswer(value);
    handleAnswers(
      options.filter((option, index) => checkboxAnswers[index]),
      value,
    );
  };

  const handleAnswers = (checkboxes, other) => {
    const answers = checkboxes;
    if (other) answers.push(other);

    handleSubmission(text, answers);
  };

  // Display multiple choice question as checkbox
  return (
    <FormGroup>
      {options.map((option, i) => (
        <FormControlLabel
          key={i}
          label={option}
          control={
            <Checkbox
              onClick={(e) => handleCheckbox(e.target, i)}
              value={option}
              name={i}
            />
          }
        />
      ))}

      <TextField
        margin="normal"
        id="other"
        label="Other"
        name="other"
        autoFocus
        onChange={(e) => handleText(e.target.value)}
      />
    </FormGroup>
  );
};

export default MultipleChoice;

import TextField from '@material-ui/core/TextField';

const FreeText = ({ text, handleSubmission }) => {
  // Display free text question as a text field
  return (
    <TextField
      fullWidth
      id="other"
      label="Answer"
      name="other"
      autoFocus
      onChange={(e) => handleSubmission(text, e.target.value)}
    />
  );
};

export default FreeText;

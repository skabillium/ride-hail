import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const FreeText = ({ text, handleSubmission }) => {
  // Display free text question as a text field
  return (
    <div style={{ marginTop: '15%' }}>
      <Typography>{text}</Typography>

      <TextField
        margin="normal"
        id="other"
        label="Answer"
        name="other"
        autoFocus
        onChange={(e) => handleSubmission(text, e.target.value)}
      />
    </div>
  );
};

export default FreeText;

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const FreeText = ({ text, handleSubmission }) => {
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

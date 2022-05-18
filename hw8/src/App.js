import logo from './logo.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="filled-basic" label="Password" variant="filled" />
    </Box>
    <Button variant="contained">Login</Button>
    <Button variant="contained">
        Register
      </Button>
    </div>
  );
}

export default App;

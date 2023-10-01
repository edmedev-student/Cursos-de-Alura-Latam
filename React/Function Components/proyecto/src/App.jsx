import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormSignUp from './components/FormSignUp';

function App () {
  const handleSubmit = (values) => {
    console.log('APPJS: ', values);
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;

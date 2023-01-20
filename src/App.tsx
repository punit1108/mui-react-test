import { CssVarsProvider } from '@mui/joy/styles';
import { ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/navbar/Navbar';
import PageContent from './components/page-content/PageContent';
import Token from './components/token/Token';

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
        <ThemeProvider theme={'dark'}>
          <Navbar />
          <Token/>  
          <PageContent></PageContent>
        </ThemeProvider>
      </CssVarsProvider>
    </div>
  );
}

export default App;

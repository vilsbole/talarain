import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { Home } from './screens';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

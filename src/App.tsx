import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { Home, Layout } from './screens';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

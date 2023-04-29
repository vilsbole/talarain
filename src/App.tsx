import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { Home, Layout } from './screens';

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

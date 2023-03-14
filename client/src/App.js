import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {themeSettings} from 'theme';
import Dashboard from 'pages/Dashboard';
import Layout from 'pages/Layout';

function App() {
  const themeMode = useSelector((state) => state.global.themeMode);
  const theme = useMemo(
      () => createTheme(themeSettings(themeMode)),
      [themeMode],
  );
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

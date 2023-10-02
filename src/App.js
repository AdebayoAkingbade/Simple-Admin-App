import Topbar from './pages/units/topbar';
import { ThemeModeContext, useMode } from './theme_mode'
import { ThemeProvider, CssBaseline } from '@mui/material';


function App() {
  const [theme, themeMode ] = useMode();

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider value={theme}>
        <CssBaseline />
      <div className="app" >
        <main className="content">
          <Topbar />
        </main>
    </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
   
  );
}

export default App;

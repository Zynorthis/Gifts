import { MantineProvider } from '@mantine/core';
import './App.css';
import { LandingPage } from './LandingPage';

export const App = () => {
  return (
    <MantineProvider withGlobalClasses>
      <div className="App">
        <header className="App-header">
          <LandingPage />
        </header>
      </div>
    </MantineProvider>
  );
}

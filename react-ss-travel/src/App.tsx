import './App.css';
import { TopSection } from './containers/TopSection';
import tw from 'twin.macro'

const AppContainer=tw.div`
  flex
  w-full
  h-full
  overflow-hidden`

function App() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  );
};

export default App;

import './App.css';
import { TopSection } from './containers/TopSection';
import tw from 'twin.macro'
import { ExploreSection } from './containers/ExploreSection';
import { Footer } from './containers/footer';

const AppContainer=tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden`

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
      <Footer/>
    </AppContainer>
  );
};

export default App;

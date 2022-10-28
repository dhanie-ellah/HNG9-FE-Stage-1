import './App.css';
import Footer from './components/footer'
import Header from './components/header'
import Body from './components/body'
import Socials from './components/socials'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Socials/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;

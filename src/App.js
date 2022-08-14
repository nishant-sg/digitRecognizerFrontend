import './App.css';
import Header from './components/header';
import Main from './components/main'
import Tutorial from './components/tutorial';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <div className="sep"/>
      <Tutorial/>
      <div className="sep"/>
      <Footer/>
    </div>
  );
}

export default App;

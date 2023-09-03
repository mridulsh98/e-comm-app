import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Content
          height="500px"
          width="90%"
          margin="0 auto"
          offset={2}
          showArrows={false}
      />
      </header>
    </div>
  );
}

export default App;

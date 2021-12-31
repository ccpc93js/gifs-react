import './App.css';
import { Link, Route } from 'wouter'
import Home from './screens/Home';
import SearchResults from './screens/SearchResults';
import Details from './screens/Detail';
import Context from './context/StaticContext'
import { GifsContextProvider } from './context/GIfsContext';


function App() {
  return (
    <Context.Provider value={{
      name: 'ccpc',
      jsCode: true
    }}>

      <div className="App">
        <section className="App-content">
          <Link to="/">
            <div className="Gif-logo">
              <img src="/conversable.gif" alt="Giffy logo" />
            </div>
          </Link>

          <div className="Links">
            <GifsContextProvider>
              <Route
                component={Home}
              />

              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?"
              />
              <Route
                component={Details}
                path="/gif/:id"
              />
              <Route
                component={() => <h1 style={{ textAlign: "center" }}>ERROR 404</h1>}
                path="/404"
              />
            </GifsContextProvider>
          </div>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;

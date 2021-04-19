import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { useReducer } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ThemeContext from './context/theme';
import Reducer from './context/reducer';
import Options from './components/options/options';
import { reducer, initialState } from './reducer';
import Home from './pages/Home/home';
import Learning from './pages/learning/learning';
import NotFound from './pages/404/404';
import ErrorBoundery from './hooks/ErrorBoundary';
import AuthRoute from "./hooks/AuthRoute";
import AddCollection from './pages/addCollection/addCollection';
import LoadingIcon2 from './components/UI/LoadingIcon2';
import Edit from "./pages/edit/edit";
import Footer from "./components/Footer/footer";
import ChangePassword from "./pages/changePassword/changePassword";
import AboutMe from "./pages/aboutMe/aboutMe";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeTheme = () => {
    const button = document.querySelectorAll('.checkButton');
    const buttonCircle = document.querySelectorAll('.checkButton-circle');
    button.forEach(el => {
      el.classList.toggle('activeButton');
    });
    buttonCircle.forEach(el => {
      el.classList.toggle('activeButton-circle');
    });
    document.querySelector('html').classList.toggle('dark-theme');
  }

  const header = (
    <Switch>

      <Route path="/o_mnie" />
      <Route path="/" component={Header} />

    </Switch >

  )
  const menu = (
    <Route exact path="/">
      <Menu />
    </Route>
  );
  const options = (
    <Route exact path="/">
      <Options />
    </Route>
  );
  const content = (
    <ErrorBoundery>
      {state.loading2 ? <LoadingIcon2 /> : null}

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/kolekcja/nauka/:id" component={Learning} />
        <AuthRoute path="/kolekcja/edycja/:id" component={Edit} />
        <AuthRoute path="/kolekcja/dodaj" component={AddCollection} />
        <Route path="/o_mnie" component={AboutMe} />
        <AuthRoute path="/konto/zmien_haslo" component={ChangePassword} />
        <Route component={NotFound} />

      </Switch >

    </ErrorBoundery >
  );

  return (
    <>
      <Router>
        <ThemeContext.Provider value={{
          color: state.theme,
          onChange: changeTheme
        }}>
          <Reducer.Provider value={{
            state: state,
            dispatch: dispatch
          }}>
            <Layout
              header={header}
              menu={menu}
              options={options}
              content={content}
            />
          </Reducer.Provider>
        </ThemeContext.Provider>
      </Router>
      <Footer />
    </>
  );
}
export default App;
import { Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './Normalize.css'
import './App.css'

import Header from './components/Header/Header';
import Home from './components/HomeView/Home';
import CoursesView from './components/CoursesView/CoursesView';
import Login from './components/LoginView/Login';
import Footer from './components/Footer/Footer'
import CourseForm from './components/CourseForm/CourseForm'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/cursos' component={CoursesView} />
        <Route exact path='/cursos/crear' component={CourseForm} />
        <Route>
          <NotFound/>
        </Route>
      </Switch>
      <Footer />
      {/* <img src={logo} />
      <Link to="/">Home</Link><br />
      <Link to="/products">Products</Link><br />
      <Link to="/contact">Contact</Link><br />
      <Link to="/abaut">Abaut</Link><br />
      <Link to="/rick">Rick and Morty</Link><br />
      <Link to="/abautasda">Error</Link><br />
      <hr />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/abaut'>
          <Abaut />
        </Route>
        <Route path='/products/:id' component={Products}/>
        <Route path='/frutas' component={FrutasFuncion}/>
        <Route path='/rick' component={RickMortyFn}/>
        <Route>
          <NotFound/>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;

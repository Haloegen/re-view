import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import  './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProductCreateForm from './pages/products/ProductCreateForm';
import ProductPage from './pages/products/ProductPage';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path='/signup' render={() => <SignUpForm />} />
          <Route exact path='/signin' render={() => <SignInForm />} />
          <Route exact path='/products/create' render={() => <ProductCreateForm />}/>
          <Route exact path='/products/:id' render={() => <ProductPage/>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
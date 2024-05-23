import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import  './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProductCreateForm from './pages/products/ProductCreateForm';
import ProductPage from './pages/products/ProductPage';
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProductsPage from './pages/products/ ProductsPage';
import ProductEditForm from './pages/products/ProductEditForm';
import ProfilePage from "./pages/profiles/ProfilePage";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";


  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <ProductsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <ProductsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <ProductsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path='/signup' render={() => <SignUpForm />} />
          <Route exact path='/signin' render={() => <SignInForm />} />
          <Route exact path='/products/create' render={() => <ProductCreateForm />}/>
          <Route exact path='/products/:id' render={() => <ProductPage/>} />
          <Route exact path="/products/:id/edit" render={() => <ProductEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
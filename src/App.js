import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import AuthorsWhiew from './vievs/AuthorsWhiew';
import BooksView from './vievs/BooksView';
// import HomeView from './vievs/HomeView';
import NotFoundView from './vievs/NotFoundView';
import BookDetailsView from './vievs/BookDetailsView';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import TableView from './vievs/TableView';

const HomeView = lazy(() =>
  import('./vievs/HomeView' /*webpackChunkName: "home-view"*/),
);
const AuthorsWhiew = lazy(() =>
  import('./vievs/AuthorsWhiew' /*webpackChunkName: "authors-view"*/),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/authors">
            <AuthorsWhiew />
          </Route>

          <Route path="/books" exact>
            <BooksView />
          </Route>

          <Route path="/books/:slug">
            <BookDetailsView />
          </Route>

          <Route path="/table">
            <TableView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

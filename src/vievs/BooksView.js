import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import PageHeading from '../components/PageHeading/PageHeading';
import { useSelector, useDispatch } from 'react-redux';
import { booksOperations, booksSelectors } from '../redux/books';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => dispatch(booksOperations.fetchBooks()), [dispatch]);
  // import * as bookShelfAPI from '../services/bookshelf-api';
  // const [books, setBooks] = useState(null);
  // useEffect(() => {
  //   bookShelfAPI.fetchBooks().then(setBooks);
  // }, []);
  return (
    <>
      <PageHeading text="Книги" />

      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
                  state: {
                    from: {
                      location,
                      label: 'Назад к всем книгами',
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

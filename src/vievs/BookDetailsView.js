import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const bookId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/books');
  };

  return (
    <>
      <PageHeading text={`Книга ${bookId}`} />

      {book && (
        <>
          <button type="button" onClick={onGoBack}>
            {location?.state?.from?.label ?? 'Назад'}
          </button>

          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}

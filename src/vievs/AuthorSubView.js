import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

export default function AuthorSubView({ authors }) {
  const location = useLocation();
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));

  const makeSlug = string => slugify(string, { lower: true });

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {author.books.map(book => (
          <li key={book.id}>
            <Link
              to={{
                pathname: `/books/${makeSlug(`${book.title} ${book.id}`)}`,
                state: {
                  from: {
                    location,
                    label: 'Назад к автору',
                  },
                },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

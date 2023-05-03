import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
      <p className="text-gray-600 text-xl mb-6">
        Esta pagina al parecer no esta funcionando.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}

export default ErrorPage;

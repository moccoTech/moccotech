import Button from './components/Button';

export const metadata = {
  title: 'Mocco Tech - 404 Not Found page',
  description:
    'Sorry, the page you are looking for does not exist. Please visit our Hompege or report a problem',
};

function PageNotFound() {
  return (
    <div className="h-dvh flex items-center justify-center bg-indigo-200">
      <div className="w-4/5 h-4/5 bg-indigo-50 flex flex-col items-center justify-center gap-5 p-4 text-center">
        <h1 className="text-6xl font-semibold text-indigo-500 font-heading">
          404
        </h1>
        <h2 className="text-2xl font-medium uppercase text-gray-700 font-body">
          Oops ! Page not found
        </h2>
        <p className="text-gray-600 text-lg text-center font-body">
          Sorry, the page you are looking for does not exist.
          <br /> Please visit our Hompege or report a problem
        </p>
        <Button to="/" type="bold">
          Return home
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;

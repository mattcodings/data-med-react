import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <div className="grid min-h-[80vh] place-items-center px-8">
        <div>Error</div>
        <Link to="/" className="btn btn-secondary text-accent">
          Go back home
        </Link>
      </div>
    );
  }
  return <div className="grid min-h-[80vh] place-items-center px-8">Error</div>;
};
export default Error;

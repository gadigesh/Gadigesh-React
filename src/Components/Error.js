import { useRouteError } from 'react-router';
const Error = () => {
    const err = useRouteError();
    return (
        <div className="Erropage">
            <h1>Ooops!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.statusText}</h3>
        </div>
    );
};

export default Error;

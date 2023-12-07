import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h1>You entered a wrong URL</h1>
      <h1>Please check it..</h1>
      <h1>{err.status + " : " + err.statusText}</h1>
    </div>
  );
};
export default Error;

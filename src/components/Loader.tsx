import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loaderBox" data-testid="loader">
      <Bars color="#0ead69" height={100} width={110} />
    </div>
  );
}

export default Loader;

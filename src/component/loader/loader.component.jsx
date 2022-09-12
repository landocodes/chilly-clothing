import { MutatingDots } from "react-loader-spinner";
import './loader.styles.css'
const Loader = () => {
  return (
    <div className="loader">
      <MutatingDots
        height="100"
        width="100"
        color="#00FFFF"
        secondaryColor="#000000"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

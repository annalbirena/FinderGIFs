import './loader.scss';
import imgLoader from "../../assets/images/oval.svg"

function Loader() {
  return (
    <div className="loader-container">
      <figure>
        <img className="loader-img" src={imgLoader} alt="" />
      </figure>
    </div>
  );
}

export default Loader;
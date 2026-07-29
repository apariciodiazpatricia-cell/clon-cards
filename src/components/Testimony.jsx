import '../styles/Testimony.css';

const images = import.meta.glob('../assets/img/*.png', {
  eager: true,
  import: 'default'
});

function Testimony(props) {
  return (
    <div className="testimonyContainer">
      <img
        className="testimonyImage"
        src={images[`../assets/img/${props.image}.png`]}
        alt={`Foto de ${props.name}`}
      /> 
      <div className="testimonyTextContainer">
        <p className="testimonyName">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="testimonyRole">
          {props.role} en <strong>{props.company}</strong>
        </p>
        <p className="testimonyText">
          "{props.quote}"
        </p>
      </div>
    </div>
  );
}

export default Testimony;

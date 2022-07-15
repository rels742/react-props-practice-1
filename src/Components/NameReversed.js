import { reverse } from ".././helpers";

function NameReversed(props) {
  const { name } = props;
  return (
    <>
      <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
      <p className="name-reversed">
        Also, {props.name} backwards is {reverse(props.name)}
        more is {props.more}
      </p>
    </>
  );
}

export default NameReversed;

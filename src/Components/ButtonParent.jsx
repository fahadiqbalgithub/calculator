import Buttons from "./Buttons";

function ButtonParent(props) {
  const onDataGetHandler = (data) => {
    props.onDataChanged(data);
  };
  return <Buttons onDataGet={onDataGetHandler} />;
}

export default ButtonParent;

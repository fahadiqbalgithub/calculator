import Display from "./Display";
import ButtonParent from "./ButtonParent";
import { useState } from "react";

function Parent() {
  const [data, setData] = useState("0");

  function onDataChangedHandler(tempData) {
    setData(tempData);
  }

  return (
    <div className="border-black border-2 mx-auto my-64 w-96 h-auto p-1">
      <Display _data={data} />
      <ButtonParent onDataChanged={onDataChangedHandler} />
    </div>
  );
}

export default Parent;

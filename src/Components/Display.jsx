function Display(props) {
  return (
    <div className="border-slate-700 border-2 h-1/4 mb-1">
      <p className="text-right p-1">{props._data}</p>
    </div>
  );
}

export default Display;

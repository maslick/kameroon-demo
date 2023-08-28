import './App.css';
import {useQueryState} from "./useQueryState";
import Decypherer from "./Decypherer";


function Callback({privateKey}) {
  const result = useQueryState("code");
  if (result) return <Decypherer result={result} privateKey={privateKey}/>;
}

export default Callback;

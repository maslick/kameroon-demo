import './App.css';
import {decodeBase64EncryptedMessage, decryptMessage} from "@maslick/kameroon";
import {useEffect, useState} from "react";


function Decypherer({privateKey, result}) {
  const [plaintext, setPlaintext] = useState();

  useEffect(() => {
    if (result)
      decryptMessage(privateKey, decodeBase64EncryptedMessage(decodeURIComponent(result))).then(code => {
        setPlaintext(code);
      });
  }, [result]);

  return (
    <div className="App">
      <header className="App-header">
        <p style={{whiteSpace: "pre-wrap", wordBreak: "break-word", padding: 20}}>{plaintext}</p>
        <a className="App-link" href="/">Back</a>
      </header>
    </div>
  )
}

export default Decypherer;

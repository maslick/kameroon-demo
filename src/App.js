import './App.css';
import {runtimeEnvironment} from "./environment";

function App({publicKey}) {
  const url = `${runtimeEnvironment.cameroonUrl}/?redirect_url=${window.location.href}callback&public_key=${encodeURIComponent(publicKey)}`;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a demo showing QR code scanning functionality using <a className="App-link" href={url}>Kameroon</a>!
        </p>
      </header>
    </div>
  );
}

export default App;

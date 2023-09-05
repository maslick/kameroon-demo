import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Callback from "./Callback";
import {
  createKeys,
  fetchKeysFromLocalStorage,
  saveKeysToLocalStorage,
} from "@maslick/kameroon";


let privateKey = null;
let publicKey = null;

try {
  const keys = await fetchKeysFromLocalStorage();
  privateKey = keys.privateKey;
  publicKey = keys.publicKey;
}
catch (e) {
  console.warn(`keys are not in cache (${e}), creating new...`);
  const keyPair = await createKeys();
  privateKey = keyPair.privateKey;
  publicKey = keyPair.publicKey;
  await saveKeysToLocalStorage({privateKey, publicKey});

  const keys = await fetchKeysFromLocalStorage();
  privateKey = keys.privateKey;
  publicKey = keys.publicKey;
}

const RootEl = () => (
  <Router>
      <Switch>
        <Route path="/callback">
          <Callback privateKey={privateKey}/>
        </Route>
        <Route path="/">
          <App publicKey={publicKey}/>
        </Route>
      </Switch>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(RootEl());

reportWebVitals();

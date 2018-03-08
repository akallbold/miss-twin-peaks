import React from "react";

export default function Header() {
  return (
    <header className="App-header">
      <div>
        <img
          alt="person"
          src="https://d30y9cdsu7xlg0.cloudfront.net/png/1181242-200.png"
          className="App-logo"
        />
      </div>
      <span>
        <img
          alt="person"
          className="small-img"
          src="https://upload.wikimedia.org/wikipedia/commons/d/df/Queen_of_Hearts_%28Elizabeth_of_York%29.png"
        />
        <h1 className="inline"> THE 20TH ANNUAL MISS TWIN PEAKS CONTEST </h1>
        <img
          alt="person"
          className="small-img"
          src="https://upload.wikimedia.org/wikipedia/commons/d/df/Queen_of_Hearts_%28Elizabeth_of_York%29.png"
        />
      </span>
      <h2 className="">Who will be queen?</h2>
    </header>
  );
}

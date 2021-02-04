import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {/* HEADER */}
      <header className="d-flex justify-content-center text-center">
        <h1 className="my-5 text-dark titulo px-4">Control de citas</h1>
      </header>

    </Fragment>
  );
}

export default App;

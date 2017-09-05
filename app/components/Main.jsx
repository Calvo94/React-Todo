import React, { Component } from 'react';

var Main = (props) => {
    return (
      <div>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            <p>Main.jsx.Rendered</p>
          {props.children}
          </div>
        </div>
      </div>
    );
}

module.exports = Main;

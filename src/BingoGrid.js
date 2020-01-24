import React from 'react';

export default function BingoGrid(props) {
  return (
    <>
      {props.bingo ? (
        <div className="bingo bingo-header">
          <div>B</div>
          <div>I</div>
          <div>N</div>
          <div>G</div>
          <div>O</div>
        </div>
      ) : (
        ''
      )}
      <div className="bingo bingo-grid">
        {props.facts.map((fact, index) =>
          index === 12 && props.freeCenter ? (
            <li key="FREE" className="fact free">
              FREE
            </li>
          ) : (
            <li key={index} className="fact">
              {fact}
            </li>
          )
        )}
      </div>
    </>
  );
}

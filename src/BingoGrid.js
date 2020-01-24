import React from 'react';

const selfieString =
  'Be in a full class photo and have someone Slack it to @Juliana';

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
          index === 12 && props.center === 'free' ? (
            <li key="FREE" className="fact free">
              FREE
            </li>
          ) : index === 12 && props.center === 'selfie' ? (
            <li key="selfie" className="fact">
              {selfieString}
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

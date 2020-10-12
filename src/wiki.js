import React, { useEffect, useState } from 'react';

import './wiki.css';

function NotFound(props) {
  return (
    <div className="content">
      <h1>Ups... no hay info</h1>
      <p>
        No hay metadata asociada a <code>{props.node}</code>.
      </p>
      <br />
      <p>
        Si sos contributor y querés agregar la información, tenés que hacerlo en el archivo de configuration <code>metadata.json</code>.
      </p>
    </div>
  );
}

function Data(props) {
  return (
    <div className="content">
      <h1>{props.node.label}</h1>
      <h5>{props.node.wiki.es.type}</h5>
      { props.node.link &&
        <p>
          <a href={`https://${props.node.link}`} target="_blank" rel="noopener noreferrer">{props.node.link}</a>
        </p>
      }
      <p>
        {props.node.wiki.es.info}
      </p>
      <br />
      { props.node.wiki.es.link &&
        <p>
          Ver en <a href={props.node.wiki.es.link} target="_blank" rel="noopener noreferrer">Wikipedia</a>.
        </p>
      }
    </div>
  );
}

export default function Wiki(props) {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('data/metadata.json').then(r => r.json()).then(setData)
  }, []);

  return (
    <div className="wiki">
      {data[props.node]
        ? <Data node={data[props.node]} />
        : <NotFound node={props.node} />
      }
    </div>
  );
}

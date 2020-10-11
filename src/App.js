import React, { useState } from 'react';

import { GridContainer } from 'mini.css-react/dist/GridContainer';
import { GridColumn } from 'mini.css-react/dist/GridColumn';
import { GridRow } from 'mini.css-react/dist/GridRow';

import './app.css';

import Map from './map';
import Wiki from './wiki';

function Welcome() {
  return (
    <div className="welcome">
      <h1><b>TECH</b><span>MAP</span></h1>
      <h2>¡Hola bro!</h2>
      <p>Como siempre decimos, hoy en día hay tantos nombrecitos dando vuelta que es muy fácil confundirse, y para los que recién comienzan o nuestros amigos los recruiters que tienen escuchar miles de estas palabras, puede ser muy complicado y hasta a veces imposible de asimilar todas y cada una de ellas. Es por eso que hicimos esta  herramienta, para que puedas ver todas las tecnologías más utlizadas, cómo se relacionan entre sí y puedas consultarlo cuando gustes. ¿Tenés dudas sobre una en particular? ¿Querés conocer detalles de cada una? hacé click sobre alguna de ellas y vamos aclarando el panaroma.</p>
      <p>¿Querés contribuir? te esperamos en <a href="https://anchor.fm/techbros" target="_blank" rel="noopener noreferrer">Github</a>.</p>
      <br />
      <p>Hecho con <span role="img" aria-label="amor">❤️</span> por los <a href="https://anchor.fm/techbros" target="_blank" rel="noopener noreferrer">TECHBROS</a>.</p>
    </div>
  );
}

export default function App() {

  const [node, setNode] = useState(null);

  return (
    <React.Fragment>
      <GridContainer>
        <GridRow>
          <GridColumn
            className="map-column"
            small={{ width: 12 }}
            large={{ width: 8 }}>
            <Map onClick={setNode} />
          </GridColumn>
          <GridColumn
            className="wiki-column"
            small={{ width: 12 }}
            large={{ width: 4 }}>
            {node
              ? <Wiki node={node} />
              : <Welcome />
            }
          </GridColumn>
        </GridRow>
      </GridContainer>
    </React.Fragment>
  );
}
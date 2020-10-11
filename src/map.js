import React, { useRef, useEffect } from 'react';

import { Network, parseDOTNetwork } from 'vis-network/standalone';

import './app.css';

export default function Map(props) {

  const ref = useRef();

  const { onClick } = props;

  useEffect(() => {

    if (ref.current) {

      var options = {
        nodes: {
          shape: "dot",
        },
        physics: false,
      };

      const onClickHandler = params => {
        if (onClick && params.nodes.length > 0) {
          onClick(params.nodes[0]);
        }
      }

      fetch('data/network.dot')
        .then((n) => n.text())
        .then((n) => parseDOTNetwork(n))
        .then((n) => ({ nodes: n.nodes, edges: n.edges }))
        .then(data => {
          fetch('data/metadata.json').then(r => r.json())
            .then((m) => {
              data.nodes.forEach(n => {
                n.label = m[n.id]?.label || n.id;
                n.value = m[n.id]?.size || 1;
                n.group = m[n.id]?.group || 0;
              });
              let network = new Network(ref.current, data, options);
              network.on("click", onClickHandler);
            })
        })

      ref.current.style.height = window.innerHeight + "px";
    }
  }, [onClick]);

  return (
    <div ref={ref} className="map">
    </div>
  );
}

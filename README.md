# TECHMAP

A map of technologies to see how they are related.

## Contribute

If you want to contribute to the map, you need to update two files.

### `network.dot`

This [DOT](https://es.wikipedia.org/wiki/DOT) file defines the nodes and the relations between them.

**Example**

The following graph defines a relation between nodes `ios` and `swift`.

```dot
techmap {
     ios -- swift;
 }
```

### `metadata.json`

This file contains the metadata of each node in the network (a prettier name, links, description, etc).

**Example**

```js
{
  "swift": { // node id declared in network.dot
    "label": "Swift", // a prettier name to show instead of the node id
    "size": 3, // a relative value to increase/decrease node the size
    "link": "www.apple.com/es/swift", // the official website
    "wiki": {
      "es": {
        "type": "Programming language", // what kind of technology is?
        "info": "Swift is a programming language...", // a brief description about the node
        "link": "https://es.wikipedia.org/wiki/Swift_(lenguaje_de_programación)" // the link to Wikipedia page, if exists
      }
    }
  }
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contact

Follow me [@pablobgood](https://twitter.com/pablobgood), [@johnsanzo](https://twitter.com/johnsanzo).

## License

MIT License. See the `LICENSE` file.
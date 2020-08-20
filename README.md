# Product Catalog component

This repo is a reference for making a product and catalog component for an e-commerce site.

### Tech used:

Node.js, Express.js, MongoDB, React.

## To install and run:

-   Clone the repo and cd into it.

```
git clone https://github.com/k4u5h4L/product-catalog-component.git && cd product-catalog-component
```

-   Install dependencies fot both server and client.

```
cd client && npm install
```

```
cd ..
cd server && npm install
```

-   Import the JSON files in `server/src/jsonData` into your local mongoDB. Name the collections as `catalogs` and `products` using respective files in that folder.

-   Start the server. The default port for the server is 8000.

```
npm run dev
```

-   Now in another terminal, start the client side react server.

```
cd client && npm start
```

-   This should automatically take you to the development build. Else visit [localhost:3000](http://localhost:3000)

## Screenshot:

![website screenshot](/assets/screenshot.png)

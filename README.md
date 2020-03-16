# End point api for stream facebook feed

## Quick Start

### Usage

``` bash
# Install required dependencies
$ npm install
```

``` bash
# Run the server
$ npm start
# OR
# Run the server in development mode (nodemon)
$ npm run server
```

``` bash
# Access the endpoint api server
http://localhost:5000
```

The default of data length is `5`, but you can add `limit` query string if needed

``` bash
# Accessing the endpoint api server with query limit
http://localhost:5000?limit=10
```

If you don't specify the page of feed, it will be `0` by default which mean the latest are will be shows up. You can add the `page` query string if needed

``` bash
# Accessing the endpoint api server with query limit
http://localhost:5000?page=10
```

### Test

``` bash
# Run the api test
$ npm run test
```

## App Info

### Authors

Hirzi Nurfakhrian

### Version

1.0.0

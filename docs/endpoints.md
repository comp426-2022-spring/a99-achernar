# Covid Data API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="/app"/>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="NC COVID-19 Dashboard Website"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
    <style>
      *{
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
      }
    </style>
    <title>NC COVID-19 Dashboard</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Thu, 28 Apr 2022 20:16:47 GMT
< ETag: W/"366-18071d1aa0f"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 870
< Date: Fri, 29 Apr 2022 05:32:10 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /app/state/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/state/
```

#### Response body

```

```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Thu, 28 Apr 2022 20:16:47 GMT
< ETag: W/"366-18071d1aa0f"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 870
< Date: Fri, 29 Apr 2022 05:34:40 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /app/county/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/county/
```

#### Response body

```

```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Thu, 28 Apr 2022 20:16:47 GMT
< ETag: W/"366-18071d1aa0f"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 870
< Date: Fri, 29 Apr 2022 05:37:22 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /app/logs/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/logs/
```

#### Response body

```

```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Thu, 28 Apr 2022 20:16:47 GMT
< ETag: W/"366-18071d1aa0f"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 870
< Date: Fri, 29 Apr 2022 05:38:28 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /app/getUserList/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/getUserList/
```

#### Response body

```

```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Thu, 28 Apr 2022 20:16:47 GMT
< ETag: W/"366-18071d1aa0f"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 870
< Date: Fri, 29 Apr 2022 05:39:26 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /app/hospital/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/hospital/
```

#### Response body

```

```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Thu, 28 Apr 2022 20:16:47 GMT
< ETag: W/"366-18071d1aa0f"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 870
< Date: Fri, 29 Apr 2022 05:40:31 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /app/wastewater/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/wastewater/
```

#### Response body

```

```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Thu, 28 Apr 2022 20:16:47 GMT
< ETag: W/"366-18071d1aa0f"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 870
< Date: Fri, 29 Apr 2022 05:41:28 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```


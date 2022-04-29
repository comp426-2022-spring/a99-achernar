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
[{"id":1,"date":"4/16/2022","positive":733,"deaths":0},{"id":2,"date":"4/15/2022","positive":892,"deaths":1}]
```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 109
< ETag: W/"6d-Ka30FGxS2DsvD+NSyVtFJ5Y+KII"
< Date: Fri, 29 Apr 2022 18:12:55 GMT
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
[{"id":17997,"rownumber":"17,997","date":"10/19/21","county":"Wilkes ","dailycases":11,"deaths":2},{"id":17998,"rownumber":"17,998","date":"10/19/21","county":"Wilson ","dailycases":9,"deaths":0},{"id":17999,"rownumber":"17,999","date":"10/19/21","county":"Yadkin ","dailycases":6,"deaths":0},{"id":18000,"rownumber":"18,000","date":"10/19/21","county":"Yancey ","dailycases":4,"deaths":0}]
```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 3136
< ETag: W/"c40-ULAYP0rwY7ptkLDbRP5m7xq0jUk"
< Date: Fri, 29 Apr 2022 18:07:51 GMT
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
[{"id":598,"remoteaddr":"::1","remoteuser":null,"time":1651255743658,"method":"GET","url":"/api/hospital","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.77.0"},{"id":599,"remoteaddr":"::1","remoteuser":null,"time":1651255763292,"method":"GET","url":"/api/getUserList/","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.77.0"},{"id":600,"remoteaddr":"::1","remoteuser":null,"time":1651255879252,"method":"GET","url":"/api/logs/","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.77.0"}]
```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 3136
< ETag: W/"c40-ULAYP0rwY7ptkLDbRP5m7xq0jUk"
< Date: Fri, 29 Apr 2022 18:07:51 GMT
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
< Content-Type: application/json; charset=utf-8
< Content-Length: 103
< ETag: W/"67-RgpgDpPk9/26cJs/IBYCc7UCjvA"
< Date: Fri, 29 Apr 2022 18:09:03 GMT
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
[{"id":1,"date":"4/23/2022","hospitalizations":365},{"id":2,"date":"4/22/2022","hospitalizations":348}]
```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 103
< ETag: W/"67-RgpgDpPk9/26cJs/IBYCc7UCjvA"
< Date: Fri, 29 Apr 2022 18:09:03 GMT
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
[{"id":1,"plant":"Cary 1","county":"Wake","date":"4/19/2022","population":"84,189","particles":"4,928,211"},{"id":43,"plant":"Cary 2","county":"Wake","date":"4/19/2022","population":"74,331","particles":"8,256,712"},{"id":84,"plant":"Cary 3","county":"Wake","date":"4/19/2022","population":"75,886","particles":"18,024,668"},{"id":121,"plant":"Chapel Hill - Carrboro","county":"Orange","date":"4/20/2022","population":"78,141","particles":"13,674,788"},{"id":250,"plant":"Charlotte 1","county":"Mecklenburg","date":"4/19/2022","population":"68,685","particles":"15,527,938"},{"id":371,"plant":"Charlotte 2","county":"Mecklenburg","date":"4/19/2022","population":"182,501","particles":"22,608,567"},{"id":496,"plant":"Charlotte 3","county":"Mecklenburg","date":"4/19/2022","population":"120,000","particles":"21,406,437"},{"id":579,"plant":"City of Wilson","county":"Wilson","date":"4/19/2022","population":"49,384","particles":"3,070,885"},{"id":660,"plant":"Fayetteville - Rockfish","county":"Cumberland","date":"4/20/2022","population":"151,589","particles":"6,330,267"},{"id":745,"plant":"Greensboro - North Buffalo","county":"Guilford","date":"4/20/2022","population":"135,821","particles":"66,478,125"},{"id":829,"plant":"Greenville","county":"Pitt","date":"4/20/2022","population":"89,616","particles":"3,825,380"},{"id":962,"plant":"Laurinburg","county":"Scotland","date":"4/19/2022","population":"15,527","particles":"3,926,923"},{"id":1126,"plant":"MSD of Buncombe County","county":"Buncombe,Henderson","date":"4/20/2022","population":"173,000","particles":"7,975,597"},{"id":1043,"plant":"Marion","county":"Mcdowell","date":"4/19/2022","population":"8,459","particles":"3,575,523"},{"id":1205,"plant":"New Hanover County (North)","county":"New Hanover","date":"4/15/2022","population":"67,743","particles":"5,040,271"},{"id":1330,"plant":"Newport","county":"Carteret","date":"8/18/2021","population":"4,774","particles":"167,266"},{"id":1394,"plant":"Pittsboro","county":"Chatham","date":"5/25/2021","population":"4,234","particles":"122,191"},{"id":1433,"plant":"Raleigh","county":"Wake","date":"4/20/2022","population":"550,000","particles":"9,340,320"},{"id":1552,"plant":"Raleigh 2","county":"Wake","date":"4/19/2022","population":"30,655","particles":"3,190,252"},{"id":1598,"plant":"Raleigh 3","county":"Wake","date":"4/19/2022","population":"7,776","particles":"6,348,769"},{"id":1643,"plant":"Roanoke Rapids","county":"Halifax,Northampton","date":"4/20/2022","population":"14,320","particles":"4,282,366"},{"id":1726,"plant":"South Durham","county":"Durham","date":"4/20/2022","population":"108,105","particles":"15,343,525"},{"id":1856,"plant":"Town of Beaufort","county":"Carteret","date":"4/20/2022","population":"3,500","particles":"327,765"},{"id":1991,"plant":"Tuckaseigee","county":"Jackson","date":"4/20/2022","population":"13,296","particles":"71,054"},{"id":2094,"plant":"Wilmington City","county":"New Hanover","date":"4/15/2022","population":"58,361","particles":"5,954,314"},{"id":2219,"plant":"Winston Salem - Salem","county":"Forsyth","date":"4/20/2022","population":"178,000","particles":"13,890,610"}]
```

#### Response headers

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 3136
< ETag: W/"c40-ULAYP0rwY7ptkLDbRP5m7xq0jUk"
< Date: Fri, 29 Apr 2022 18:07:51 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```


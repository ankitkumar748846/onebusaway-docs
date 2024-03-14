---
layout: page
title: stops-for-route Method
---

Retrieve the set of stops serving a particular route, including groups by direction of travel.  The `stops-for-route` method first and foremost provides a method for retrieving the set of stops that serve a particular route.  In addition to the full set of stops, we provide various "stop groupings" that are used to group the stops into useful collections.  Currently, the main grouping provided organizes the set of stops by direction of travel  for the route.  Finally, this method also returns a set of polylines that can be used to draw the path traveled by the route.

## Sample Request

[http://api.pugetsound.onebusaway.org/api/where/stops-for-route/1_100224.json?key=TEST](http://api.pugetsound.onebusaway.org/api/where/stops-for-route/1_100224.json?key=TEST)

## Sample Response

 ```
 {
"code": 200,
"currentTime": 1710422696583,
"data": {
"entry": {
"polylines": [
{
"length": 216,
"levels": "",
"points": "qc}aHp|`jVrA?e@cJAIEa@Mc@ISsBkEO[IYGYEWAYAc@@}E?m@AmOAoO?sF?kE?wB?q@?sG?cE?oA?yA?yD@eH?sO?kA@qL?U?OAeF?yH?}@?oJ?gN?_C?yAAwE?oCAq@?U?e@?]@]@QBMDIFMDKJGHKhBsAbCkBJIHGr@e@xAs@rBgAhB}@TM^[`@_@BA\\_@r@y@X_@nCaD`@i@BERSLQ\\e@Zm@~@oBTc@L[Xw@DM@KDSDSDUB[@M?S@c@?{@?_D?eA?sD?wF?aH?}A@kA?SHm@B[D]@Y@e@?k@?o@Ei@?[?S@}@@kAA[ASCM?UEq@As@Ag@A{D@MBMDQJYl@yARc@P_@Pe@Ri@@qD?aB?gE?yG?M?_B?Y?mD?_A?yD?s@?wC?u@?_@?}F@kF?mF?_A@mD?mF?oC@iE@sD?a@?sE?wE?oD@w@@}D?a@?yD@eC?kA?g@@uB?i@?gA?yC?eA@_@?g@?eA@qB?qB@uB?qB?uB?k@?cA@qB?yB|@?dC?bBDpABtE@hHFlABh@?n@?~B?dBBL?fCDjBBZ?PBJFJJLHX\\bB{DdAkCFStCgH|@eC`@iA`A_CISCM?M?MBo@@W?QB[?e@?_@AS"
},
],
"routeId": "1_100224",
"stopGroupings": [
{
"ordered": true,
"stopGroups": [
{
"id": "0",
"name": {
"name": "Ballard Wallingford",
"names": [
"Ballard Wallingford"
],
"type": "destination"
},
],
"stopIds": [
"1_18085",
"1_18090",
],
"subGroups": []
}
],
"type": "direction"
}
],
"stopIds": [
"1_10911",
"1_75407",
"1_9587"
]
},
"references": {
"agencies": [
{
"disclaimer": "",
"email": "",
"fareUrl": "https://kingcounty.gov/en/dept/metro/fares-and-payment/prices",
"id": "1",
"lang": "EN",
"name": "Metro Transit",
"phone": "206-553-3000",
"privateService": false,
"timezone": "America/Los_Angeles",
"url": "https://kingcounty.gov/en/dept/metro"
},
{
"disclaimer": "",
"email": "main@soundtransit.org",
"fareUrl": "https://www.soundtransit.org/ride-with-us/how-to-pay/fares",
"id": "40",
"lang": "en",
"name": "Sound Transit",
"phone": "1-888-889-6368",
"privateService": false,
"timezone": "America/Los_Angeles",
"url": "https://www.soundtransit.org"
}
],
"routes": [
{
"agencyId": "1",
"color": "",
"description": "Ballard - Montlake",
"id": "1_100224",
"longName": "",
"nullSafeShortName": "44",
"shortName": "44",
"textColor": "",
"type": 3,
"url": "https://kingcounty.gov/en/dept/metro/routes-and-service/schedules-and-maps/044.html"
},
],
"situations": [],
"stopTimes": [],
"stops": [
{
"code": "10911",
"direction": "E",
"id": "1_10911",
"lat": 47.661205,
"locationType": 0,
"lon": -122.313477,
"name": "U District Station - Bay 3",
"parent": "",
"routeIds": [
"1_102730",
"40_586"
],
"staticRouteIds": [
"1_102730",
"1_100184",
"40_586"
],
"wheelchairBoarding": "ACCESSIBLE"
},
],
"trips": []
}
},
"text": "OK",
"version": 2
}
 ```

## Request Parameters

* `id` - The route id, encoded directly in the URL:
    * `http://api.pugetsound.onebusaway.org/api/where/stops-for-route/[ID GOES HERE].xml`
* `includePolylines=true|false` = Optional parameter that controls whether polyline elements are included in the response.  Defaults to true.
* `time=YYYY-MM-DD|epoch` = specify the service date explicitly.  Defaults to today.

## Response

---
layout: page
title: stops-for-location Method
---

Search for stops near a specific location, optionally by stop code

## Sample Request

[http://api.pugetsound.onebusaway.org/api/where/stops-for-location.json?key=TEST&amp;lat=47.653435&amp;lon=-122.305641](http://api.pugetsound.onebusaway.org/api/where/stops-for-location.json?key=TEST&amp;lat=47.653435&amp;lon=-122.305641)

## Sample Response

```
   {
"code": 200,
"currentTime": 1710421979504,
"data": {
"limitExceeded": false,
"list": [
{
"code": "10914",
"direction": "S",
"id": "1_10914",
"lat": 47.656422,
"locationType": 0,
"lon": -122.312164,
"name": "15th Ave NE & NE Campus Pkwy",
"parent": "",
"routeIds": [
"1_102730",
"40_586"
],
"staticRouteIds": [
"1_102730",
"40_586"
],
"wheelchairBoarding": "ACCESSIBLE"
},
{
"code": "10917",
"direction": "S",
"id": "1_10917",
"lat": 47.65482,
"locationType": 0,
"lon": -122.31221,
"name": "15th Ave NE & NE 40th St",
"parent": "",
"routeIds": [
"1_102730",
"40_586"
],
"staticRouteIds": [
"1_102730",
"40_586"
],
"wheelchairBoarding": "ACCESSIBLE"
},
{
"code": "25240",
"direction": "SW",
"id": "1_25240",
"lat": 47.650227,
"locationType": 0,
"lon": -122.30442,
"name": "Montlake Blvd NE & NE Pacific Pl - Bay 3",
"parent": "",
"routeIds": [
"1_100224",
],
"staticRouteIds": [
"1_100224",
],
"wheelchairBoarding": "ACCESSIBLE"
},
{
"code": "29240",
"direction": "SE",
"id": "1_29240",
"lat": 47.652084,
"locationType": 0,
"lon": -122.310883,
"name": "NE Pacific St & 15th Ave NE",
"parent": "",
"routeIds": [
"1_100223",
"40_586"
],
"staticRouteIds": [
"1_100223",
"40_586"
],
"wheelchairBoarding": "ACCESSIBLE"
}
],
"outOfRange": false,
"references": {
"agencies": [
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
"description": "Lake City - Northgate - University District",
"id": "1_102730",
"longName": "",
"nullSafeShortName": "20",
"shortName": "20",
"textColor": "",
"type": 3,
"url": "https://kingcounty.gov/en/dept/metro/routes-and-service/schedules-and-maps/020.html"
},
],
"situations": [],
"stopTimes": [],
"stops": [
{
"code": "N05",
"direction": "",
"id": "40_N05",
"lat": 47.649815,
"locationType": 0,
"lon": -122.303763,
"name": "Univ of Washington",
"parent": "",
"routeIds": [],
"staticRouteIds": [],
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

* lat - The latitude coordinate of the search center
* lon - The longitude coordinate of the search center
* radius - The search radius in meters (optional)
* latSpan/lonSpan - An alternative to `radius` to set the search bounding box (optional)
* query	- A specific stop code to search for (optional)

If you just specify a lat,lon search location, the `stops-for-location` method will just return nearby stops.  If you specify an optional `query` parameter, we'll search for nearby stops with the specified code.  This is the primary method from going from a user-facing stop code like "75403" to the actual underlying stop id unique to a stop for a particular transit agency.

## Response

The `stops-for-location` method returns a [list result](../elements/list-result), so see additional documentation on controlling the number of elements returned and interpreting the results.  The list contents are `<stop/>` elements, so see details about the various properties of the [`<stop/>` element](../elements/stop).

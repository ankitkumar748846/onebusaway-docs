---
layout: page
title: agency-with-coverage Method
---

Returns a list of all transit agencies currently supported by OneBusAway along with the center of their coverage area.

## Sample Request

[http://api.pugetsound.onebusaway.org/api/where/agencies-with-coverage.json?key=TEST](http://api.pugetsound.onebusaway.org/api/where/agencies-with-coverage.json?key=TEST)

## Sample Response

   ```
       {
"code": 200,
"currentTime": 1710416837484,
"data": {
"limitExceeded": false,
"list": [
{
"agencyId": "1",
"lat": 47.53009,
"latSpan": 0.6819459999999964,
"lon": -122.1462285,
"lonSpan": 0.7207869999999872
},
{
"agencyId": "96",
"lat": 47.616654499999996,
"latSpan": 0.009216999999999587,
"lon": -122.3434575,
"lonSpan": 0.012994999999989432
},
],
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
"email": "",
"fareUrl": "https://www.seattle.gov/transportation/getting-around/transit/streetcar/fares-and-orca-card",
"id": "23",
"lang": "EN",
"name": "City of Seattle",
"phone": "206-684-7623",
"privateService": false,
"timezone": "America/Los_Angeles",
"url": "https://www.seattle.gov/transportation/getting-around/transit/streetcar"
},
],
"routes": [],
"situations": [],
"stopTimes": [],
"stops": [],
"trips": []
}
},
"text": "OK",
"version": 2
}
   ```

## Response

The response has the following fields:

* `agencyId` - an agency id for the agency whose coverage is included.  Should match an [`<agency/>` element](/api/where/elements/agency) referenced in the `<references/>` section.
* `lat` and `lon` - indicates the center of the agency's coverage area
* `latSpan` and `lonSpan` - indicate the height (lat) and width (lon) of the coverage bounding box for the agency.
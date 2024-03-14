---
layout: page
title: stops-ids-for-agency Method
---

Retrieve the list of all stops for a particular agency by id

## Sample Request

[http://api.pugetsound.onebusaway.org/api/where/stop-ids-for-agency/40.json?key=TEST](http://api.pugetsound.onebusaway.org/api/where/stop-ids-for-agency/40.json?key=TEST)

## Sample Response

```
    {
"code": 200,
"currentTime": 1710421734226,
"data": {
"limitExceeded": false,
"list": [
"40_S_KE_SB",
"40_E21-T1",
"40_E21-T2",
"40_SS08",
"40_99610"
],
"references": {
"agencies": [],
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

## Request Parameters

* id - the id of the agency, encoded directly in the URL:
    * `http://api.pugetsound.onebusaway.org/api/where/stop-ids-for-agency/[ID GOES HERE].xml`

## Response

Returns a list of all stop ids for stops served by the specified agency.  Note that `<stop/>` elements for the referenced stops will NOT be included in the `<references/>` section, since there are potentially a large number of stops for an agency.
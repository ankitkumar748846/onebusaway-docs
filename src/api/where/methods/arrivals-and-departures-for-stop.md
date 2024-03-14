---
layout: page
title: arrivals-and-departures-for-stop Method
---

Get current arrivals and departures for a stop identified by id

## Sample Request

[http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_75403.json?key=TEST](http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_75403.json?key=TEST)

## Sample Response

   ```
    {
"code": 200,
"currentTime": 1710417609750,
"data": {
"entry": {
"arrivalsAndDepartures": [
{
"actualTrack": "",
"arrivalEnabled": true,
"blockTripSequence": 1,
"departureEnabled": true,
"distanceFromStop": 14856.422027763247,
"frequency": null,
"historicalOccupancy": "",
"lastUpdateTime": 1710417569000,
"numberOfStopsAway": 43,
"occupancyStatus": "",
"predicted": true,
"predictedArrivalInterval": null,
"predictedArrivalTime": 1710419427000,
"predictedDepartureInterval": null,
"predictedDepartureTime": 1710419427000,
"predictedOccupancy": "",
"routeId": "1_100225",
"routeLongName": "",
"routeShortName": "45",
"scheduledArrivalInterval": null,
"scheduledArrivalTime": 1710419340000,
"scheduledDepartureInterval": null,
"scheduledDepartureTime": 1710419340000,
"scheduledTrack": "",
"serviceDate": 1710399600000,
"situationIds": [],
"status": "default",
"stopId": "1_75403",
"stopSequence": 6,
"totalStopsInTrip": 43,
"tripHeadsign": "Loyal Heights Greenwood",
"tripId": "1_561353825",
"tripStatus": {
"activeTripId": "1_561353955",
"blockTripSequence": 0,
"closestStop": "1_35317",
"closestStopTimeOffset": -2,
"distanceAlongTrip": 13.753102401484327,
"frequency": null,
"lastKnownDistanceAlongTrip": 0,
"lastKnownLocation": {
"lat": 47.70280456542969,
"lon": -122.3285140991211
},
"lastKnownOrientation": 0,
"lastLocationUpdateTime": 1710417569000,
"lastUpdateTime": 1710417569000,
"nextStop": "1_23750",
"nextStopTimeOffset": 69,
"occupancyCapacity": 0,
"occupancyCount": 0,
"occupancyStatus": "",
"orientation": 92.32153059054525,
"phase": "in_progress",
"position": {
"lat": 47.70293163842085,
"lon": -122.32851901236842
},
"predicted": true,
"scheduleDeviation": 87,
"scheduledDistanceAlongTrip": 13.753102401484327,
"serviceDate": 1710399600000,
"situationIds": [
"1_57217"
],
"status": "SCHEDULED",
"totalDistanceAlongTrip": 12752.191590950093,
"vehicleId": "1_8139"
},
"vehicleId": "1_8139"
},
],
"nearbyStopIds": [
"1_75414"
],
"situationIds": [],
"stopId": "1_75403"
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
{
"agencyId": "1",
"color": "",
"description": "Shoreline Community College - Northgate Station",
"id": "1_100202",
"longName": "",
"nullSafeShortName": "345",
"shortName": "345",
"textColor": "",
"type": 3,
"url": "https://kingcounty.gov/en/dept/metro/routes-and-service/schedules-and-maps/345.html"
},
],
"situations": [
{
"activeWindows": [
{
"from": 1702587060000,
"to": 1711969140000
}
],
"allAffects": [
{
"agencyId": "1",
"applicationId": "",
"directionId": "",
"routeId": "1_100203",
"stopId": "",
"tripId": ""
},
{
"agencyId": "1",
"applicationId": "",
"directionId": "",
"routeId": "1_102574",
"stopId": "",
"tripId": ""
},
],
"consequenceMessage": "",
"consequences": [
{
"condition": "",
"conditionDetails": {
"diversionPath": {
"length": 0,
"levels": "",
"points": ""
},
"diversionStopIds": []
}
}
],
"creationTime": 1710417517823,
"description": {
"lang": "en",
"value": "The northern section of Northgate Park & Ride D is scheduled to permanently close in December as part of a transit-oriented development (TOD) project that will build affordable housing next to transit service. In addition to housing, the development will also include retail space serving the Northgate community. \r\n\nMore information about the Northgate TOD project and how you can access alternate parking can be found at Metroâ€™s website: Northgate Transit-Oriented Development Project - King County, Washington.\r\n\nTo prepare the site for construction, transit customers will no longer be able to park in the northern section (north of entrance off Third Avenue Northeast) of Northgate Park & Ride D after December 22. Any vehicle parked in the construction area after December 22th is subject to being towed at the ownerâ€™s expense.\r\n\nMake sure to move your vehicle by that date to avoid a tow. The remaining southern section of Northgate Park & Ride D is accessible through the south entrance off Northeast 100th Street.\r\n"
},
"id": "1_57217",
"publicationWindows": [],
"reason": "UNKNOWN_CAUSE",
"severity": "noImpact",
"summary": {
"lang": "en",
"value": "Northgate Park & Ride D Partial Closure for TOD Construction â€“ Dec. 22, 2023"
},
"url": {
"lang": "en",
"value": "https://kingcounty.gov/en/dept/metro/projects/transit-oriented-communities/northgate#toc-alternative-travel-options"
}
}
],
"stopTimes": [],
"stops": [
{
"code": "75403",
"direction": "SW",
"id": "1_75403",
"lat": 47.654503,
"locationType": 0,
"lon": -122.30513,
"name": "East Stevens Way NE & Benton Ln",
"parent": "",
"routeIds": [
"1_100225",
"1_100259",
"1_100214"
],
"staticRouteIds": [
"1_100225",
"1_100259",
"1_100214"
],
"wheelchairBoarding": "ACCESSIBLE"
},
{
"code": "35317",
"direction": "N",
"id": "1_35317",
"lat": 47.702808,
"locationType": 0,
"lon": -122.328423,
"name": "Northgate Station - Bay 1",
"parent": "",
"routeIds": [
"1_102730",
"1_102574",
"1_100259",
"1_100269",
"1_100202",
"1_100203",
"1_100204",
"1_100205"
],
"staticRouteIds": [
"1_102730",
"1_102574",
"1_100259",
"1_100269",
"1_100202",
"1_100203",
"1_100204",
"1_100205"
],
"wheelchairBoarding": "ACCESSIBLE"
}
],
"trips": [
{
"blockId": "1_7087157",
"directionId": "0",
"id": "1_561353825",
"peakOffpeak": 0,
"routeId": "1_100225",
"routeShortName": "",
"serviceId": "1_45626",
"shapeId": "1_31045010",
"timeZone": "",
"tripHeadsign": "Loyal Heights Greenwood",
"tripShortName": ""
}
]
}
},
"text": "OK",
"version": 2
}
   ```

## Request Parameters

* `id` - the stop id, encoded directly in the URL:
    * `http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/[ID GOES HERE].xml`
* `minutesBefore=n` - include vehicles having arrived or departed in the previous n minutes (default=5)
* `minutesAfter=n` - include vehicles arriving or departing in the next n minutes (default=35)
* `time` - by default, the method returns the status of the system right now.  However, the system
  can also be queried at a specific time.  This can be useful for testing.  See [timestamps](/api/where/#timestamps)
  for details on the format of the `time` parameter.


## Response

The response is primarily composed of [`<arrivalAndDeparture/>` elements](/api/where/elements/arrival-and-departure),  so see the element documentation for specific details.

The nearby stop list is designed to capture stops that are very close by (like across the street) for quick navigation.

Trips will not show up in the results if the schedule_relationship is SKIPPED.
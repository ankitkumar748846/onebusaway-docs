---
layout: page
title: schedule-for-stop Method
---

Retrieve the full schedule for a stop on a particular day

## Sample Request

[http://api.pugetsound.onebusaway.org/api/where/schedule-for-stop/1_75403.json?key=TEST](http://api.pugetsound.onebusaway.org/api/where/schedule-for-stop/1_75403.json?key=TEST)

## Sample Response

   ```
   {
"code": 200,
"currentTime": 1710421195742,
"data": {
"entry": {
"date": 1710421195737,
"stopId": "1_75403",
"stopRouteSchedules": [
{
"routeId": "1_100225",
"stopRouteDirectionSchedules": [
{
"scheduleFrequencies": [],
"scheduleStopTimes": [
{
"arrivalEnabled": true,
"arrivalTime": 1710419340000,
"departureEnabled": true,
"departureTime": 1710419340000,
"serviceId": "1_45626",
"stopHeadsign": "",
"tripId": "1_561353825"
},
],
"tripHeadsign": "Loyal Heights Greenwood"
}
]
},
{
"routeId": "1_100259",
"stopRouteDirectionSchedules": [
{
"scheduleFrequencies": [],
"scheduleStopTimes": [
{
"arrivalEnabled": true,
"arrivalTime": 1710428700000,
"departureEnabled": true,
"departureTime": 1710428700000,
"serviceId": "1_45626",
"stopHeadsign": "",
"tripId": "1_604670985"
},
],
"tripHeadsign": "U-District Station Lake City"
}
]
}
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
}
],
"routes": [
{
"agencyId": "1",
"color": "",
"description": "Loyal Heights - University District",
"id": "1_100225",
"longName": "",
"nullSafeShortName": "45",
"shortName": "45",
"textColor": "",
"type": 3,
"url": "https://kingcounty.gov/en/dept/metro/routes-and-service/schedules-and-maps/045.html"
},
],
"situations": [],
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
}
],
"trips": []
}
},
"text": "OK",
"version": 2
}
   ```

## Request Parameters

* id - the stop id to request the schedule for, encoded directly in the URL:
	* `http://api.pugetsound.onebusaway.org/api/where/schedule-for-stop/[ID GOES HERE].xml`
* date - The date for which you want to request a schedule of the format YYYY-MM-DD (optional, defaults to current date)

## Response

The response is pretty complex, so we'll describe the details at a high-level along with references to the various elements in the response.

The response can be considered in two parts.  The first part lists specific arrivals and departures at a stop on a given date (`<stopRouteSchedules/>` section) while the second part lists which days the stop currently has service defined (the `<stopCalendarDays/>` section).  By convention, we refer to the arrival and departure time details for a particular trip at a stop as a stop time.

We break up the stop time listings in a couple of ways.  First, we split the stop times by route (corresponds to each `<stopRouteSchedule/>` element).  We next split the stop times for each route by direction of travel along the route (corresponds to each `<stopRouteDirectionSchedule/>` element).  Most stops will serve just one direction of a particular route, but some stops will serve both directions, and it may be useful to present those listings separately.  Each `<stopRouteDirectionSchedule/>` element has a `tripHeadsign` property that indicates the direction of travel.

Finally we get down to the unit of a stop time, as represented by the `<scheduleStopTime/>` element.  Each element has the following set of properties:

* arrivalTime - time in milliseconds since the Unix epoch that the transit vehicle will arrive
* departureTime - time in milliseconds since the Unix epoch that the transit vehicle will depart
* tripId - the id for the trip of the scheduled transit vehicle
* serviceId - the serviceId for the schedule trip (see the [GTFS spec](http://code.google.com/transit/spec/transit_feed_specification.html) for more details

In addition to all the `<scheduleStopTime/>` elements, the response also contains `<stopCalendarDay/>` elements which list out all the days that a particular stop has service.  This element has the following properties:

* date - the date of service in milliseconds since the Unix epoch
* group - we provide a group id that groups `<stopCalendarDay/>` into collections of days with similar service.  For example, Monday-Friday might all have the same schedule and the same group id as result, while Saturday and Sunday have a different weekend schedule, so they'd get their own group id.

In addition to all the `<scheduleStopTime/>` elements, the main entry also has the following properties:

* date - the active date for the returned calendar
* stopId - the stop id for the requested stop, which can be used to access the [`<stop/>` element](/api/where/elements/stop) in the `<references/>` section
* timeZone - the time-zone the stop is located in

### Proposed Additions

<font color="red">BETA: These are proposed additions and are subject to change, even if they are available on test or production servers.</font>

In order to better support frequency-based scheduling, we propose the addition of some new elements to model a frequency-based schedule.

    <stopRouteDirectionSchedule>
      ...
      <scheduleFrequencies>
        <scheduleFrequency>
          <serviceDate>1289548800000</serviceDate>
          <startTime>1289566800000</startTime>
          <endTime>1289570399000</endTime>
          <headway>900</headway>
          <serviceId>1_116-WEEK</serviceId>
          <tripId>40_15043574</tripId>
        </scheduleFrequency>
        <scheduleFrequency>...</scheduleFrequency>
      </scheduleFrequencies>
    </stopRouteDirectionSchedule>

Much like the `<stopRouteDirectionSchedule>` currently has a list of `<scheduleStopTime>` element that captures scheduled arrivals, we propose the addition of a list of `<scheduleFrequency>` elements that capture frequency-based arrivals.  The frequency defines the service interval, the frequency of service, and some details about the trip.

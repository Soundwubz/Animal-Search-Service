
var map;
var directionsManager;

function GetMap()
{
    map = new Microsoft.Maps.Map('#myMap', {});

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        //Specify where to display the route instructions.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Create waypoints to route between.
        var seattleWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'Seattle, WA' });
        directionsManager.addWaypoint(seattleWaypoint);

        var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'Work', location: new Microsoft.Maps.Location(47.64, -122.1297) });
        directionsManager.addWaypoint(workWaypoint);

        //Specify the element in which the itinerary will be rendered.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Calculate directions.
        directionsManager.calculateDirections();
    });
}
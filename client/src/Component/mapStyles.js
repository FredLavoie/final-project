export default [
	{
		featureType: 'administrative.locality',
		stylers: [{ visibility: 'off' }]
	},
	{
		featureType: "landscape",
		stylers: [{ visibility: 'off' }]
	},
	{
		featureType: 'landscape',
		elementType: 'landscape.man_made',
		stylers: [{ visibility: 'on' }]
	},
	{
		featureType: 'poi',
		stylers: [{ visibility: 'off' }]
	},
	{
		featureType: 'poi.park',
		stylers: [{ visibility: 'off' }]
	},
	{
		featureType: 'road.highway',
		elementType: 'all',
		stylers: [{	visibility: 'simplified' }]
	},
	{
		featureType: 'road.highway',
		elementType: 'labels.icon',
		stylers: [{	visibility: 'off'	}]
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels.icon',
		stylers: [{	visibility: 'off'	}]
	}
]

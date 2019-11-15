import { IActivity, IRoute } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        'id': 1,
        'name': 'Main Bike Trails',
        'date': new Date('06/01/2019'),
        'distance': 16.2,
        'comments': 'Nice day, cool temps',
        'gpxData': '../../assets/gpx/1.gpx'
    },
    {
        'id': 2,
        'name': 'Industrial Park',
        'date': new Date('06/04/2019'),
        'gpxData': '../../assets/gpx/1.gpx',
        'distance': 1.2,
        'comments': 'Cool and windy.'
    },
    {
        'id': 3,
        'name': 'Forest Route',
        'date': new Date('06/05/2019'),
        'gpxData': '../../assets/gpx/2.gpx',
        'distance': 3.2,
        'comments': 'Evening run.'
    },
    {
        'id': 4,
        'name': 'Lake Shore',
        'date': new Date('06/08/2019'),
        'gpxData': '../../assets/gpx/4.gpx',
        'distance': 8.4,
        'comments': 'Cool and windy by the lake.'
    }
]

export const ROUTE: IRoute[] = [
{
  'id': 1,
  'routingapi': 'routingapi',
  'wps': 'skymantics',
  'schema': 'OSM',
  'start': '38.9180896, -77.0051393',
  'end': '38.9070544, -78.85',
  'algorithm': 'aStar',
  'routePurpose': 'shortestpath',
  'obstacle': '',
  'maxHeight': 0,
  'maxWeight': 0,
  'geojson': '../../assets/geojson/3.json'
},
{
  'id': 2,
  'routingapi': 'wps',
  'wps': 'other',
  'schema': 'NSG',
  'start': '33.9180896, -77.0051393',
  'end': '33.9070544, -78.85',
  'algorithm': 'djiksta',
  'routePurpose': 'fastestpath',
  'obstacle': '',
  'maxHeight': 0,
  'maxWeight': 0,
  'geojson': '../../assets/geojson/3.json'
}
]
// This Model is a interface for objects inputed and displayed on the form, route and map components
export interface IActivity {
    id: number;
    name: string;
    date: Date;
    comments?: string;
    distance?: number;
    gpxData: string;
}

export interface IRoute {
    id: number;
    routingapi: string;
    wps: string;
    schema: string;
    start: string;
    end: string;
    algorithm: string;
    routePurpose: string;
    obstacle?: any;
    maxHeight?: number;
    maxWeight?: number;
    geojson: string;
}

export interface IObstacle {
    id: number;
    type: string;
    coordinates: number;
}
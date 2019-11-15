import { Url } from 'url';
import { Deserializable } from './deserializable';

export class RouteModel implements Deserializable {

    constructor(waypoints: MultiPoint, obstacle: MultiPolygon) {
        this.waypoints = waypoints;
        this.obstacle = obstacle
    }

    name: string;
    engine: string;
    dataset: string;
    waypoints: MultiPoint;
    algorithm: string;
    obstacle?: MultiPolygon;
    maxHeight?: number;
    maxWeight?: number;
    preference: string;
    when?: When;
    subscriber: Url;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}

export class MultiPoint {
    type: string;
    coordinates: number[][];
}

export class MultiPolygon {
    type: string;
    coordinates: number[][][];
}
export interface Input {
    value: string;
    viewValue: string;
  }

export class When {
    timestamp: Date;
    type: type;
}

export enum type {
    departure = 'departure',
    arrival = 'arrival'
}

export enum sync {
    sync = 'sync',
    async = 'async'
}


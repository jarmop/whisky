export type Coordinates = {
    lon: number,
    lat: number,
}

export type Distillery = {
    name: string,
    coordinates: Coordinates,
    region: Regions,
}

export enum Regions {
    Speyside,
    Highlands,
    Lowlands,
    Islay,
    Islands,
    CampbelTown,
}

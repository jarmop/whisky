import { Distillery, Regions } from "types";

const distilleries: Distillery[] = [
    {
        name: 'Kilchoman',
        coordinates: {
            lon: -6.4305,
            lat: 55.7869,
        },
        region: Regions.Islay,
    },
    {
        name: 'Edradour',
        coordinates: {
            lon: -3.7010,
            lat: 56.7020,
        },
        region: Regions.Highlands,
    },
    {
        name: 'Glenfiddich',
        coordinates: {
            lon: -3.1287,
            lat: 57.4548,
        },
        region: Regions.Highlands,
    },
    {
        name: 'Talisker',
        coordinates: {
            lon: -6.3567,
            lat: 57.3023,
        },
        region: Regions.Highlands,
    },
    {
        name: 'Tobermory',
        coordinates: {
            lon: -6.0698,
            lat: 56.6207,
        },
        region: Regions.Highlands,
    },
    {
        name: 'GlenDronach',
        coordinates: {
            lon: -2.6259,
            lat: 57.4844,
        },
        region: Regions.Speyside,
    },
    {
        name: 'Springbank',
        coordinates: {
            lon: -5.6085,
            lat: 55.4265,
        },
        region: Regions.CampbelTown,
    },
];

export default distilleries;

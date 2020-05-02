import { Distillery, Regions } from 'types';

const distilleries: Distillery[] = [
  {
    name: 'Springbank',
    coordinates: {
      lon: -5.6085,
      lat: 55.4265,
    },
    region: Regions.CampbelTown,
  },
  // {
  //   name: 'Edradour',
  //   coordinates: {
  //     lon: -3.7010,
  //     lat: 56.7020,
  //   },
  //   region: Regions.Highlands,
  // },
  {
    name: 'Dalwhinnie',
    coordinates: {
      lon: -4.2391,
      lat: 56.9400,
    },
    region: Regions.Highlands,
  },
  {
    name: 'Old pulteney',
    coordinates: {
      lon: -3.0847,
      lat: 58.4344,
    },
    region: Regions.Highlands,
  },
  {
    name: 'Highland Park',
    coordinates: {
      lon: -2.9554,
      lat: 58.9687,
    },
    region: Regions.Islands,
  },
  {
    name: 'Talisker',
    coordinates: {
      lon: -6.3567,
      lat: 57.3023,
    },
    region: Regions.Islands,
  },
  {
    name: 'Tobermory',
    coordinates: {
      lon: -6.0698,
      lat: 56.6207,
    },
    region: Regions.Islands,
  },
  {
    name: 'Ardbeg',
    coordinates: {
      lon: -6.1083,
      lat: 55.6404,
    },
    region: Regions.Islay,
  },
  {
    name: 'Bowmore',
    coordinates: {
      lon: -6.2900,
      lat: 55.7569,
    },
    region: Regions.Islay,
  },
  {
    name: 'Bruichladdich',
    coordinates: {
      lon: -6.3625,
      lat: 55.7663,
    },
    region: Regions.Islay,
  },
  {
    name: 'Bunnahabhain',
    coordinates: {
      lon: -6.1257,
      lat: 55.8830,
    },
    region: Regions.Islay,
  },
  {
    name: 'Caol Ila',
    coordinates: {
      lon: -6.1093,
      lat: 55.8545,
    },
    region: Regions.Islay,
  },
  {
    name: 'Kilchoman',
    coordinates: {
      lon: -6.4305,
      lat: 55.7869,
    },
    region: Regions.Islay,
  },
  {
    name: 'Laphroaig',
    coordinates: {
      lon: -6.1430,
      lat: 55.6258,
    },
    region: Regions.Islay,
  },
  {
    name: 'Auchentoshan',
    coordinates: {
      lon: -4.4381,
      lat: 55.9229,
    },
    region: Regions.Lowlands,
  },
  {
    name: 'Aberlour',
    coordinates: {
      lon: -3.2282,
      lat: 57.4670,
    },
    region: Regions.Speyside,
  },
  {
    name: 'Cragganmore',
    coordinates: {
      lon: -3.3953,
      lat: 57.4099,
    },
    region: Regions.Speyside,
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
    name: 'Glenfiddich',
    coordinates: {
      lon: -3.1287,
      lat: 57.4548,
    },
    region: Regions.Speyside,
  },
  {
    name: 'Macallan',
    coordinates: {
      lon: -3.2068,
      lat: 57.4848,
    },
    region: Regions.Speyside,
  },
];

export default distilleries;

import { EarthFetcher } from '../store/EarthPage/reducer';
import { MoonFetcher } from '../store/MoonPage/reducer';
import { UranusFetcher } from '../store/UranusPage/reducer';
import { JupiterFetcher } from '../store/JupiterPage/reducer';
import { MarsFetcher } from '../store/MarsPage/reducer';
import { PlutoFetcher } from '../store/PlutoPage/reducer';
import { MercuryFetcher } from '../store/MercuryPage/reducer';
import { NeptuneFetcher } from '../store/NeptunePage/reducer';
import { SaturnFetcher } from '../store/SaturnPage/reducer';
import { VenusFetcher } from '../store/VenusPage/reducer';

export const NAV_ITEMS = [
    { to: '/', title: 'Picture of the day', exact: true },
    { to: '/earth', title: 'Earth', prefetch: EarthFetcher.fetchData },
    { to: '/moon', title: 'Moon', prefetch: MoonFetcher.fetchData },
    { to: '/uranus', title: 'Uranus', prefetch: UranusFetcher.fetchData },
    { to: '/jupiter', title: 'Jupiter', prefetch: JupiterFetcher.fetchData },
    { to: '/mars', title: 'Mars', prefetch: MarsFetcher.fetchData },
    { to: '/mercury', title: 'Mercury', prefetch: MercuryFetcher.fetchData },
    { to: '/neptune', title: 'Neptune', prefetch: NeptuneFetcher.fetchData },
    { to: '/saturn', title: 'Saturn', prefetch: SaturnFetcher.fetchData },
    { to: '/venus', title: 'Venus', prefetch: VenusFetcher.fetchData },
    { to: '/pluto', title: 'Pluto', prefetch: PlutoFetcher.fetchData },
];

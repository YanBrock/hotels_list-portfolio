export default interface RoomInterface {
    id: string,
    images?: {url: string, alt: string,}[],
    name: string,
    occupancy: {maxAdults: number, maxChildren: number, maxOverall: number},
    longDescription: string,
    disabledAccess: boolean,
};
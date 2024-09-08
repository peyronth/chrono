import { Rider, RiderDTO } from './Rider.ts';

export class Race {
    id: string;
    name: string;
    club: string;
    date_start: string;
    riders: Rider[];

    constructor(dto: RaceDTO) {
        this.id = dto.id;
        this.name = dto.name ?? '';
        this.club = dto.club ?? '';
        this.date_start = dto.date_start ?? '';
        this.riders = dto.riders ? dto.riders.map((rider) => new Rider(rider)) : [];
    }
}

export interface RaceDTO {
    id: string;
    name: string | null;
    club: string | null;
    date_start: string | null;
    riders: RiderDTO[] | null;
}
import { FederationCategory, FederationCategoryDTO } from './FederationCategory.ts';

export class Rider {
    id: string;
    bib: string | null;
    first_name: string;
    last_name: string;
    gender: Gender;
    birth: Date;
    age_category: string;
    time_start: number | null;
    time_finish: number | null;
    time_total: number | null;
    email: string;
    phone: string;
    club: string;
    federation_category: FederationCategory | null;
    payment_type: PaymentType;

    constructor(dto: RiderDTO) {
        this.id = dto.id;
        this.bib = dto.bib ?? '';
        this.first_name = dto.first_name ?? '';
        this.last_name = dto.last_name ?? '';
        this.gender = dto.gender ?? Gender.Unknown;
        this.birth = new Date(dto.birth ?? 0);
        this.age_category = this.getAgeCategory(this.birth);
        this.time_start = dto.time_start;
        this.time_finish = dto.time_finish;
        this.time_total = (this.time_finish && this.time_start) ? this.time_finish - this.time_start : null;
        this.email = dto.email ?? '';
        this.phone = dto.phone ?? '';
        this.club = dto.club ?? '';
        this.federation_category = dto.federation_category ? new FederationCategory(dto.federation_category) : null;
        this.payment_type = dto.payment_type ?? PaymentType.Unknown;
    }

    getAgeCategory(birth: Date): string {
        return 'Senior';
    }
}

export interface RiderDTO {
    id: string;
    bib: string | null;
    first_name: string | null;
    last_name: string | null;
    gender: Gender | null;
    birth: number | null;
    time_start: number | null;
    time_finish: number | null;
    email: string | null;
    phone: string | null;
    club: string | null;
    federation_category: FederationCategoryDTO | null;
    payment_type: PaymentType | null;
}

export enum Gender {
    Unknown = 'Unknown',
    Male = 'M',
    Female = 'F',
}

export enum PaymentType {
    Unknown = 'Unknown',
    HelloAsso = 'HelloAsso',
    Cash = 'Cash'
}
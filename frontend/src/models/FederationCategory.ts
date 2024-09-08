export class FederationCategory {
    id: string;
    name: string;
    federation_name: string | null;
    federation_id: string | null;

    constructor(dto: FederationCategoryDTO) {
        this.id = dto.id;
        this.name = dto.name ?? '';
        this.federation_name = dto.federation_name ?? '';
        this.federation_id = dto.federation_id ?? '';
    }
}

export interface FederationCategoryDTO {
    id: string;
    name: string | null;
    federation_name: string | null;
    federation_id: string | null;
}
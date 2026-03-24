export interface ApiKeyData {
    id: string;
    _id: string;
    userId?: string;
    name: string;
    apiKey: string;
    disabled: boolean;
    deleted?: boolean;
    lastUsed?: string | null;
    credisConsumed?: number;
    createdAt?: string;
    updatedAt?: string;
}
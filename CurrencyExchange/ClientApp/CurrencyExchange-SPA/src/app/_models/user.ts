import { Currency } from './currency';

export interface User {
    id: number;
    username: string;
    currency?: Currency[];
}

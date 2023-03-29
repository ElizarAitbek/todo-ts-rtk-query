export interface ITodos {
    title: string;
    id: number;
    completed: boolean;
}

declare global {
    interface ObjectConstructor {
        values<T>(o: { [s: string]: T }): T[];
        values(o: any): any[];
    }
}

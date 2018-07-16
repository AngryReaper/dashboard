export interface Etl {
    id: Number;
    name: String;
    status: Boolean;
    startDate: Date;
    errorDate: Array<String>;
    errorText: Array<String>
}
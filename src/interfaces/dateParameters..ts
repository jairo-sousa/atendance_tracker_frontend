import { z } from "zod";

const TimeSchema = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: "Formato inválido: esperado hh:mm entre 00:00 e 23:59",
});

const DateSchema = z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
        message:
            "Formato inválido: esperado YYYY-MM-DD com mês de 01 a 12 e dia de 01 a 31",
    });

export type TimeString = z.infer<typeof TimeSchema>;
export type DateString = z.infer<typeof DateSchema>;

export interface DateParameters {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    seconds: number;
    milliSeconds: number;
    dateTime: string;
    date: DateString;
    time: TimeString;
    timeZone: string;
    dayOfWeek: string;
}

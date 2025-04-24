import { DateParameters } from "@/interfaces/dateParameters.";

export const getDateNowParameters = () => {
    const targetOffsetMinutes = -180; // UTC-3
    const nowUtc = new Date(); // UTC
    const dateNow = new Date(
        nowUtc.getTime() + targetOffsetMinutes * 60 * 1000
    );

    const dateParameters: DateParameters = {
        year: dateNow.getUTCFullYear(),
        month: dateNow.getUTCMonth() + 1,
        day: dateNow.getUTCDate(),
        hour: dateNow.getUTCHours(),
        minute: dateNow.getUTCMinutes(),
        seconds: dateNow.getUTCSeconds(),
        milliSeconds: dateNow.getUTCMilliseconds(),
        dateTime: dateNow.toISOString(),
        date: dateNow.toISOString().split("T")[0],
        time: `${String(dateNow.getUTCHours()).padStart(2, "0")}:${String(
            dateNow.getUTCMinutes()
        ).padStart(2, "0")}`,
        timeZone: "America/Fortaleza",
        dayOfWeek: new Date(dateNow).toLocaleString("en-US", {
            weekday: "long",
            timeZone: "Etc/GMT-3",
        }),
    };

    return dateParameters;
};

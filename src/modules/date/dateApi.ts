import axios from "axios";
import {
    convertToFortalezaTimezone,
    extractFullDate,
    isoToUtcMilseconds,
    userDateToSystem,
} from "./dateOperations";
import { DateParameters } from "@/interfaces/dateParameters.interface";

export const getDateNow = async () => {
    try {
        const response = await axios.get(
            "https://timeapi.io/api/Time/current/zone?timeZone=America/Fortaleza"
        );

        const dateNowUTC = isoToUtcMilseconds(response.data.dateTime);

        const dateNow = convertToFortalezaTimezone(dateNowUTC);
        return dateNow;
    } catch (err) {
        throw new Error("[ getDateNow ] - couldn't get date");
    }
};

export const getDateOnlyNow = async () => {
    const dateNow = await getDateNow();

    if (!dateNow) {
        throw new Error("[ day ]: could't get date at getDateNow");
    }

    const dateOnly = extractFullDate(dateNow);

    return dateOnly;
};

export const getDateNowParameters = async () => {
    try {
        const response = await axios.get(
            "https://timeapi.io/api/Time/current/zone?timeZone=America/Fortaleza"
        );

        const dateParameters: DateParameters = response.data;

        const dateNowUTC = isoToUtcMilseconds(dateParameters.dateTime);

        dateParameters.dateTime = convertToFortalezaTimezone(dateNowUTC);

        dateParameters.date = userDateToSystem(dateParameters.date);

        for (const property in dateParameters) {
            if (!property)
                throw new Error(
                    "[ getDateParameters ] - invalid received parameter"
                );
        }

        return dateParameters;
    } catch (err) {
        throw new Error("[ getDateParameters ] - couldn't get date");
    }
};

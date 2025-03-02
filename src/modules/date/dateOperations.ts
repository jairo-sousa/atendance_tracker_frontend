export const isoToUtcMilseconds = (DATE_ISO_8601: string) => {
    const date = new Date(DATE_ISO_8601);
    const dateString = date.toISOString();

    return dateString;
};

export const extractFullDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const convertToFortalezaTimezone = (dateString: string) => {
    const date = new Date(dateString);

    date.setHours(date.getHours() - 3);

    return date.toISOString();
};

export const extractTime = (dateString: string): string => {
    if (dateString) {
        const date = new Date(dateString);

        const dateHours = date.getUTCHours().toString().padStart(2, "0");
        const dateMinutes = date.getUTCMinutes().toString().padStart(2, "0");

        const time = `${dateHours}:${dateMinutes}`;

        return time;
    }

    throw new Error("[ extractTime ] - invalid dateString");
};

export const userDateToSystem = (date: string): string => {
    const [month, day, year] = date.split("/");

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const systemDateToUser = (date: string): string => {
    const [year, month, day] = date.split("-");

    return `${month}/${day}/${year}`;
};

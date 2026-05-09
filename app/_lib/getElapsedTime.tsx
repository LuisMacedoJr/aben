
const convertIsoToAbsoluteDays = (iso: string): number => {
    const ms = Date.parse(iso);
    const days = ms / (1000 * 60 * 60 * 24);
    return days;
};

const calculateElapsedDays = (current: number, post: number): number => {
    const elapsedDays = current - post;
    return elapsedDays;
};

const formatElapsedDays = (elapsedDays: number): string => {
    if (elapsedDays < 30) {
        return `${Math.floor(elapsedDays)} dias`;
    } else if (elapsedDays < 365) {
        const months = Math.floor(elapsedDays / 30);
        return `${months} meses`;
    } else {
        const years = Math.floor(elapsedDays / 365);
        return `${years} anos`;
    }
}



export default async function getElapsedTime ({props}) {
    const baseUrl = process.env.API_PATH;
    const response = await fetch(`${baseUrl}/api/time`);
    const timeData = await response.json();
    const {time, message} = timeData;
    console.log(time)
    const currentAbsoluteDays = convertIsoToAbsoluteDays(time);

    const postAbsoluteDays = convertIsoToAbsoluteDays(props.date);

    const elapsedDays = calculateElapsedDays(currentAbsoluteDays, postAbsoluteDays);
    const elapsedTime = formatElapsedDays(elapsedDays);

    return elapsedTime;
}
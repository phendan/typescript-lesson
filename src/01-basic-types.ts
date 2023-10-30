// Verfügbare Typen in TypeScript
// Grundlegende / Simple Eingebaute Typen
let string = 'hello world';
let boolean = false;
let number = 4.5; // TS unterscheidet nicht zwischen ints und floats
const empty = null;
const unavailable = undefined;
const anything: any = 1; // Schaltet effektiv das TypeChecking aus
const externalData: unknown = false; // Relevant für Daten von externen APIs z.B., wo man nicht sicher ist, was man bekommt
let impossible: never; // Zuweisen eines Werts produziert einen Fehler

// Man kann eine Variable als einen von mehreren möglichen Typen definieren
let speedInMph: number | null = null;

if (typeof speedInMph === 'number') {
    let speedInKph = speedInMph * 1.60934;
}

// speedInMph?.toExponential();

// Komplexe Typen
const user = {
    id: 1,
    username: 'philip',
    age: 27,
    professions: ['developer']
};

// const getFullName = (firstName: string, lastName: string, separator?: string) => {
const getFullName = (firstName: string, lastName: string, separator = ' ') => {
    return `${firstName}${separator}${lastName}`;
};

// function getFullName(firstName: string, lastName: string) {
//     return `${firstName} ${lastName}`;
// }

const fullName = getFullName('Philip', 'Braunen', '_');
console.log(fullName);

// type User = { username: string; password: string; id: number };

const getUserName = (user: User) => {
    return user.username;
};

{
    const getUsername = (user: { isSignedIn: boolean; username?: string }) => {
        return user.username;
    };
}

{
    const getUsername = (user: { isSignedIn: boolean; username?: string }): string => {
        if (user.isSignedIn && typeof user.username === 'string') {
            return user.username;
        }

        return 'Unknown';
    };

    const username = getUsername({ isSignedIn: true, username: 'philip' });
}

{
    type User =
        | { isSignedIn: false; username: undefined }
        | { isSignedIn: true; username: string };

    const getUsername = (user: User): string => {
        return user.isSignedIn ? user.username : 'Anonymous';
    };
}

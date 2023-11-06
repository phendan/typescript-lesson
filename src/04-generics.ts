import axios from 'axios';
// Generics - Typ Parameter

const numbers: Array<number> = [1, 2, 3];
const strings = ['foo', 'bar'];

const x = numbers.pop();
const y = strings.pop();

const a = Promise.resolve(4.5);
const b = Promise.resolve('hi!');

const someAsyncFunction = async () => {
    const x = await a;
    const y = await b;
};

const numbersWithoutDuplicates = new Set<string>();
numbersWithoutDuplicates.add('test');

type MyGenericType<Data> = {
    data: Data;
};

type Example = MyGenericType<{ firstName: string }>;

const request = <MyResponse>(url: string): Promise<MyResponse> => {
    return fetch(url).then(res => res.json());
};

type User = { id: number; name: string };
// const users = await request<User[]>('/api/users');

const convertToArray = <T>(param: T) => {
    return [param];
};

const array = convertToArray(123);
const array2 = convertToArray('test');

const addIdToObject = <T>(object: T) => {
    return {
        ...object,
        id: 1234
    };
};

const myObject = addIdToObject({ firstName: 'john', lastName: 'doe' });
myObject.lastName;
myObject.id;

const measureDuration = async <T>(promise: Promise<T>) => {
    const startTime = performance.now();
    const value = await promise;
    const completionTime = performance.now();

    return { duration: completionTime - startTime, value };
};

const promise = axios.get('/posts.json');
const result = await measureDuration(promise);
// console.log(result.duration, result.value.data);

// Generics eingrezen - Constraint
type Person = {
    name: string;
    age: number;
};

type PersonKeys = keyof Person;

function sayHello<T extends Person>(person: T) {
    console.log(`Hello, ${person.name}`);
}

// sayHello({ name: 'john doe', id: 1 });

// const getValueFromObject = (object: Record<string, any>, key: string) => {
//     return object[key];
// };
// const getValueFromObject = <Object extends {}>(object: Object, key: keyof Object) => {
//     return object[key];
// };
const getValueFromObject = <Object extends {}, Key extends keyof Object>(
    object: Object,
    key: Key
) => {
    return object[key];
};

const card = { rank: 'Ace', suit: 'Spades', value: 11 } as const;
const rank = getValueFromObject(card, 'rank');
// console.log(rank);

const clamp = <Min extends number, Max extends number>(
    number: number,
    bounds: [Min, Max]
) => {
    const [min, max] = bounds;
    return Math.min(Math.max(number, min), max);
};

const clamped = clamp(100, [0, 50]);

const typedObjectKeys = <T extends {}>(object: T) => {
    // Assertion
    return Object.keys(object) as Array<keyof T>;
};

const keys = typedObjectKeys(card);

const createSet = <T = string>() => {
    return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();

const otherStringSet = createSet();
// otherStringSet.add()

export {};

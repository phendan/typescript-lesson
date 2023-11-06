const routes = {
    home: '/',
    users: '/users',
    admin: '/admin',
    auth: '/sign-in'
} as const;

const numbers = [1, 2, 3] as const;
const firstElement = numbers[0];

// routes.admin = '/dashboard';

type RouteKey = keyof typeof routes;
type Route = (typeof routes)[RouteKey];

const goToRoute = (route: Route) => {
    //
};

goToRoute('/sign-in');

// const routesX = Object.freeze({
//     home: '/',
//     users: '/users',
//     admin: '/admin',
//     auth: '/sign-in',
//     nested: Object.freeze({
//         route: '/nested-route'
//     })
// });

// routesX.nested.route = 'test';

// Enums
// enum NotificationLevel {
//     Notice,
//     Warning,
//     Error,
//     Success
// }

// const level = NotificationLevel.Warning;
// console.log(NotificationLevel);

const notificationLevels = ['notice', 'warning', 'error', 'success'] as const;
type NotificationLevel = (typeof notificationLevels)[number];

const sendNotification = (message: string, level: NotificationLevel) => {
    //
};

sendNotification('You are not signed in', 'notice');

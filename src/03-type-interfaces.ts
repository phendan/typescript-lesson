// Type Aliases
// Man kann bestehende Typen einfach umbenennen
type X = number;
type Y = number;

type Dimensions = [X, Y];

// Type Union
// Verschiedene Optionen für einen Typ
type VideoTypes =
    | { extension: 'mp4'; mimeType: 'video/mp4' }
    | { extension: 'webm'; mimeType: 'video/webm' }
    | { extension: 'avi'; mimeType: 'video/x-msvideo' };

// type VideoTypes = {
//     extension: 'mp4' | 'webm' | 'avi';
//     mimeType: 'video/mp4' | 'video/webm' | 'video/x-msvideo';
// };

// const videoType: VideoTypes = { extension: 'mp4', mimeType: 'video/mp4' };

// Type Intersection
// Erweitert einen bestehenden Typ
type Video = VideoTypes & {
    resolution: Dimensions;
    fileSize: number;
    download(): boolean;
};

const video: Video = {
    extension: 'mp4',
    mimeType: 'video/mp4',
    resolution: [200, 200],
    fileSize: 400,
    download: () => false
};

type Permission = 'edit' | 'delete' | 'publish';

interface AdminInterface extends UserInterface {
    permissions: Permission[];
}

interface UserInterface {
    name: string;
}

class User implements UserInterface {
    name = 'philip';
}

type UserList = User[];

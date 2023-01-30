// images
import user1 from '../../../../assets/images/users/avatar-2.jpg';
import user2 from '../../../../assets/images/users/avatar-3.jpg';
import user3 from '../../../../assets/images/users/avatar-5.jpg';
import user4 from '../../../../assets/images/users/avatar-7.jpg';
import user5 from '../../../../assets/images/users/avatar-5.jpg';

import project1 from '../../../../assets/images/projects/project-1.jpg';
import project2 from '../../../../assets/images/projects/project-2.jpg';

interface Activity {
    id?: number;
    hours?: number;
    title?: string;
    description?: string;
}

export interface ActivityItemTypes {
    id?: number;
    activityTime?: string;
    activities?: Activity[];
}

export interface MessageTypes {
    id?: number;
    avatar?: string;
    userName?: string;
    text?: string;
}

export interface FileItemTypes {
    id?: number;
    fileName?: string;
    fileSize?: string;
    previewImage?: string;
}

export interface MiCuentaTypes {
    id?: number;
    avatar?: string;
    userName?: string;
    email?: string;
}

export interface FileTrashItemTypes {
    id?: number;
    fileName?: string;
    fileSize?: string;
    previewImage?: string;
}


const activityTimeline: ActivityItemTypes[] = [
    {
        id: 1,
        activityTime: 'This Week',
        activities: [
            {
                id: 1,
                hours: 2,
                title: 'Designing Shreyu Admin',
                description: 'Shreyu Admin - A responsive admin and dashboard template',
            },
            {
                id: 2,
                hours: 21,
                title: 'UX and UI for Ubold Admin',
                description: 'Ubold Admin - A responsive admin and dashboard template',
            },
            {
                id: 3,
                hours: 22,
                title: 'UX and UI for Hyper Admin',
                description: 'Hyper Admin - A responsive admin and dashboard template',
            },
        ],
    },
    {
        id: 2,
        activityTime: 'Last Week',
        activities: [
            {
                id: 1,
                hours: 2,
                title: 'Designing Shreyu Admin',
                description: 'Shreyu Admin - A responsive admin and dashboard template',
            },
            {
                id: 2,
                hours: 21,
                title: 'UX and UI for Ubold Admin',
                description: 'Ubold Admin - A responsive admin and dashboard template',
            },
            {
                id: 3,
                hours: 22,
                title: 'UX and UI for Hyper Admin',
                description: 'Hyper Admin - A responsive admin and dashboard template',
            },
        ],
    },
    {
        id: 3,
        activityTime: 'Last Month',
        activities: [
            {
                id: 1,
                hours: 2,
                title: 'Designing Shreyu Admin',
                description: 'Shreyu Admin - A responsive admin and dashboard template',
            },
            {
                id: 2,
                hours: 21,
                title: 'UX and UI for Ubold Admin',
                description: 'Ubold Admin - A responsive admin and dashboard template',
            },
            {
                id: 3,
                hours: 22,
                title: 'UX and UI for Hyper Admin',
                description: 'Hyper Admin - A responsive admin and dashboard template',
            },
        ],
    },
];

const messages: MessageTypes[] = [
    {
        id: 1,
        userName: 'John Jack',
        avatar: user1,
        text: 'The languages only differ in their grammar',
    },
    {
        id: 2,
        userName: 'Theodore',
        avatar: user2,
        text: 'Everyone realizes why a new common language ',
    },
    {
        id: 3,
        userName: 'Michael',
        text: 'To an English person, it will seem like simplified',
    },
    {
        id: 4,
        userName: 'Tony Lindsey',
        avatar: user3,
        text: 'If several languages coalesce the grammar',
    },
    {
        id: 5,
        userName: 'Robert Wilke',
        text: 'Their separate existence is a myth',
    },
    {
        id: 6,
        userName: 'James',
        avatar: user4,
        text: 'The European languages are members.',
    },
    {
        id: 7,
        userName: 'Brian',
        text: 'At vero eos et accusamus et iusto odio',
    },
    {
        id: 8,
        userName: 'Aaron Nickel',
        avatar: user5,
        text: 'Itaque earum rerum hic tenetur a sapiente',
    },
];

const micuenta: MiCuentaTypes[] = [
    {
        id: 1,
        userName: 'Grupo Gradín',
        avatar: user1,
        email: 'grupogradin@grupogradin.com',
    },
    {
        id: 2,
        userName: 'Elena Gradín',
        avatar: user2,
        email: 'elena@grupogradin.com',
    },
    {
        id: 3,
        userName: 'Laura Gradín',
        avatar: user3,
        email: 'contabilidad@grupogradin.com',
    },
    {
        id: 4,
        userName: 'Susana Gradín',
        avatar: user3,
        email: 'gestion@grupogradin.com',
    },
    {
        id: 5,
        userName: 'Sonia Gradín',
        email: 'agranxa@grupogradin.com',
    },
    {
        id: 6,
        userName: 'Sito',
        avatar: user4,
        email: 'soporte@grupogradin.com',
    },
    {
        id: 7,
        userName: 'Sinu',
        email: 'administracion@grupogradin.com',
    },
    {
        id: 8,
        userName: 'Luis',
        avatar: user5,
        email: 'servicio@grupogradin.com',
    },
];

const files: FileItemTypes[] = [
    {
        id: 1,
        fileName: 'contrato.zip',
        fileSize: '2.3 MB',
        previewImage: project1,
    },
    {
        id: 2,
        fileName: 'factura_02.pdf',
        fileSize: '1.25 MB',
        previewImage: project2,
    },
];

const filetrash: FileTrashItemTypes[] = [
    {
        id: 1,
        fileName: 'contrato.zip',
        fileSize: '2.3 MB',
        previewImage: project1,
    },
    {
        id: 2,
        fileName: 'factura_02.pdf',
        fileSize: '1.25 MB',
        previewImage: project2,
    },
];

export { activityTimeline, messages, micuenta, files, filetrash };

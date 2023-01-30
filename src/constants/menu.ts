export interface MenuItemTypes {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [

    {
        key: 'gestor-documentos',
        label: 'Gestor',
        isTitle: false,
        icon: 'folder',
        url: '/apps/file-manager',
    },
    {
        key: 'page-profile',
        label: 'Mi perfil',
        url: '/pages/profile',
        icon: 'user',
    },
    {
        key: 'registro-documentos',
        label: 'Nuevo Documento',
        url: '/forms/basic',
        icon: 'file-plus',
    },
    {
        key: 'document',
        label: 'Documentos',
        url: '/apps/document/details',
        icon: 'file-text',
    },
    {
        key: 'form-contact',
        label: 'Contactos',
        url: '/apps/contacts',
        icon: 'users',
    },
    {
        key: 'apps-contacts',
        label: 'Contactos',
        isTitle: false,
        icon: 'users',
        children: [
            {
                key: 'contacts-details',
                label: 'List',
                url: '/apps/contacts/list',
                parentKey: 'apps-contacts',
            },
            {
                key: 'contacts-details',
                label: 'Details',
                url: '/apps/contacts/details',
                parentKey: 'apps-contacts'
            },
        ],
    },
    {
        key: 'trash',
        label: 'Papelera',
        url: '/apps/trashmanager',
        icon: 'trash',
    },    
    { key: 'apps', label: 'Apps', isTitle: false },
    {
        key: 'apps-projects',
        label: 'Projects',
        isTitle: false,
        icon: 'briefcase',
        children: [
            {
                key: 'project-details',
                label: 'List',
                url: '/apps/projects/list',
                parentKey: 'apps-projects',
            },
            {
                key: 'project-details',
                label: 'Details',
                url: '/apps/projects/details',
                parentKey: 'apps-projects',
            },
        ],
    },

    { key: 'components', label: 'Components', isTitle: true },
    {
        key: 'ui-elements',
        label: 'UI Elements',
        isTitle: false,
        icon: 'package',
        url: '/components/ui-elements',
    },
    {
        key: 'widgets',
        label: 'Widgets',
        isTitle: false,
        icon: 'gift',
        url: '/components/widgets',
    },
    {
        key: 'icons',
        label: 'Icons',
        isTitle: false,
        icon: 'cpu',
        children: [
            {
                key: 'icon-unicons',
                label: 'Unicons',
                url: '/icons/unicons',
                parentKey: 'icons',
            },
            {
                key: 'icon-feather',
                label: 'Feather',
                url: '/icons/feather',
                parentKey: 'icons',
            },
            {
                key: 'icon-bootstrap',
                label: 'Bootstrap',
                url: '/icons/bootstrap',
                parentKey: 'icons',
            },
        ],
    },
    {
        key: 'forms',
        label: 'Forms',
        isTitle: false,
        icon: 'bookmark',
        children: [
            {
                key: 'form-advanced',
                label: 'Advanced',
                url: '/forms/advanced',
                parentKey: 'forms',
            },
            {
                key: 'form-validation',
                label: 'Validation',
                url: '/forms/validation',
                parentKey: 'forms',
            },
            {
                key: 'form-wizard',
                label: 'Wizard',
                url: '/forms/wizard',
                parentKey: 'forms',
            },
            {
                key: 'form-editors',
                label: 'Editors',
                url: '/forms/editors',
                parentKey: 'forms',
            },

        ],
    },
    {
        key: 'tables',
        label: 'Tables',
        isTitle: false,
        icon: 'grid',
        children: [
            {
                key: 'table-basic',
                label: 'Basic Tables',
                url: '/tables/basic',
                parentKey: 'tables',
            },
            {
                key: 'table-advanced',
                label: 'Advanced Tables',
                url: '/tables/advanced',
                parentKey: 'tables',
            },
        ],
    },

];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
    {
        key: 'dashboards',
        icon: 'home',
        label: 'Dashboards',
        isTitle: true,
        children: [
            {
                key: 'ds-ecommerce',
                label: 'Ecommerce',
                url: '/dashboard/ecommerce',
                parentKey: 'dashboards',
            },
            {
                key: 'ds-analytics',
                label: 'Analytics',
                url: '/dashboard/analytics',
                parentKey: 'dashboards',
            },
        ],
    },
    {
        key: 'components',
        icon: 'briefcase',
        label: 'Components',
        isTitle: true,
        children: [
            {
                key: 'ui-elements',
                label: 'UI Elements',
                isTitle: false,
                url: '/components/ui-elements',
                parentKey: 'components',
            },
            {
                key: 'widgets',
                label: 'Widgets',
                isTitle: false,
                url: '/components/widgets',
                parentKey: 'components',
            },
            {
                key: 'forms',
                label: 'Forms',
                isTitle: false,
                parentKey: 'components',
                children: [
                    {
                        key: 'form-basic',
                        label: 'Basic Elements',
                        url: '/forms/basic',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-contact',
                        label: 'Contactos',
                        url: '/forms/contact',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-advanced',
                        label: 'Advanced',
                        url: '/forms/advanced',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-validation',
                        label: 'Validation',
                        url: '/forms/validation',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-wizard',
                        label: 'Wizard',
                        url: '/forms/wizard',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-editors',
                        label: 'Editors',
                        url: '/forms/editors',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-upload',
                        label: 'File Uploads',
                        url: '/forms/upload',
                        parentKey: 'forms',
                    },
                ],
            },
            {
                key: 'charts',
                label: 'Charts',
                isTitle: false,
                url: '/components/charts',
                parentKey: 'components',
            },
            {
                key: 'tables',
                label: 'Tables',
                isTitle: false,
                parentKey: 'components',
                children: [
                    {
                        key: 'table-basic',
                        label: 'Basic Tables',
                        url: '/tables/basic',
                        parentKey: 'tables',
                    },
                    {
                        key: 'table-advanced',
                        label: 'Advanced Tables',
                        url: '/tables/advanced',
                        parentKey: 'tables',
                    },
                ],
            },
            {
                key: 'icons',
                label: 'Icons',
                isTitle: false,
                parentKey: 'components',
                children: [
                    {
                        key: 'icon-unicons',
                        label: 'Unicons',
                        url: '/icons/unicons',
                        parentKey: 'icons',
                    },
                    {
                        key: 'icon-feather',
                        label: 'Feather',
                        url: '/icons/feather',
                        parentKey: 'icons',
                    },
                    {
                        key: 'icon-bootstrap',
                        label: 'Bootstrap',
                        url: '/icons/bootstrap',
                        parentKey: 'icons',
                    },
                ],
            }
        ],
    },
    {
        key: 'extra-pages',
        label: 'Pages',
        isTitle: false,
        icon: 'file-text',
        children: [
            {
                key: 'page-starter',
                label: 'Starter',
                url: '/pages/starter',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-profile',
                label: 'Profile',
                url: '/pages/profile',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-activity',
                label: 'Activity',
                url: '/pages/activity',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-invoice',
                label: 'Invoice',
                url: '/pages/invoice',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-pricing',
                label: 'Pricing',
                url: '/pages/pricing',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-maintenance',
                label: 'Maintenance',
                url: '/maintenance',
                target: '_blank',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-error-404',
                label: 'Error - 404',
                url: '/error-404',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-error-500',
                label: 'Error - 500',
                url: '/error-500',
                parentKey: 'extra-pages',
            },
        ],
    },
];

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [
    {
        key: 'dashboards',
        label: 'Dashboards',
        isTitle: true,
        icon: 'home',
        children: [
            {
                key: 'ds-ecommerce',
                label: 'Ecommerce',
                url: '/dashboard/ecommerce',
                parentKey: 'dashboards',
            },
            {
                key: 'ds-analytics',
                label: 'Analytics',
                url: '/dashboard/analytics',
                parentKey: 'dashboards',
            },
        ],
    },
    {
        key: 'apps',
        icon: 'grid',
        label: 'Apps',
        isTitle: true,
        children: [
            {
                key: 'apps-projects',
                label: 'Projects',
                isTitle: false,
                icon: 'briefcase',
                parentKey: 'apps',
                children: [
                    {
                        key: 'project-list',
                        label: 'List',
                        url: '/apps/projects/list',
                        parentKey: 'apps-projects',
                    },
                    {
                        key: 'project-details',
                        label: 'Details',
                        url: '/apps/projects/details',
                        parentKey: 'apps-projects',
                    },
                ],
            },
            {
                key: 'apps-tasks',
                label: 'Tasks',
                isTitle: false,
                icon: 'clipboard',
                parentKey: 'apps',
                children: [
                    {
                        key: 'task-list',
                        label: 'List',
                        url: '/apps/tasks/list',
                        parentKey: 'apps-tasks',
                    },
                    {
                        key: 'task-kanban',
                        label: 'Kanban Board',
                        url: '/apps/tasks/kanban',
                        parentKey: 'apps-tasks',
                    },
                ],
            },
            {
                key: 'apps-file-manager',
                label: 'File Manager',
                isTitle: false,
                icon: 'file-plus',
                url: '/apps/file-manager',
                parentKey: 'apps',
            },
        ],
    },
    {
        key: 'extra-pages',
        icon: 'file-text',
        label: 'Pages',
        isTitle: true,
        children: [
            {
                key: 'page-starter',
                label: 'Starter',
                url: '/pages/starter',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-profile',
                label: 'Profile',
                url: '/pages/profile',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-activity',
                label: 'Activity',
                url: '/pages/activity',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-invoice',
                label: 'Invoice',
                url: '/pages/invoice',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-pricing',
                label: 'Pricing',
                url: '/pages/pricing',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-maintenance',
                label: 'Maintenance',
                url: '/maintenance',
                target: '_blank',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-error-404',
                label: 'Error - 404',
                url: '/error-404',
                parentKey: 'extra-pages',
            },
            {
                key: 'page-error-500',
                label: 'Error - 500',
                url: '/error-500',
                parentKey: 'extra-pages',
            },
        ],
    },
    {
        key: 'components',
        icon: 'package',
        label: 'Components',
        isTitle: true,
        children: [
            {
                key: 'base-ui',
                label: 'UI Elements',
                isTitle: false,
                icon: 'package',
                url: '/components/ui-elements',
                parentKey: 'components',
            },
            {
                key: 'icons',
                label: 'Icons',
                isTitle: false,
                icon: 'cpu',
                parentKey: 'components',
                children: [
                    {
                        key: 'icon-unicons',
                        label: 'Unicons',
                        url: '/icons/unicons',
                        parentKey: 'icons',
                    },
                    {
                        key: 'icon-feather',
                        label: 'Feather',
                        url: '/icons/feather',
                        parentKey: 'icons',
                    },
                    {
                        key: 'icon-bootstrap',
                        label: 'Bootstrap',
                        url: '/icons/bootstrap',
                        parentKey: 'icons',
                    },
                ],
            },
            {
                key: 'charts',
                label: 'Charts',
                isTitle: false,
                icon: 'bar-chart-2',
                url: '/components/charts',
                parentKey: 'components',
            },
            {
                key: 'forms',
                label: 'Forms',
                isTitle: false,
                icon: 'bookmark',
                parentKey: 'components',
                children: [
                    {
                        key: 'form-basic',
                        label: 'Basic Elements',
                        url: '/forms/basic',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-contact',
                        label: 'Añadir Contacto',
                        url: '/forms/contact',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-advanced',
                        label: 'Advanced',
                        url: '/forms/advanced',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-validation',
                        label: 'Validation',
                        url: '/forms/validation',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-wizard',
                        label: 'Wizard',
                        url: '/forms/wizard',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-editors',
                        label: 'Editors',
                        url: '/forms/editors',
                        parentKey: 'forms',
                    },
                    {
                        key: 'form-upload',
                        label: 'File Uploads',
                        url: '/forms/upload',
                        parentKey: 'forms',
                    },
                ],
            },
            {
                key: 'tables',
                label: 'Tables',
                isTitle: false,
                icon: 'grid',
                parentKey: 'components',
                children: [
                    {
                        key: 'table-basic',
                        label: 'Basic Tables',
                        url: '/tables/basic',
                        parentKey: 'tables',
                    },
                    {
                        key: 'table-advanced',
                        label: 'Advanced Tables',
                        url: '/tables/advanced',
                        parentKey: 'tables',
                    },
                ],
            },
        ],
    },
    {
        key: 'widgets',
        label: 'Widgets',
        isTitle: false,
        icon: 'gift',
        url: '/components/widgets',
    },
];

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };

export const navigations0 = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: 'PAGES',
        type: 'label',
    },
    {
        name: 'Session/Auth',
        icon: 'security',
        children: [
            {
                name: 'Sign in',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Sign up',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Forgot Password',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
    {
        label: 'Components',
        type: 'label',
    },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    },
    {
        name: 'Charts',
        icon: 'trending_up',

        children: [
            {
                name: 'Echarts',
                path: '/charts/echarts',
                iconText: 'E',
            },
        ],
    },
    {
        name: 'Documentation',
        icon: 'launch',
        type: 'extLink',
        path: 'http://demos.ui-lib.com/matx-react-doc/',
    },
]
export const navigations = [
    {
        name: 'S???n ph???m',
        icon: 'security',
        children: [
            {
                name: 'T???t c??? s???n ph???m',
                iconText: 'SI',
                path: '/dashboard/default',
            },
            {
                name: 'Th??m m???i s???n ph???m',
                iconText: 'SU',
                path: '/material/autocomplete',
            },
            {
                name: 'Ch???nh s???a s???n ph???m',
                iconText: 'FP',
                path: '/material/buttons',
            },
            {
                name: 'Danh m???c',
                iconText: '404',
                path: '/material/checkbox',
            },
        ],
    },
    {
        name: '????n ?????t h??ng',
        icon: 'favorite',
        children: [
            {
                name: 'Ch??a ?????t',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: '??ang ?????t',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: '???? ?????t',
                path: '/material/checkbox',
                iconText: 'C',
            },
        ],
    },
    {
        name: 'Ph???n h???i',
        icon: 'trending_up',

        children: [
            {
                name: 'T???t',
                path: '/charts/echarts',
                iconText: 'E',
            },
            {
                name: 'X???u',
                path: '/material/checkbox',
                iconText: 'C',
            },
        ],
    },
]

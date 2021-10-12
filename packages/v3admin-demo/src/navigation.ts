export default (): Array<object> => [
  {
    icon: 'mdi-view-dashboard',
    text: 'Dashboard',
    link: '/dashboard',
  },
  {
    text: 'Usermanagement',
    children: [
      {
        icon: 'mdi-view-dashboard',
        text: 'Users',
        link: '/users',
      },
    ],
  },
]


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'planets',
        component: () => import('pages/Planets.vue'),
        meta: {
          title: 'Planets'
        }
      },
      { path: 'people',
        component: () => import('pages/People.vue'),
        meta: {
          title: 'People'
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'people',
        component: () => import('pages/People.vue'),
        meta: {
          title: 'People'
        }
      },
      { path: 'films',
        component: () => import('pages/Films.vue'),
        meta: {
          title: 'Films'
        }
      },
      { path: 'planets',
        component: () => import('pages/Planets.vue'),
        meta: {
          title: 'Planets'
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

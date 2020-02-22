<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          {{ $route.meta.title }}
        </q-toolbar-title>

        <div>{{ appTitle }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">{{ appTitle }}</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      appTitle: 'Star Wars',
      essentialLinks: [
        {
          title: 'People',
          icon: 'face',
          link: 'http://localhost:8080/#/people'
        },
        {
          title: 'Planets',
          icon: 'public',
          link: 'http://localhost:8080/#/planets'
        },
        {
          title: 'Planets',
          icon: 'public',
          link: 'http://localhost:8080/#/planets'
        },
        
      ]
    }
  }
}
</script>

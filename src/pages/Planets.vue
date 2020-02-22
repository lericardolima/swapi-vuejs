<template>
  <q-page padding v-if="planets!=null">
    <q-card dark bordered class="q-mt-sm" v-for="planet in planets" v-bind:key="planet.name">
      <q-card-section>
        <q-expansion-item expand-separator v-bind:label="planet.name">
          <q-card-section>
            <p>Climate: {{ planet.climate }}</p>
            <p>Diameter: {{ planet.diameter }}</p>
            <p>Gravity: {{ planet.gravity }}</p>
            <p>Orbital period: {{ planet.orbital_period }}</p>
            <p>Population: {{ planet.population }}</p>
            <p>Rotation period: {{ planet.rotation_period }}</p>
            <p>Surface water: {{ planet.surface_water }}</p>
            <p>Terrain: {{ planet.terrain }}</p>
          </q-card-section>
        </q-expansion-item>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      planets: null
    };
  },
  methods: {
    getPlanets() {
      this.$axios.get('/planets')
        .then(response => {
          this.planets = response.data.results;
        });
    }
  },
  beforeMount() {
    this.getPlanets();
  }
};
</script>

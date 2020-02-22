<template>
  <q-page padding v-if="people!=null">
    <q-card dark bordered class="q-mt-sm" v-for="person in people" v-bind:key="person.name">
      <q-card-section>
        <q-expansion-item expand-separator v-bind:label="person.name">
          <q-card-section>
            <p>Birth: {{ person.birth_year }}</p>
            <p>Eye color: {{ person.eye_color }}</p>
            <p>Gender: {{ person.gender }}</p>
            <p>Hair color: {{ person.hair_color }}</p>
            <p>Height: {{ person.height }}</p>
            <p>Mass: {{ person.mass }}</p>
            <p>Skin color: {{ person.skin_color }}</p>
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
      people: null
    };
  },
  methods: {
    getPeople() {
      this.$axios.get('/people')
        .then(response => {
          this.people = response.data.results;
        });
    }
  },
  beforeMount() {
    this.getPeople();
  }
};
</script>

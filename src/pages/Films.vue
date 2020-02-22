<template>
  <q-page padding v-if="films!=null">
    <q-card dark bordered class="q-mt-sm" v-for="film in films" v-bind:key="film.episode_id">
      <q-card-section>
        <q-expansion-item expand-separator v-bind:label="film.title">
          <q-card-section>
            <p>Episode: {{ film.episode_id }}</p>
            <p>Director: {{ film.director }}</p>
            <p>Opening crawl: {{ film.opening_crawl }}</p>
            <p>Producer: {{ film.producer }}</p>
            <p>Release date: {{ film.release_date }}</p>
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
      films: null
    };
  },
  methods: {
    getFilms() {
      this.$axios.get('/films')
        .then(response => {
          this.films = response.data.results
              .sort((a,b) => a.episode_id - b.episode_id);
        });
    }
  },
  beforeMount() {
    this.getFilms();
  }
};
</script>

<template>
  <div class="container">
    <h1>Cloudflare Pages + Nuxt 3 Demo</h1>
    <p>
      This is a basic demo to show how to create a nuxt 3 site, using pages and
      workers
    </p>
    <p>
      But there's a lot of work to do because I'm still having problem actually
      getting this to work.
    </p>
    <hr />
    <form @submit.prevent>
      <div class="mb-3">
        <TextInput
          v-model="name"
          label="Enter your name"
          input-id="name"
        ></TextInput>
      </div>
      <div class="mb-3">
        <input type="submit" class="form-control" @click="submit" />
      </div>
    </form>
    <div v-if="responseData">
      <h3>Response type: {{ responseType }}</h3>
      <pre wrap>{{ responseData }}</pre>
    </div>
  </div>
</template>

<script>
import { useFetch } from 'nuxt/app'

export default {
  name: 'IndexPage',
  data() {
    return {
      name: 'Placeholder',
      responseData: null,
      responseType: null,
    }
  },
  methods: {
    submit() {
      this.responseType = null
      this.responseData = null
      try {
        const response = useFetch(`api/contact`, {
          headers: {
            'Content-Type': `application/json`,
          },
          method: `POST`,
          body: {
            name: this.name,
          },
        })
        this.responseType = `Success`
        this.responseData = response.data
      } catch (error) {
        this.responseType = `Error`
        this.responseData = error.response.data
      }
    },
  },
}
</script>
<style>
@import 'bootstrap';
</style>

<template>
  <div class="home">
    <Header/>
    <div class="page-title">
      <h1>Kelime ekle</h1>
      <hr />
    </div>
    <div class="add-word-container">
      <div class="add-word">
        <form>
          <input type="text" class="input" placeholder="Kelimeyi girin." v-model="english">
          <input type="text" class="input" placeholder="Kelimenin anlamını girin." v-model="turkish">
          <button class="button" @click="addPost()">Ekle</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios'
export default {
  data(){
    return{
      url: this.$store.state.url,
      english: '',
      turkish: ''
    }
  },
  components: {
    Header
  },
  methods: {
    addPost(){
      axios.post(this.url+"add", {
        english: this.english, turkish: this.turkish
      })
    }
  }
}
</script>
<style lang="less">
.add-word-container{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-word{
  width: 600px;
  height: 80%;
  .input{
    width: 100%;
    height: 50px;
    padding-left: 12px;
    outline: none;
    background: none;
    border: none;
    border-bottom: 2px solid black;
  }
  form > *{
    margin: 6px 0;
  }
}

</style>
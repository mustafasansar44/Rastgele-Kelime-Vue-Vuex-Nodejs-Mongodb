<template>
  <div class="home">
    <Header />
    <div class="page-title">
      <h1>Kelimeler</h1>
      <hr />
    </div>
    <div class="all-words">
      <div class="word-group" v-for="(item, index) in getPosts" :key="index">
        <div class="words">
          <form action="/words">
            <span class="english fontColor" >{{ item.english.length > sliceNumber+3 ? item.english.slice(0, sliceNumber)+'...' : item.english }}</span>
            <span class="turkish">{{ item.english.length > sliceNumber+3 ? item.english.slice(0, sliceNumber)+'...' : item.english }}</span>
            <button @click="deletePost(item._id)">X</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      sliceNumber: 14
    };
  },
  components: {
    Header,
  },
  methods: {
    // DELETE POST
    deletePost(id){
      const url = this.getUrl + "delete/"+ id
      axios.delete(url)
      .catch((err) => {throw err})
    }
  },
  computed: {
    // GET VUEX STATE URL
    getUrl(){
      return this.$store.state.url
    },
    // GET VUEX STATE ALLPOSTS
    getPosts(){
      return this.$store.state.allPosts
    }
  }
};
</script>


<style lang="less">
.all-words {
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  .word-group {
    width: 25%;
    height: 60px;
    padding: 6px;
  }
  .words {
    width: 100%;
    height: 100%;
    background: #ff4d4d;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    & .fontColor {
      color: white;
    }
    & span {
      margin: 0px 4px;
    }
    & button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-30%, -50%);
      border: none;
      background: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      outline: none;
      &:hover{
        background: #e84118;
      }
    }
  }
}

@media screen {
  @media (max-width: 1500px) {
    .all-words {
      .word-group {
        width: 33.33%;
      }
    }
  }
  @media (max-width: 900px) {
    .all-words {
      .word-group {
        width: 100%;
      }
    }
  }
} 



</style>

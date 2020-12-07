<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html,
body,
body > div {
  height: 100%;
}
body {
  background-color: #ebbe9b;
  background-image: linear-gradient(315deg, #ebbe9b 0%, #e7a977 74%);
  width: 100%;
}
hr {
  width: 30%;
  height: 2px;
  background: white;
  border: none;
}
.page-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #30336b;
}
.button {
  padding: 8px;
  background: #ff4d4d;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: red;
  }
}
</style>
<script>

export default{
  data(){
    return{
      
    }
  },
  created(){
    this.$store.dispatch('getPosts')
  }
}
</script>

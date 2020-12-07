<template>
  <div class="header">
    <div class="menu">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/words">Words</router-link>
        <router-link to="/addword">Add Word</router-link>
      </nav>
    </div>
    <div class="logo">
      <h1>Rastgele Kelime Uygulaması</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
//font-family: 'Open Sans', sans-serif;
.header {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 20px;
  .menu{
    a{
      color: white;
      padding: 8px;
    }
    a:hover{
      background: red;
    }
  }
  div {
  width: 100% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
}
</style>

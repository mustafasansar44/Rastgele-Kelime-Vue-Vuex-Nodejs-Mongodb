<template>
  <div class="home">
    <Header />
    <div class="random">
      <div class="show-word">
        <div class="show">
          <span class="english">{{
            english.length > sliceNumber + 3
              ? english.slice(0, sliceNumber) + "..."
              : english
          }}</span>
          <span class="turkish">{{
            turkish.length > sliceNumber + 3
              ? turkish.slice(0, sliceNumber) + "..."
              : turkish
          }}</span>
        </div>
        <div class="button-group">
          <div class="button" @click="randomWords">Rastgele</div>
          <div class="button" @click="showAnimationAlert">Süreli geçiş</div>
          <div class="button" @click="stopShowAnimation">Süreliyi durdur</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  data() {
    return {
      english: "Kelime anlamı",
      turkish: "Buraya gelin.",
      previousRandom: -1,
      animationInterval: "",
      sliceNumber: 22,
    };
  },
  components: {
    Header,
  },
  methods: {
    randomWords() {
      const posts = this.$store.state.allPosts;
      const random = Math.floor(Math.random() * posts.length);
      if (random == this.previousRandom) {
        // EĞER BİR ÖNCEKİ ÜRETİLEN RANDOM İLE ŞUANKİ RANDOM EŞİT İSE FONK'U TEKRAR ÇAĞIRDIK. BÖYLECE TEKRAR AYNI KELİMEYİ GÖSTEREMEZ.
        this.randomWords();
      } else {
        this.previousRandom = random;
        this.english = posts[random].english;
        this.turkish = posts[random].turkish;
      }
    },
    showAnimationAlert() {
      this.$alertify.prompt(
        "Kaç saniyede bir yeni kelime grubu göstersin?",
        "Değer giriniz..",
        (evt, value) => {
          clearInterval(this.animationInterval);
          this.$alertify.success(value + " Saniyede bir olarak ayarlandı.");
          this.animationInterval = setInterval(
            () => this.randomWords(),
            value * 1000
          );
        }
      );
    },
    stopShowAnimation() {
      clearInterval(this.animationInterval);
    }
  }
};
</script>
<style lang="less">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.random {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.show-word {
  width: 800px; // 500 yap sonra
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 18px;
  .show {
    border-radius: 16px 16px 0 0;
    width: 100%;
    height: 200px;
    background: #ff4d4d;
    display: flex;
    align-items: center;
    justify-content: center;
    .english {
      opacity: 0;
      transition: 0.4s opacity ease;
    }
    span {
      margin: 0 4px;
      color: white;
    }
    &:hover .english {
      opacity: 1;
      transition: 0.4s opacity ease;
    }
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    & > div {
      margin-top: 12px;
    }
  }
}



</style>

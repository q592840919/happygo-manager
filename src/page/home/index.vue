<template>
  <div class="home">
    <div class="menu">
    </div>
    <div class="info-box">
      <div class="market">
          <market></market>
      </div>
      <div class="discount">
          <discount></discount>
      </div>
      <div class="card">
          <card></card>
      </div>
    </div>
  </div>
</template>

<script>
import card from '../../components/home/card';
import market from '../../components/home/market';
import discount from '../../components/home/discount';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    card,
    market,
    discount,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .home{
    width: 1200px;
    margin: auto;
    .menu{

    }
    .info-box{
      display: -webkit-flex; /* Safari */
      display: flex;
      div{
        flex: 1;
      }
      .market{

      }
    }
  }
</style>

<template>
  <div class="market">
    <div class="title">
      商店
    </div>
    <div class="first">
      <a>
        <span class="add-icon">+</span>
        <span class="add-word">批量添加</span>
      </a>
    </div>
    <div class="second">
      <ul>
        <li>
          <div class="picture">
            <img src="../../images/milk.png"/>
          </div>
          <div class="info">
            <div class="name">华润万家</div>
            <div class="adress">苏果路57号</div>
          </div>
        </li>
        <li>
          <div class="picture">
            <img src="../../images/milk.png"/>
          </div>
          <div class="info">
            <div class="name">华润万家</div>
            <div class="adress">苏果路57号</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'market',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .market {
    border: 1px solid #DCDCDC;
    .title{
      text-align: center;
      border-bottom: 1px solid #DCDCDC;
      padding: 10px 0;
      color: #666666;
      font-size: 18px;
    }
    .first{
      margin-top: 10px;
      display: block;
      height: 32px;
      padding-bottom: 20px;
      border-bottom: 1px solid #DCDCDC;
      a{
        width: 104px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        color: #fff;
        float: right;
        margin-right: 10px;
        border: 1px solid #009ddc;
        background: #009ddc;
        border-radius: 5px;
        .add-icon{
          font-size: 30px;
        }
        .add-word{
          font-size: 14px;
        }
        span{
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .second{
      ul{
        li{
          display: flex;
          margin: 10px 20px;
          border-bottom: 1px dashed #dcdcdc;
          align-items: center;
          font-size: 15px;
          color: #ABABAB;
          cursor: pointer;
          &:last-child{
            border-bottom: none;
          }
          &:hover{
            color: #FF9800;
          }
          .picture{
            flex: 1;
            img{
              width: 100px;
              height: 70px;
            }
          }
          .info{
            flex: 1;
          }
        }
      }
    }
  }
</style>

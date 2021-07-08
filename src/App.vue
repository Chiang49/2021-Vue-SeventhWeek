<template>
  <router-view/>
</template>

<script>
export default {
  // 跨層級傳遞
  provide () {
    return {
      // 時間格式轉換
      dateFormat (data) {
        // 將時間格式改為 YYYY-MM-DD
        const dateAndTime = new Date(data * 1000).toISOString().substr(0, 10)
        return dateAndTime
        // toISOString() 轉換時間格式為 YYYY-MM-DD
        // substr(a, b) 取要顯示的字數，參數 a 為起始位子、參數 b 為要顯示的字數
      }
    }
  }
}
</script>

<style lang="scss">
.topic {
  text-align: center;
  margin-bottom: 28px;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(122, 122, 122);
    margin-bottom: 24px;
  }
}
.switch-group{
    cursor: pointer;
    .switch{
        display: inline-block;
        width: 40px;
        height: 20px;
        background: #fff;
        padding: 4px;
        border: 1px solid #aaa;
        border-radius: 25px;
        margin-right: 8px;
        position: relative;
        &-circle{
            width: 13px;
            height: 13px;
            background: #aaa;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            transform: translate(0,-50%);
        }
    }
    .open{
        background: #0d6efd;
        border: #0d6efd;
        .switch-circle{
            animation-name: open;
            animation-duration: 0.6s;
            animation-fill-mode: forwards;
        }
    }
    .close{
        background: #fff;
        border: 1px solid #aaa;
        .switch-circle{
            animation-name: close;
            animation-duration: 0.6s;
            animation-fill-mode: forwards;
        }
    }
    @keyframes open{
        0%{
            left: 0;
            background: #fff;
        }
        100%{
            left: 60%;
            background: #fff;
        }
    }
    @keyframes close{
        0%{
            left: 60%;
            background: #aaa;
        }
        100%{
            left: 6%;
            background: #aaa;
        }
    }
}
.noProduct {
    text-align: center;
    border-bottom: none;
    td {
      font-style: italic;
      color: #aaa;
      padding: 20px;
    }
  }
</style>

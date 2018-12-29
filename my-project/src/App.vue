<template>
  <div id="app">
   <el-container>
  <el-aside width="200px">
    <Nav-vue></Nav-vue>
  </el-aside>
  <el-container>
    <el-header>
      <Index></Index>
   </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
  </div>
</template>

<script>
import NavVue from  "./components/nvationF"
import indexvue from "./components/index"
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    "Nav-vue":NavVue,
    "Index":indexvue
  }
}
</script>

<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

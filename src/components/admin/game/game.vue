<template>
  <div class="game">
    <div class="edit_button">
      <el-input v-model="search" placeholder="请输入内容" ></el-input>
      <el-button type="primary" icon="el-icon-search" @click="getGameList">搜索</el-button>
      <el-button type="primary" class="right" @click="toAddGame()">新增游戏</el-button>
    </div>
    <el-table
        ref="filterTable"
        :data="gameList"
        border
        highlight-current-row
        style="width: 100%">

      <el-table-column
          type="index"
          width="50"
          align="center">
      </el-table-column>

      <el-table-column
          prop="gameName"
          sortable
          show-overflow-tooltip
          label="游戏名">
      </el-table-column>

      <el-table-column
          prop="smallCover"
          sortable
          label="图片"
          width="210px">
        <template slot-scope="scope">
          <img :src="scope.row.smallCover" alt="" style="width: 184px;height: 69px">
        </template>
      </el-table-column>

      <el-table-column
          prop="originalPrice"
          sortable
          label="发布价"
          >
      </el-table-column>

      <el-table-column
          prop="discount"
          sortable
          label="折扣"
          >
      </el-table-column>


      <el-table-column
          prop="currentPrice"
          sortable
          label="现价"
          >
      </el-table-column>


      <el-table-column
          prop="publicDate"
          label="发布日期"
          sortable
          width="180"
          column-key="date"
      >
      </el-table-column>


      <el-table-column
          prop="classify"
          label="类型"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.class === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.classify}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="middle"
              @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
              size="middle"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>


    </el-table>

    <div class="pagination">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :hide-on-single-page = false
          :current-page = this.current
          :page-sizes="[5, 8, 10, 20]"
          :page-size= this.size
          layout="total, sizes, prev, pager, next"
          :total= this.total>
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search:'',
      gameList: [],
      total: 0,
      size:8,
      current: 1,
      pages: 0,
    }
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      this.$router.push({
        name:'EditGame',
        params: row
      })
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      this.size = val
      this.getGameList()
    },
    handleCurrentChange(val) {
      this.current = val
      this.getGameList()
    },
    toAddGame(){
      this.$router.push({
        name:'AddGame',
      })
    },
    getGameList(){
      this.axios.get('/game/getGameList',{
        params:{
          gameName:this.search,
          curPageNum:this.current,
          pageSize:this.size,
        }
      }).then((res)=>{
        this.gameList = res.data.records;
        this.total = res.data.total
        this.size = res.data.size
        this.current = res.data.current
        this.pages = res.data.pages
      })
    },
  },
  mounted() {
    this.getGameList();
  }
}
</script>

<style lang="scss">

  .el-table{
    text-align: center;
    .cell{
      text-align: center;
    }
  }

  .edit_button{
    background-color: white;
    line-height: 64px;
    padding-right: 15px;
    .el-button{
      margin: 15px 0 10px 20px;
    }
    .el-input{
      width: 200px;
      margin-left: 15px;
    }
    .right{
      float: right;
    }
  }

  .pagination{
    height: 67px;
    background-color: white;
    padding-top: 17px;
    box-sizing: border-box;
    .el-pagination{
      text-align: center;
    }
  }


</style>
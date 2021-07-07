<template>
  <div class="game">
    <div class="edit_button">
      <el-input v-model="search" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" class="right">新增游戏</el-button>
    </div>
    <el-table
        ref="filterTable"
        :data="tableData"
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
          prop="img"
          sortable
          label="图片"
          width="210px">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="width: 184px;height: 69px">
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
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
      >
      </el-table-column>


      <el-table-column
          prop="class"
          label="类型"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.class === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.class}}</el-tag>
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

    <div class="edit_button">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      search:'',
      tableData: [
        {
          gameName: '糖豆人：终极挑战赛终极挑战赛终极挑战赛终极挑战赛',
          date: '2016-05-02',
          originalPrice: '61',
          discount: 0.9,
          currentPrice: 355,
          class: '公司',
          img:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
        },
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '60',
          discount: 0.5,
          currentPrice: 30,
          class: "热门",
          img:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
        },
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '60',
          discount: 0.5,
          currentPrice: 30,
          class: '公司',
          img:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
        },
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '60',
          discount: 0.5,
          currentPrice: 30,
          class: '公司',
          img:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
        },
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '60',
          discount: 0.5,
          currentPrice: 30,
          class: '公司',
          img:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
        },
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '60',
          discount: 0.5,
          currentPrice: 30,
          class: '公司',
          img:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
        },


      ]
    }
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      console.log(index,row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    currentPage4(){

    }
  }
}
</script>

<style lang="scss">

  .game{
    box-shadow: 0 2px 12px 0 #cbcaca;
  }

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

</style>
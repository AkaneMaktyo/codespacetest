<template>
  <div>
    <div class="edit_button">
      <el-button type="primary" @click="resetDateFilter">新增游戏</el-button>
    </div>
    <el-table
        ref="filterTable"
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="gameName"
          label="游戏名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="originalPrice"
          label="发布价"
          >
      </el-table-column>

      <el-table-column
          prop="discount"
          label="折扣"
          >
      </el-table-column>

      <el-table-column
          prop="currentPrice"
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
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '61',
          discount: 0.9,
          currentPrice: 355,
          tag: '公司',
        },
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '60',
          discount: 0.5,
          currentPrice: 30,
          tag: '公司'
        },
        {
          gameName: '糖豆人：终极挑战赛',
          date: '2016-05-02',
          originalPrice: '60',
          discount: 0.5,
          currentPrice: 30,
          tag: '公司'
        },
      ]
    }
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
  }
}
</script>

<style lang="scss">

  .el-table{
    padding: 0 20px;
  }

  .edit_button{
    background-color: white;
    line-height: 50px;
    .el-button{
      margin: 15px 0 0 15px;
    }
  }

</style>
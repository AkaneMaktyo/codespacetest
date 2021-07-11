<template>
  <div class="editGame" router>
    <el-form ref="form" :model="game" :rules="rules" label-width="80px">

      <el-row>
        <el-col :span="8">
          <el-form-item label="游戏名" prop="name">
            <el-input v-model="game.gameName" class="gameName" maxlength="30" show-word-limit></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item in label="分类">
            <el-select v-model="game.class" placeholder="请选择游戏分类">
              <el-option label="动作" value="动作"></el-option>
              <el-option label="休闲" value="休闲"></el-option>
              <el-option label="冒险" value="冒险"></el-option>
              <el-option label="解密" value="解密"></el-option>
              <el-option label="第一人称射击" value="第一人称射击"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>

        <el-col  :span="3">
          <el-form-item label="发布价" prop="price">
            <el-input  v-model="game.originalPrice" class="price"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="折扣">
            <el-input-number v-model="game.discount" :step="0.05" @change="handleChange" :min="0" :max="1" class="price"></el-input-number>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item label="现价">
            <el-input v-model="game.currentPrice.toFixed(2)"  :disabled="true" class="price"></el-input>
          </el-form-item>
        </el-col>

      </el-row>

      <el-form-item label="游戏图片">
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item label="视频上传">
        <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>


      <el-form-item label="简介">
        <el-input v-model="game.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "editGame",
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      game: {
        gameName: '糖豆人：终极挑战赛终极挑战赛终极挑战赛终极挑战赛',
        date: '2016-05-02',
        originalPrice: '61',
        discount: 0.9,
        currentPrice: 355,
        class: '冒险',
        img: '/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
        description: '',
        video:'',
      },
      rules: {
        name:{
          required: true, message: '请输入游戏名', trigger: 'blur'
        },
        price: [
          { required: true, message: '请输入发布价', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleChange(value) {
      this.game.currentPrice = this.game.originalPrice * value
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    submitUpload() {
      this.$refs.upload.submit();
    },
    handlePreview(file) {
      console.log(file);
    }


  }
}
</script>

<style lang="scss" scoped>
.editGame {
  background-color: white;
  padding: 40px 20px;
}

</style>
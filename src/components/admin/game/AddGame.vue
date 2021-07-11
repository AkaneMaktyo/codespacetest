<template>
  <div class="addGame" router>
    <el-form ref="form" :model="game" :rules="rules" label-width="80px">

      <el-row>
        <el-col :span="8">
          <el-form-item label="游戏名" prop="gameName">
            <el-input v-model="game.gameName" placeholder="请输入游戏" class="gameName" maxlength="50" show-word-limit></el-input>
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
              <el-option label="角色扮演" value="角色扮演"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="游戏标签" style="width: 762px">
        <el-input v-model="game.tag" maxlength="30" placeholder="多个标签请以#分隔标签"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="7">
          <el-form-item label="发行商" >
            <el-input v-model="game.fxs" placeholder="请输入发行商名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="开发商">
            <el-input v-model="game.kfs" placeholder="请输入开发商名称"></el-input>
          </el-form-item>
        </el-col>

      </el-row>

      <el-row>
        <el-col :span="3">
          <el-form-item label="发布价" prop="originalPrice">
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

      <el-form-item label="发布日期">
        <el-date-picker
            v-model="game.publicDate"
            type="datetime"
            placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>

      <el-row>
        <el-col :span="5">
          <el-form-item label="封面(大)">
            <el-upload
                class="avatar-uploader"
                :action="url+uploadUrl"
                :accept=accept
                :show-file-list="false"
                :data=Cover1
                :on-success="coverSuccess"
                :before-upload="beforeUpload">
              <img v-if="largeCoverFile" :src="largeCoverFile" class="avatar">
              <i v-if="!largeCoverFile" class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col  :span="5">
          <el-form-item label="封面(中)">
            <el-upload
                class="avatar-uploader"
                :action="url+uploadUrl"
                :show-file-list="false"
                :data=Cover2
                :on-success="coverSuccess"
                :before-upload="beforeUpload">
              <img v-if="middleCoverFile" :src="middleCoverFile" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col  :span="5">
          <el-form-item label="封面(小)">
            <el-upload
                class="avatar-uploader"
                :action="url+uploadUrl"
                :show-file-list="false"
                :data=Cover3
                :on-success="coverSuccess"
                :before-upload="beforeUpload">
              <img v-if="smallCoverFile" :src="smallCoverFile" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>


      <el-form-item label="游戏图片">
        <el-upload
            :action="url+uploadUrl"
            list-type="picture-card"
            :on-success="gameImageSuccess"
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
            action="/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>


      <el-form-item label="简介" >
        <el-input v-model="game.description" autosize type="textarea"></el-input>
      </el-form-item>

      <!--富文本编辑器-->
      <el-form-item label="关于游戏">
        <quill-editor id="editor" ref="editor">
        </quill-editor>
      </el-form-item>

      <el-form-item style="margin-top: 100px">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {addQuillTitle} from "@/assets/js/quill-title";
import axios from "axios";
import {Base64} from "js-base64";



export default {
  name: "AddGame",
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      url:this.axios.defaults.baseURL,
      uploadUrl:'/imageUpload',
      accept:".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF",
      Cover1:{'name':'largeCover'},
      Cover2:{'name':'middleCover'},
      Cover3:{'name':'smallCover'},

      largeCoverFile: '',
      middleCoverFile: '',
      smallCoverFile: '',
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      game: {
        gameName: '',
        date: '',
        originalPrice: 0,
        discount: 1,
        currentPrice: 0,
        classify: '',
        tags:'',
        fxs:'',
        kfs:'',
        largeCover: '',
        middleCover: '',
        smallCover: '',
        gameImage:'',
        video:'',
        publicDate: '',
        introduction: '',
        about:'',
      },
      rules: {
        gameName:[
          { required: true, message: '请输入游戏名', trigger: 'blur' },
        ],
        originalPrice: [
          { required: true, message: '请输入发布价', trigger: 'blur' },
          { type:"number" ,min: 0, max: 999, message: '游戏价格要在0到999元', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      this.game.about = this.$refs.editor._content
      axios.post('/game/addGame',this.game).then((res)=>{
        console.log(res)
      })
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
    },
    //封面上传成功
    coverSuccess(res,file) {

      const name = res.data.name
      const downloadUrl = res.data.downloadUrl
      if (name == "largeCover"){
        this.largeCoverFile = URL.createObjectURL(file.raw);
        this.game.largeCover = downloadUrl;
      }
      else if (name=="middleCover"){
        this.middleCoverFile = URL.createObjectURL(file.raw);
        this.game.middleCover = downloadUrl;
      }
      else {
        this.smallCoverFile = URL.createObjectURL(file.raw);
        this.game.smallCover = downloadUrl
      }
    },

    //游戏图片上传成功
    gameImageSuccess(res){

      if (this.game.gameImage == ""){
        this.game.gameImage += res.data.downloadUrl
      } else {
        this.game.gameImage += "#"+res.data.downloadUrl
      }
    },

    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

  },
  mounted() {
    addQuillTitle();
  }
}
</script>

<style lang="scss">
  .addGame {
    background-color: white;
    padding: 40px 20px;
  }
  .quill-editor{
    height: 300px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 146px;
    height: 146px;
    line-height: 146px;
    text-align: center;
  }
  .avatar {
    width: 146px;
    height: 146px;
    display: block;
  }
</style>
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
            <el-select v-model="game.classify" placeholder="请选择游戏分类">
              <el-option :label="item.classifyName" :value="item.classifyName" v-for="(item,index) in classify"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="游戏标签" style="width: 762px">
        <el-select
            v-model="game.tags"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签">
          <el-option
              v-for="item in options"
              :value="item">
          </el-option>
        </el-select>
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
            <el-input controls=false  v-model.number="game.originalPrice" class="price"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="折扣">
            <el-input-number v-model="game.discount" :step="0.05" :min="0" :max="1" class="price"></el-input-number>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item label="现价">
            <el-input v-model="game.originalPrice*game.discount"  :disabled="true" class="price"></el-input>
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
              <img v-if="game.largeCover" :src="game.largeCover" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
              <img v-if="game.middleCover" :src="game.middleCover" class="avatar">
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
              <img v-if="game.smallCover" :src="game.smallCover" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>


      <el-form-item label="游戏图片">
        <el-upload
            :action="url+uploadUrl"
            list-type="picture-card"
            :file-list="fileList"
            :on-success="gameImageSuccess"
            :multiple = true
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
            :file-list="fileListVideo"
            :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>


      <el-form-item label="简介" >
        <el-input v-model="game.introduction" autosize type="textarea"></el-input>
      </el-form-item>

      <!--富文本编辑器-->
      <el-form-item label="关于游戏">
        <quill-editor v-model="game.about" id="editor" ref="editor">
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
      classify: [],
      largeCoverFile: '',
      middleCoverFile: '',
      smallCoverFile: '',
      imageArray:[],
      fileList: [],     //用于游戏图片回显
      fileListVideo:[], //视频文件
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
          { type:"number" , max:999 ,min: 0, message: '游戏价格要在0到999元', trigger: 'blur' },
        ],
      },
      options: [],
    }
  },
  methods: {

    //表单提交
    onSubmit() {
      this.game.about = this.$refs.editor._content
      //处理tags，将array转成#分隔的字符串
      this.game.tags = this.game.tags.toString();
      axios.post('/game/savaOrUpdate',this.game).then((res)=>{
        this.$message.success(res.data.message)
        this.$router.push({name:'GameList'})
      })
    },
    //删除游戏图片
    handleRemove(file) {
      //将回显的fileList中对应的图片删除
      for (let i = 0; i < this.fileList.length; i++) {
        if ( this.fileList[i].uid === file.uid ){
          this.fileList.splice(i,1)
        }
      }
      this.game.gameImage = ""
      //重新生成要传到后端图片列表地址
      for (let i = 0; i < this.fileList.length; i++) {
        if (this.game.gameImage == ""){
          this.game.gameImage += this.fileList[i].url
        } else {
          this.game.gameImage += "#" + this.fileList[i].url
        }
      }

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
      if (name === "largeCover"){
        this.largeCoverFile = URL.createObjectURL(file.raw);
        this.game.largeCover = downloadUrl;
      }
      else if (name === "middleCover"){
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

      if (this.game.gameImage === ""){
        this.game.gameImage += res.data.downloadUrl
      } else {
        this.game.gameImage += "#"+res.data.downloadUrl
      }
    },

    //上传前判断
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

    //获取全部分类
    getClassify(){
      this.axios.get('/getClassifyList').then((res)=>{
        this.classify = res.data;
      })
    },
    //获取全部标签
    getTags(){
      this.axios.get('tags/getTags').then((res)=>{
        this.options = res.data.split(",");
      })
    }
  },
  mounted() {
    addQuillTitle();
    this.getClassify();
    this.getTags();
  }
}
</script>

<style lang="scss">

.addGame {
  background-color: white;
  padding: 40px 20px;

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


}

</style>
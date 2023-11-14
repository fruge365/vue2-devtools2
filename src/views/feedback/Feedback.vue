<template>
  <!-- 留言反馈 -->
  <div class="feedback">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="说点什么" prop="desc">
        <el-input
          type="textarea"
          v-model="form.desc"
          :autosize="{ minRows: 5, maxRows: 10 }"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="安慰一下"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <span>提交成功！（作者太懒了，并没有开发接口）</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">就 这</el-button> -->
        <el-button type="primary" @click="dialogVisible = false"
          >就 这</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        desc: "",
      },
      dialogVisible: false,
      rules: {
        name: [
          { required: true, message: "请留下联系方式", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        desc: [
          { required: true, message: "请说点什么", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.dialogVisible = true;
    },
    handleClose() {},
  },
};
</script>
<style lang="scss" scoped>
.feedback {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 500px;
  }
}
</style>

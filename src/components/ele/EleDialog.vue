<template>
  <div>
    <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

    <el-dialog title="外层 Dialog" :visible.sync="outerVisible" width="90%">
      <el-dialog
        width="80%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body>
        <tables></tables>
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <comment></comment>
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import comment from '@/components/comment/comment'
  import tables from '@/components/bootstrap/tables'
  export default {
    components:{
      comment,
      tables
    },
    data () {
      return {
        outerVisible: false,
        innerVisible: false
      }
    }
  }
</script>

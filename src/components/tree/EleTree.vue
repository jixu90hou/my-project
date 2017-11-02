<template>
  <div style="padding: 30px;">
    <p>formatter column with formatter</p>
    <el-table :data="menus" border max-height="400">
      <el-table-column
        prop="id"
        label="id"
        type="selection"
        fixed></el-table-column>
      <el-table-tree-column
        fixed
        :expand-all="!!1"
        parentKey="parentId"
        :remote="remote"
        childNumKey="childNum"
        file-icon="icon icon-file"
        folder-icon="icon icon-folder"
        prop="description"
        label="title"
        width="320"
        class-name="123"
        header-align="center"
        :formatter="formatter">
      </el-table-tree-column>
      <el-table-column
        prop="description"
        label="Description"
        :show-overflow-tooltip="true"
        width="180"
      ></el-table-column>
      <el-table-column label="Operation">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">+
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding-top:20px;">
      <span><b-btn>Reset</b-btn></span>
      <span><b-btn variant="primary" onclick="save">Save</b-btn></span>
    </div>
  </div>
</template>
<script>
  import ElTableTreeColumn from 'element-tree-grid/src/index.vue'

  export default {
    components: {
      ElTableTreeColumn
    },
    created () {
      var _this = this
      _this.$http.get('/api/getTrees').then((res) => {
        console.log('res:', res.data.data)
        _this.menus = res.data.data
      })
    },
    data () {
      return {

        menus: []
      }
    },
    methods: {
      remote (row, callback) {
        console.log('row:', row.children)
        this.$http.get('/api/getTrees').then((res) => {
            callback(row.children)
        })
      },
      formatter (row, column) {
        return ' ---  ' + row.label
      },
      handleEdit () {
      },
      handleDelete () {
      },
      save () {
      },
      selectQuestion () {
        console.log('select question')
      }
    }
  }
</script>

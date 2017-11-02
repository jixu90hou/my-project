<template>
  <div id="app" style="padding: 30px;">
    <p>formatter column with formatter</p>
    <el-table :data="model.menus" border max-height="400">
      <el-table-column
        prop="id"
        label="id"
        type="selection"
        fixed></el-table-column>
      <el-table-tree-column
        fixed
        :expand-all="!!1"
        :remote="remote"
        file-icon="icon icon-file"
        folder-icon="icon icon-folder"
        prop="label"
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
    </el-table>
  </div>
</template>
<style>
  body > div > p {
    background-color: #f5f5f5;
    border-left: 4px solid #ccc;
    line-height: 40px;
    padding-left: 10px;
  }
</style>
<!-- <link rel="stylesheet" href="./index.css">
 <link rel="stylesheet" type="text/css" href="http:////at.alicdn.com/t/font_a9e0jr8sy2hme7b9.css">
 &lt;!&ndash; 引入组件库 &ndash;&gt;
 <script src="https://unpkg.com/vue/dist/vue.js"></script>
 <script src="https://unpkg.com/element-ui@2.0.0/lib/index.js"></script>
 <script type="text/javascript" src="../dist/tree-table.js"></script>
 <script type="text/javascript" src="./data.js"></script>-->
<script type="text/javascript">
  import ElTableTreeItem from 'element-tree-grid'
  import ElTableTreeColumn from 'element-tree-grid/src/index.vue'

  export default {
    components: {
      ElTableTreeItem,
      ElTableTreeColumn
    },
    data () {
      return {
        model: {
          menus: trees
        }
      }
    },
    methods: {
      remote (row, callback) {
        setTimeout(function () {
          callback(row.children)
        }, 500)
      },
      formatter (row, column) {
        return ' ---  ' + row.label
      }
    }
  }
  var trees = [{
    'id': 1,
    'label': 'System',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 3,
    'description': 'System Manager',
    'children': [{
      'id': 2,
      'label': 'base',
      'parent_id': 1,
      'url': null,
      'depth': 1,
      'child_num': 5,
      'description': 'Base Manager',
      'expanded': true,
      'children': [{
        'id': 3,
        'label': 'Menus',
        'parent_id': 2,
        'url': '/menus',
        'depth': 2,
        'child_num': 0,
        'description': 'menu manager',
      }, {
        'id': 4,
        'label': 'Roles',
        'parent_id': 2,
        'url': '/roles',
        'depth': 2,
        'child_num': 0,
        'description': 'Role Manager',
      }, {
        'id': 5,
        'label': 'Users',
        'parent_id': 2,
        'url': '/users',
        'depth': 2,
        'child_num': 0,
        'description': 'User Manager',
      }]
    }]
  }, {
    'id': 6,
    'label': 'Customs',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 2,
    'description': 'Custom Manager',
    'children': [{
      'id': 7,
      'label': 'CustomList',
      'parent_id': 6,
      'url': '/customs',
      'depth': 1,
      'child_num': 0,
      'description': 'CustomList',
    }]
  }, {
    'id': 8,
    'label': 'Templates',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 1,
    'description': 'Template Manager',
    'children': [{
      'id': 9,
      'label': 'TemplateList',
      'parent_id': 8,
      'url': '/doc_templates',
      'depth': 1,
      'child_num': 0,
      'description': 'Template Manager',
    }]
  }, {
    'id': 10,
    'label': 'Bussiness',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 2,
    'description': 'Bussiness Manager',
    'expanded': true,
    'children': [{
      'id': 11,
      'label': 'BussinessList',
      'parent_id': 10,
      'url': null,
      'depth': 1,
      'child_num': 2,
      'description': 'BussinessList',
      'children': [{
        'id': 12,
        'label': 'Currencies',
        'parent_id': 11,
        'url': '/currencies',
        'depth': 2,
        'child_num': 0,
        'description': 'Currencies',
      }, {
        'id': 13,
        'label': 'Dealtypes',
        'parent_id': 11,
        'url': '/dealtypes',
        'depth': 2,
        'child_num': 0,
        'description': 'Dealtypes',
      }]
    }, {
      'id': 14,
      'label': 'Products',
      'parent_id': 10,
      'url': null,
      'depth': 1,
      'child_num': 2,
      'description': 'Products',
      'children': [{
        'id': 15,
        'label': 'ProductTypes',
        'parent_id': 14,
        'url': '/productTypes',
        'depth': 2,
        'child_num': 0,
        'description': 'ProductTypes',
      }, {
        'id': 16,
        'label': 'ProductList',
        'parent_id': 14,
        'url': '/products',
        'depth': 2,
        'child_num': 0,
        'description': 'ProductList',
      }]
    }]
  }]

</script>

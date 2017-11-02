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
      <el-table-column
        prop="test"
        label="Test"
        :show-overflow-tooltip="true"
        width="180"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
  var trees = [{
    'id': 1,
    'label': 'System',
    'parentId': null,
    'url': null,
    'depth': 0,
    'child_num': 3,
    'description': 'System Manager',
    'test': 'test0',
    'children': [{
      'id': 2,
      'label': 'base',
      'parentId': 1,
      'url': null,
      'depth': 1,
      'child_num': 5,
      'description': 'Base Manager',
      'test': 'test1',
      'expanded': true,
      'children': [{
        'id': 3,
        'label': 'Menus',
        'parentId': 2,
        'url': '/menus',
        'depth': 2,
        'child_num': 0,
        'description': 'menu manager',
      }, {
        'id': 4,
        'label': 'Roles',
        'parentId': 2,
        'url': '/roles',
        'depth': 2,
        'child_num': 0,
        'description': 'Role Manager',
      }, {
        'id': 5,
        'label': 'Users',
        'parentId': 2,
        'url': '/users',
        'depth': 2,
        'child_num': 0,
        'description': 'User Manager',
      }]
    }]
  }, {
    'id': 6,
    'label': 'Customs',
    'parentId': null,
    'url': null,
    'depth': 0,
    'child_num': 2,
    'description': 'Custom Manager',
    'children': [{
      'id': 7,
      'label': 'CustomList',
      'parentId': 6,
      'url': '/customs',
      'depth': 1,
      'child_num': 0,
      'description': 'CustomList',
    }]
  }, {
    'id': 8,
    'label': 'Templates',
    'parentId': null,
    'url': null,
    'depth': 0,
    'child_num': 1,
    'description': 'Template Manager',
    'children': [{
      'id': 9,
      'label': 'TemplateList',
      'parentId': 8,
      'url': '/doc_templates',
      'depth': 1,
      'child_num': 0,
      'description': 'Template Manager',
    }]
  }, {
    'id': 10,
    'label': 'Bussiness',
    'parentId': null,
    'url': null,
    'depth': 0,
    'child_num': 2,
    'description': 'Bussiness Manager',
    'expanded': true,
    'children': [{
      'id': 11,
      'label': 'BussinessList',
      'parentId': 10,
      'url': null,
      'depth': 1,
      'child_num': 2,
      'description': 'BussinessList',
      'children': [{
        'id': 12,
        'label': 'Currencies',
        'parentId': 11,
        'url': '/currencies',
        'depth': 2,
        'child_num': 0,
        'description': 'Currencies',
      }, {
        'id': 13,
        'label': 'Dealtypes',
        'parentId': 11,
        'url': '/dealtypes',
        'depth': 2,
        'child_num': 0,
        'description': 'Dealtypes',
      }]
    }, {
      'id': 14,
      'label': 'Products',
      'parentId': 10,
      'url': null,
      'depth': 1,
      'child_num': 2,
      'description': 'Products',
      'children': [{
        'id': 15,
        'label': 'ProductTypes',
        'parentId': 14,
        'url': '/productTypes',
        'depth': 2,
        'child_num': 0,
        'description': 'ProductTypes',
      }, {
        'id': 16,
        'label': 'ProductList',
        'parentId': 14,
        'url': '/products',
        'depth': 2,
        'child_num': 0,
        'description': 'ProductList',
      }]
    }]
  }]
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
        }, 200)
      },
      formatter (row, column) {
        return ' ---  ' + row.label
      }
    }
  }
</script>

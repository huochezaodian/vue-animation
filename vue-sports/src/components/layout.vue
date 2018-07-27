<template>
  <div class="layout">
    <Layout :style="{height: '100%'}">
      <Header>
        <div class="layout-logo">animation</div>
        <div class="layout-user">admin</div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu width="auto" @on-select="handleSelectItem">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                animation
              </template>
              <MenuItem name="animation">animation 1</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '24px'}">
          <Content :style="{padding: '24px', minHeight: '500px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'layout',
  methods: {
    handleSelectItem (name) {
      this.$router.push(name)
    }
  }
}
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: #fff;
    line-height: 30px;
    cursor: pointer;
  }
  .layout-user{
    float: right;
    color: #fff;
  }
</style>

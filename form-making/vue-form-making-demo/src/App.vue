<template>
  <div id="app">
    <fm-making-form ref="makingform" style="height: 500px;" preview generate-code generate-json>
      <template slot="action">
        <el-button type="text" icon="el-icon-upload" @click="save">保存</el-button>
      </template>
    </fm-making-form>

    <div>
      <fm-generate-form :data="jsonData" ref="generateForm"></fm-generate-form>
      <el-button type="primary" @click="handleSubmit">Submit</el-button>
    </div>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      jsonData: {}
    };
  },
  methods: {
    save() {
      this.jsonData = this.$refs.makingform.getJSON();
      console.log(this.jsonData);
    },
    handleSubmit() {
      this.$refs.generateForm.getData().then((data) => {
        alert(JSON.stringify(data));
      });
    },
  },
};
</script>

<style>
</style>

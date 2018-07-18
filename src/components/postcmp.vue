<template>
  <div>
    <h1>Post Hero Data</h1>
    <form>
      <div class="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="name" v-model="hero.name">
      </div>

      <div class="form-group col-md-6">
        <label for="inputEmail">E-Mail</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="ads@asd.com" v-model="hero.email">
      </div>

      <div class="form-group col-md-6">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="hero.address">
      </div>

      <div class="form-group col-md-6">
        <label for="inputPower">Power</label>
        <input type="text" class="form-control" id="inputPower">
      </div>

      <div class="form-group col-md-6">
        <label for="inputSex">Sex</label>
        <input type="text" class="form-control" id="inputSex" placeholder="male / female">
      </div>

      <div class="form-group col-md-6">
        <label for="inputCountry">Country</label>
        <input type="text" class="form-control" id="inputCountry">
      </div>

      <button v-on:click="post" type="submit" class="btn btn-primary">Post!</button>

    </form>
  </div>

</template>

<script>
    export default {

      data() {
        return {
          hero: {
            name:'',
            email:'',
            address:'',
            power:'',
            sex:'',
            country:''
          }
        }
      },
      methods: {
        post:function(){
          this.$http.post('http://localhost:8080/api/hero',{
            name: this.hero.name,
            email: this.hero.email,
            address: this.hero.address,
            power: this.hero.power,
            sex: this.hero.sex,
            country: this.hero.country
          }).then(function(res){
            console.log(res);
          })
        }
      },
      created() {


      }
    }
</script>

<style scoped>

</style>

<template>
  <div id="get-cmp">
    <h1>All HEROES</h1>

    <table class="table hero-table">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">E-Mail</th>
        <th scope="col">Address</th>
        <th scope="col">Power</th>
        <th scope="col">Sex</th>
        <th scope="col">Country</th>
        <th scope="col">Created</th>
        <th scope="col">edit</th>
        <th scope="col">cancel</th>
        <th scope="col">update</th>
        <th scope="col">Delte</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="hero in heroes"class="hero-row">
        <th>{{hero.hero_id}}</th>
        <td><input type="text" class="form-control" v-model="hero.name" v-if="edit">
          <span v-else>{{hero.name}}</span></td>
        <td><input type="text" class="form-control" v-model="hero.email" v-if="edit">
          <span v-else>{{hero.email}}</span></td>
        <td><input type="text" class="form-control" v-model="hero.address" v-if="edit">
          <span v-else>{{hero.address}}</span></td>
        <td><input type="text" class="form-control" v-model="hero.power" v-if="edit">
          <span v-else>{{hero.power}}</span></td>
        <td><input type="text" class="form-control" v-model="hero.sex" v-if="edit">
          <span v-else>{{hero.sex}}</span></td>
        <td><input type="text" class="form-control" v-model="hero.country" v-if="edit">
          <span v-else>{{hero.country}}</span></td>
        <td><input type="text" class="form-control" v-model="hero.created" v-if="edit">
          <span v-else>{{hero.created}}</span></td>
        <td><button type="button" class="btn btn-info" v-on:click="editCategory">Edit</button></td>
        <td><button type="button" class="btn btn-default" v-on:click="calcelEdit" v-if="edit">cancel</button></td>
        <td><button type="button" class="btn btn-primary" v-on:click="updatePut(hero.hero_id)" v-if="edit">update</button></td>
        <td><button type="button" @click="deletehero(hero.hero_id)">Delete</button></td>
      </tr>

      </tbody>
    </table>

  </div>

</template>

<script>
  export default {
    props: ['hero'],
    data() {
      return {
        edit: false,
        hero: {
          name:'',
          email:'',
          address:'',
          power:'',
          sex:'',
          country:''
        },
        editForm: {
          name:'',
          email:'',
          address:'',
          power:'',
          sex:'',
          country:''
        },
        heroes: [{
          hero_id: ''
        }]
      }
    },
    methods: {
      editCategory(){
        this.edit = true,
          this.editForm.name = this.hero.name;
          this.editForm.email = this.hero.email;
          this.editForm.address = this.hero.address;
          this.editForm.power = this.hero.power;
          this.editForm.sex = this.hero.sex;
          this.editForm.country = this.hero.country;
        },
      calcelEdit(){
        this.edit = false;
        this.editForm.name = "";
        this.editForm.email = "";
        this.editForm.address = "";
        this.editForm.power = "";
        this.editForm.sex = "";
        this.editForm.country = "";

        },
        updatePut(id){
          this.$http.put('http://localhost:8080/api/hero?hero_id='+id, {
            name:this.editForm.name,
            email:this.editForm.email,
            address:this.
          }).then((res) => {
            this.calcelEdit();
          })
          window.location.reload();
        },
      deletehero(id) {
        this.$http.delete('http://localhost:8080/api/hero?hero_id=' + id).then((res) => {
          this.heroes = res.data.splice(index, 1);
          console.log(res);
        })
        window.location.reload();
        }
      },

    created() {
      this.$http.get('http://localhost:8080/api/heroes').then((res) => {
        this.heroes = res.data
        console.log(res)
      })
    }
  }
</script>

<style scoped>
</style>

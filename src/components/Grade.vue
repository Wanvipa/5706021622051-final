<template>
  <div class="hello">
    <center><br><br><h1 class="subtitle is-1">Calculate Grade</h1><br>
   Subject : <input type="text" class="input" v-model ="name" name="nameadd">
   Credit : <span class="select">
     <select name="credit" v-model = "credit">
       <option >3</option>
       <option >2</option>
       <option >1</option>
     </select>
   </span>
    Grade : <span class="select">
     <select name = "grade"v-model = "grade">
       <option >A</option>
       <option >B+</option>
       <option >B</option>
       <option >C+</option>
       <option >C</option>
       <option >D+</option>
       <option >D</option>
     </select>
   </span>
    &nbsp;  &nbsp;<button type="button" class="button is-primary" name="addgrade" @click ="add(name, credit, grade)">AddGrade</button><br>
    <br><br>
    <table>
      <tr class="headcolor">
        <th>Subject</th>
        <th>Credit</th>
        <th>Grade</th>
      </tr>

      <tr v-for ="storeGrade in storeGrades">
        <td>{{storeGrade.name}}</td>
        <td>{{storeGrade.credit}}</td>
        <td>{{storeGrade.grade}}</td>
      </tr>

      <tr>
        <td></td>
        <td></td>
        <td>total : {{total}}</td>
      </tr>
    </table>
  </center>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      credit: '',
      grade: ''
    }
  },
  computed: {
    ...mapGetters(['storeGrades']),
    total () {
      let total = 0
      let credit = 0
      this.storeGrades.forEach(i => {
        total += i.pointGrade
        credit += parseInt(i.credit)
        console.log(total)
        console.log(credit)
      })
      if (isNaN(total / credit)) return ''
      return (total / credit).toFixed(2)
    }
  },
  methods: {
    ...mapActions(['addGrade']),
    add (name, credit, grade) {
      let pointGrade = 0
      if (grade === 'A') { pointGrade = 4 * credit }
      if (grade === 'B+') { pointGrade = 3.5 * credit }
      if (grade === 'B') { pointGrade = 3 * credit }
      if (grade === 'C+') { pointGrade = 2.5 * credit }
      if (grade === 'C') { pointGrade = 2 * credit }
      if (grade === 'D+') { pointGrade = 1.5 * credit }
      if (grade === 'D') { pointGrade = 1 * credit }
      let data = {
        name,
        credit,
        grade,
        pointGrade,
        id: Date.now()
      }
      this.addGrade(data)
      this.name = ''
      this.credit = ''
      this.grade = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    border-collapse: collapse;
    width: 50%;
}

th, td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
}
.input {
  width: 150px !important ;
}

.headcolor{
  color: pink !important;
}
tr:hover{background-color:#f5f5f5}
</style>

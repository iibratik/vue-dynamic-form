<template>
  <div class="container">
  <form class="form-content" action="#">
    <div class="form-inputs">
      <div class="inputs" v-for="(input, index) in params.inputs" :key="index.id">
        <input  :type="input.type" v-if="input.type === 'text' && input.id === 1" :placeholder="input.placeholder" :id="'input-' + input.id">
        <input class="form-control" :type="input.type"  v-if="input.type === 'email' && input.id === 5" :placeholder="input.placeholder" :id="'input-' + input.id">
        <div :type="input.type" v-if="input.type === 'radio' && input.id === 3">
          <label :for="'input-' + input.id">{{ input.placeholder }}</label>
          <div v-for="(option, optionIndex) in input.values" :key="optionIndex">
            <label :for="'option-' + optionIndex">{{ option.text }}</label>
            <input  :type="input.type" :id="'option-' + optionIndex" :name="option.name" :value="option.value">
          </div>
        </div>
        <div class="select-content" :style="{gridTemplateColumns: `repeat(${input['selector-per-block']}, 100px)` }" v-if="input.type === 'select' && input.id === 4">
        <select >
          <option v-for="(option, optionIndex) in input.values" :value="option.value" :key="optionIndex">{{ option.text }}</option>
        </select>
        <select v-for="select in input.additionSelect" :key="select.id">
          <option v-for="options in select.values" :value="options.value" :key="options.text">{{ options.text }}</option>
        </select>

        </div>
        <div v-if="input.type === 'checkbox' && input.id === 6">
          <input :type="input.type" :id="'input-' + input.id" :value="input.value">
          <label :for="'input-' + input.id">{{ input.placeholder }}</label>
        </div>
        <div v-if="input.type === 'datepicker' && input.id === 2">
          <label :for="'input-' + input.id">{{ input.placeholder }}</label>
          <VueDatePicker class="datepicker" v-model="date"></VueDatePicker>
        </div>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import myParams from '@/assets/params.json';
export default {
  data() {
    return {
      date: null,
      params:myParams,
    };
  },
  components: {
    VueDatePicker
  },
  // mounted() {
  //   axios.get('/params.json')
  //     .then(response => {
  //       this.params = response.data;
  //       console.log("work");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       console.log("nowork");
  //       this.params = myParams;
  //     });
  // }
};
</script>

<style lang="scss">

</style>

<template>
  <main class="font-body bg-off-white min-h-screen min-w-[375px]">
    <article class="flex justify-center items-center min-h-screen">
      <div
        class="bg-white w-11/12 p-4 py-12 rounded-3xl rounded-br-[100px] sm:w-[55%] sm:rounded-br-[160px] sm:p-12 sm:min-w-fit"
      >
        <date-input @calculated="(v) => ageCalculated(v)" />
        <result-output :age="age" />
      </div>
    </article>
  </main>
  <footer class="bg-off-white text-xs text-center">
    Challenge by
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      class="text-purple"
      >Frontend Mentor</a
    >. Coded by
    <a
      href="https://www.frontendmentor.io/profile/yaikarace"
      target="_blank"
      class="text-purple"
      >Yahir (Yaika Race)</a
    >.
  </footer>
</template>

<script>
  import DateInput from "./components/DateInput.vue";
  import ResultOutput from "./components/ResultOutput.vue";

  export default {
    name: "App",
    components: {
      DateInput,
      ResultOutput,
    },
    data() {
      return {
        age: {
          days: "--",
          months: "--",
          years: "--",
        },
      };
    },
    methods: {
      ageCalculated(v) {
        this.age = v;
      },
    },
  };
</script>

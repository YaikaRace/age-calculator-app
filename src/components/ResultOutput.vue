<template>
  <div class="text-5xl font-extrabold italic sm:text-8xl">
    <section>
      <h1>
        <span class="text-purple"
          ><vue3-autocounter
            :startAmount="0"
            :endAmount="age.years"
            :duration="1"
            v-if="age.years != '--'"
          /><span v-else>--</span></span
        >
        years
      </h1>
    </section>
    <section>
      <h1>
        <span class="text-purple"
          ><vue3-autocounter
            :startAmount="0"
            :endAmount="age.months"
            :duration="1"
            v-if="age.months != '--'"
          /><span v-else>--</span></span
        >
        months
      </h1>
    </section>
    <section>
      <h1>
        <span class="text-purple"
          ><vue3-autocounter
            :startAmount="0"
            :endAmount="age.days"
            :duration="1"
            v-if="age.days != '--'"
          /><span v-else>--</span></span
        >
        days
      </h1>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ResultOutput",
    props: ["age"],
  };
</script>

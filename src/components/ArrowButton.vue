<template>
  <div class="relative">
    <hr class="text-light-grey my-16" />
    <button
      type="button"
      class="bg-purple rounded-full p-4 absolute -top-6 right-1/2 translate-x-1/2 hover:bg-off-black sm:right-8 sm:-top-12"
      @click.prevent="$emit('pressed')"
    >
      <img
        :src="require('@/assets/images/icon-arrow.svg')"
        alt="Arrow icon"
        class="w-6 sm:w-16"
      />
    </button>
  </div>
</template>

<script>
  export default {
    name: "ArrowButton",
  };
</script>

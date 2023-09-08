<template>
  <div>
    <label
      :for="id"
      class="text-xs uppercase text-smokey-grey sm:text-base"
      ><slot ref="slot">Day</slot></label
    ><br />
    <input
      :id="id"
      @input="$emit('inputnum', $event.target.value)"
      type="number"
      :max="max"
      maxlength="2"
      class="border-light-grey border-[1px] rounded-md text-lg max-w-[80px] p-2 sm:max-w-[120px] sm:text-3xl sm:p-4 focus:outline-none focus:border-purple"
      :class="{ 'border-light-red': hasError }"
    />
    <p
      class="text-[0.5rem] text-light-red"
      v-if="error"
    >
      Must be a valid
      <span class="lowercase">
        <slot></slot>
      </span>
    </p>
    <p
      class="text-[0.5rem] text-light-red"
      v-if="empty"
    >
      This field is required
    </p>
  </div>
</template>

<script>
  export default {
    name: "BaseInput",
    props: {
      max: {
        type: Number,
        default: 31,
      },
      error: {
        type: Boolean,
        default: false,
      },
      invalidDate: {
        type: Boolean,
        default: false,
      },
      empty: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        id: null,
      };
    },
    created() {
      this.id = crypto.randomUUID();
    },
    computed: {
      hasError() {
        return this.error || this.invalidDate || this.empty;
      },
    },
  };
</script>

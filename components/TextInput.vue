<template>
  <div class="col">
    <label v-if="required" :for="inputId" class="form-label required">{{
      label
    }}</label>
    <label v-else :for="inputId" class="form-label">{{ label }}</label>
    <template v-if="type === `textarea`">
      <template v-if="helpText">
        <textarea
          :id="inputId"
          class="form-control"
          :aria-describedby="`${inputId}-help`"
          :value="modelValue"
          :required="required"
          @input="updateInput"
        />
        <div :id="`${inputId}-help`" class="form-text">{{ helpText }}</div>
      </template>
      <template v-else>
        <textarea
          :id="inputId"
          class="form-control"
          :value="modelValue"
          :required="required"
          @input="updateInput"
        />
      </template>
    </template>
    <template v-else>
      <template v-if="helpText">
        <input
          :id="inputId"
          :type="type"
          class="form-control"
          :aria-describedby="`${inputId}-help`"
          :value="modelValue"
          :required="required"
          @input="updateInput"
        />
        <div :id="`${inputId}-help`" class="form-text">{{ helpText }}</div>
      </template>
      <template v-else>
        <input
          :id="inputId"
          :type="type"
          class="form-control"
          :value="modelValue"
          :required="required"
          @input="updateInput"
        />
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true,
      default: ``,
    },
    type: {
      type: String,
      required: false,
      default: `text`,
    },
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    helpText: {
      type: String,
      required: false,
      default: ``,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

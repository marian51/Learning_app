import { reactive } from "vue";

export const signInSignUp = reactive({
  isOpenSignUp: false,
  setIsOpenSignUp(value) {
    this.isOpenSignUp = value;
  },
});

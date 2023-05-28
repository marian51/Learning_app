<template>
  <form class="form-left" action="">
    <h1 class="form-title">Log in</h1>
    <div class="input-wrap">
      <input class="input" type="email" placeholder="Email address" />
    </div>
    <div class="input-wrap">
      <input class="input" type="password" placeholder="Password" />
    </div>
    <button type="submit" class="submit-button">Sign in</button>
    <!-- <div class="multi-button">
            <button class="multi-button-one">Forgot email</button>
            <button class="multi-button-one">Forgot password</button>
          </div> -->
    <button
      class="submit-button register-button"
      type="button"
      v-on:click="signInSignUp.setIsOpenSignUp(true)"
    >
      Register
    </button>
  </form>
</template>

<script setup>
import { signInSignUp } from "../../stores/signInSignUp.js";
</script>

<style></style>

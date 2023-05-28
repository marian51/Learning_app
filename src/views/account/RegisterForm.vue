<template>
  <form class="form-left" action="">
    <h1 class="form-title">Register</h1>
    <div class="input-wrap">
      <input class="input" type="text" placeholder="Name" />
    </div>
    <div class="input-wrap">
      <input class="input" type="text" placeholder="Surname" />
    </div>
    <div class="input-wrap">
      <input class="input" type="email" placeholder="Email address" />
    </div>
    <div class="input-wrap">
      <input class="input" type="password" placeholder="Password" />
    </div>
    <button type="submit" class="submit-button">Sign Up</button>
    <!-- <div class="multi-button">
              <button class="multi-button-one">Forgot email</button>
              <button class="multi-button-one">Forgot password</button>
            </div> -->
    <button
      class="submit-button register-button"
      type="button"
      v-on:click="signInSignUp.setIsOpenSignUp(false)"
    >
      Log in
    </button>
  </form>
</template>

<script setup>
import { signInSignUp } from "../../stores/signInSignUp";
</script>

<style></style>

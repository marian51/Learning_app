<template>
  <div class="wrap">
    <div class="form-container">
      <LoginForm v-if="!signInSignUp.isOpenSignUp" />
      <RegisterForm v-if="signInSignUp.isOpenSignUp" />
      <!-- <form class="form-left" action="">
        <h1 class="form-title">Log in</h1>
        <div class="input-wrap">
          <input class="input" type="email" placeholder="Email address" />
        </div>
        <div class="input-wrap">
          <input class="input" type="password" placeholder="Password" />
        </div>
        <button type="submit" class="submit-button">Sign in</button>
        <button class="submit-button register-button">Register</button>
      </form> -->
    </div>
  </div>
</template>

<script setup>
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import { signInSignUp } from "../../stores/signInSignUp";
</script>

<style>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
}

.form-title {
  font-size: 2.1rem;
  margin-bottom: 2rem;
}

.form-container {
  background: url("../../assets/background-image.jpg");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0.5rem;
  width: 800px;
  height: 640px;

  display: flex;

  border-radius: 1.8rem;
  overflow: hidden;
}

.form-left {
  background: white;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 5.5rem 2rem;
  width: 350px;

  justify-content: space-around;
  align-items: center;

  background-image: linear-gradient(to right, #e3e4e7, #f8efe3);
  /* ewo-prawo gora-dol rozmycie kolor */
  box-shadow: 20px 0 20px 5px rgb(0 0 0 / 0.4);
}

.input-wrap {
  border: grey solid 0.1rem;
  opacity: 0.5;
  width: 100%;
}

input {
  box-sizing: border-box;
}

.input {
  background: transparent;
  border: none;
  width: 100%;
  height: 2.7rem;
  padding: 0 1rem;
}

.input:focus {
  border: none;
}

.submit-button {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background-color: black;
  padding: 0.9rem 0;
  cursor: pointer;
  border: none;
  border-radius: 2rem;
  width: 80%;

  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out 0s;
}

.submit-button:hover {
  transform: scale(1.15);
}

.multi-button {
  background-color: grey;
  border-radius: 1rem;
  border: grey solid 0.1rem;
  overflow: hidden;
}

.multi-button-one {
  background-color: white;
  font-size: 0.7rem;
  padding: 1rem 0.5rem;
  border: none;
  cursor: pointer;
}

.register-button {
  border-radius: 0.4rem;
  width: 40%;
  font-size: 0.7rem;
  padding: 0.6rem 0;
}
</style>

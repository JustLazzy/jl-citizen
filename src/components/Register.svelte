<script lang="ts">
  import { modals } from "../stores/modals";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let questions = [
    {
      name: "What is your name?",
      placeholder: "John Doe",
      value: "",
    },
    {
      name: "What is your favorite person?",
      placeholder: "Not me",
      value: "",
    },
    {
      name: "What is your favorite food?",
      placeholder: "Pizza",
      value: "",
    },
  ];

  function checkValue() {
    let valid = true;
    questions.forEach((question) => {
      if (question.value.length === 0) {
        valid = false;
      }
    });
    return valid;
  }

  function handleRegister() {
    if (checkValue()) {
      let mappedValue = questions.map((question) => {
        return question.value;
      });
      modals.send({
        title: "Register",
        description: "Are you sure you want to register?",
        onCancel: () => {},
        onOk: () => {
          dispatch("register", mappedValue);
        },
      });
      //   dispatch("register", mappedValue);
    } else {
      alert("Please fill out all fields");
    }
  }
</script>

<div class="register">
  <h1>Register Citizenship</h1>
  <div class="question">
    {#each questions as question (question.name)}
      <div class="q">
        <span>{question.name}</span>
        <input
          type="text"
          bind:value={question.value}
          placeholder={question.placeholder}
        />
      </div>
    {/each}
  </div>
  <div class="buttons">
    <button class="btn cancel"> Cancel </button>
    <button class="btn" on:click={handleRegister}>Register</button>
  </div>
</div>

<style>
  .btn.cancel {
    background-color: rgb(187, 75, 75);
  }
  .btn {
    background-color: rgb(54, 143, 54);
  }
  .buttons button {
    color: white;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 3px;
  }
  .buttons {
    display: flex;
    flex: 1;
    justify-content: center;

    gap: 15px;
    margin-top: 30px;
    align-items: flex-end;
  }
  input:focus {
    outline: none;
  }
  .q input {
    margin-top: 10px;
    text-align: center;
    padding: 5px;
    font-size: 1.5rem;
    border: none;
    height: 60px;
  }
  .q {
    margin-top: 30px;
    font-size: 26px;
    padding: 0 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 2px;
    font-weight: bold;
    margin-top: 1rem;
  }
  .register {
    display: flex;
    flex-direction: column;
    padding: 15px;
    font-family: "Anton", sans-serif;
    color: white;
    background-color: rgb(36, 34, 53);
    width: 35vw;
    height: 100%;
    border-radius: 3px;
    box-shadow: 3px 3px 4px 3px rgba(0, 0, 0, 0.2);
  }
</style>

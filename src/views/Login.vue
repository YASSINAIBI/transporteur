<template>
  <div class="login">
    <router-link to="/generale" class="creeCompt">
      <p>CREE UN COMPTE</p>
    </router-link>
    <img src="../assets/logoSearchfret2.png" class="mb-5 w-25" />
    <h5>
      AUTHENTIFICATION DV <br />
      ACCEDEZ A VOTRE ESPACE SEARCHFRET
    </h5>
    <form method="POST">
      <b-form-input
        id="input-1"
        type="email"
        required
        placeholder="Email"
        v-model="inputEmail"
        name="inputEmail"
      ></b-form-input>

      <b-form-input
        id="input-2"
        type="text"
        required
        placeholder="Mot de pass"
        v-model="inputPassword"
        name="inputPassword"
      ></b-form-input>

      <div class="language">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <img src="../assets/english-flag.png" alt="" /><span class="sr-only"
              >Search</span
            >
          </template>
          <b-dropdown-item href="#">Francais</b-dropdown-item>
          <b-dropdown-item href="#">english</b-dropdown-item>
        </b-dropdown>
      </div>

      <router-link to="/" class="mt-lg-n4">
        <b-button type="submit"> S'identifier</b-button>
      </router-link>
    </form>

    <p class="copy">COPYRIGHT copy 2020 | <span>searchcept</span></p>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

$primaryFont: "Poppins", sans-serif;
$primaryColor: #12b8c4;
$primaryBgColor2: rgba($primaryColor, 0.7);
$secondary-color: #12d20d;
$primaryColor2: #3f3f41;

%connetionAndInscription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50pc;
  background-image: url("../assets/loginBack.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.login {
  @extend %connetionAndInscription;
  .creeCompt {
    align-self: flex-end;
    margin-right: 10%;
    color: black;
    font-family: $primaryFont;
    font-weight: bold;
    font-size: 22px;
    position: relative;
    top: -6%;
    &::before {
      content: "";
      background-color: black;
      width: 25px;
      height: 4px;
      position: absolute;
      left: -40px;
      top: 15px;
    }
    &::after {
      content: "";
      background-color: black;
      width: 25px;
      height: 4px;
      position: absolute;
      right: -40px;
      top: 15px;
    }
  }
  form {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .language {
    align-self: flex-start;
    img {
      width: 55px !important;
    }
  }
  h5 {
    color: $primaryColor;
    font-family: $primaryFont;
    margin-bottom: 50px;
    text-align: center;
  }
  input {
    background-color: $primaryColor;
    font-weight: 600;
    padding: 2%;
    height: 60px;
    border: none;
    margin-bottom: 22px;
    border-radius: 10px;
    color: white;
    &:focus {
      box-shadow: none;
      border-color: unset;
      border: unset;
      height: unset;
      outline: unset;
      background-color: $primaryColor;
      color: white;
      height: 60px;
    }
  }
  .language {
    float: left;
    button {
      background-color: unset;
    }
    img {
      width: 30px;
    }
  }
  button {
    background-color: $primaryBgColor2;
    border: none;
    border-radius: 20px;
    padding: 25% 50%;
    position: relative;
    left: -45%;
    &:focus {
      box-shadow: none;
      border-color: unset;
      border: unset;
      outline: unset;
    }
  }
  .copy {
    color: $primaryColor2;
    font-weight: bold;
    font-family: $primaryFont;
    position: absolute;
    bottom: 20px;
    font-size: 20px;
    left: 5%;
    bottom: 5%;
    span {
      color: $secondary-color;
    }
  }
}
</style>

<script>
export default {
  name: "Login",
  data() {
    return {
      inputEmail: "",
      inputPassword: ""
    };
  }
};
</script>

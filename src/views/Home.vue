<template>
  <div class="home">
    <section class="body-contents">
      <div class="contents">
        <h1>WE ARE YOUR RELIABLE PARTNER</h1>
        <h2>FRET ROUTIER</h2>
        <div class="InscriptionCalculer">
          <button class="Inscription btn">Inscription</button>
          <button class="Calculer btn">Calculer</button>
        </div>
        <p>COPYRIGHT 2020 | <span>searchcept</span></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$primary-color: #3f3f41;
$secondary-color: #12d20d;
$primary-text-color: white;
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
$primary-font: "Poppins", sans-serif;

.home {
  .body-contents {
    background-image: url(../assets/chauf.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 49.9pc;
    .contents {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      margin: 0px 10%;
      position: relative;
      h1 {
        color: white;
        align-self: flex-end;
        font-family: $primary-font;
        font-size: 45px;
      }
      h2 {
        color: $secondary-color;
        align-self: flex-end;
        font-family: $primary-font;
        font-size: 60px;
      }
      .InscriptionCalculer {
        align-self: flex-end;
        display: flex;
        flex-direction: row;
        margin-right: 100px;
        .Inscription {
          color: white;
          font-size: 30px;
          font-family: $primary-font;
          border: 4px solid $secondary-color;
          border-radius: 35px;
          padding: 0% 8%;
          margin-right: 20px;
          transition: all 0.5s ease-in-out;
          &:hover {
            background-color: white;
            color: $secondary-color;
          }
        }
        .Calculer {
          color: white;
          font-size: 30px;
          font-family: $primary-font;
          border: 4px solid $secondary-color;
          border-radius: 35px;
          padding: 0% 8%;
          transition: all 0.5s ease-in-out;
          &:hover {
            background-color: white;
            color: $secondary-color;
          }
        }
      }
      p {
        color: white;
        font-weight: bold;
        font-family: $primary-font;
        position: absolute;
        bottom: 20px;
        font-size: 20px;
        span {
          color: $secondary-color;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>

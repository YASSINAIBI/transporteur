<template>
  <div class="NavBar">
    <!-- start navBar -->
    <section class="home-navbar">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="#"
          ><img src="../assets/logoSearchfret.png" width="300px" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto align-items-center">
            <b-navbar-nav>
              <router-link to="/">ACCUEIL</router-link>
            </b-navbar-nav>

            <b-navbar-nav>
              <router-link to="/login" class="votreEspace"
                >VOTRE ESPACE</router-link
              >
            </b-navbar-nav>

            <b-navbar-nav>
              <router-link to="/">A PROPOS DE NOUS</router-link>
            </b-navbar-nav>

            <b-navbar-nav>
              <router-link to="/" class="contact">CONTACT NOUS</router-link>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </section>
    <!-- end navBar -->
  </div>
</template>

<script>
export default {
  name: "NavbarComponent"
};
</script>

<style lang="scss">
$primary-color: #3f3f41;
$secondary-color: #12d20d;
$primary-text-color: white;
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
$primary-font: "Poppins", sans-serif;

.NavBar {
  .home-navbar {
    padding: 1% 10%;
    background-color: $primary-color;
    border-bottom: 5px solid $secondary-color;
    .navbar-nav {
      text-align: center;
      @media (max-width: 990px) {
        width: 100%;
        margin-bottom: 2%;
      }
      .votreEspace {
        position: relative;
        &::before {
          content: "";
          background-color: $secondary-color;
          width: 25px;
          height: 3px;
          position: absolute;
          left: -30px;
          top: 12px;
        }
        &::after {
          content: "";
          background-color: $secondary-color;
          width: 25px;
          height: 3px;
          position: absolute;
          right: -30px;
          top: 12px;
        }
      }

      .contact {
        border: 2px solid $secondary-color;
        margin-left: -28px;
        padding: 12px 13px;
        border-radius: 20px 0px 20px 20px;
        transition: all 0.5s ease-in-out;
        &:hover {
          background-color: $primary-text-color;
          color: #12d20d;
        }
      }
      a {
        color: $primary-text-color;
        font-weight: bold;
        font-size: 15px;
        font-family: $primary-font;
        letter-spacing: 1px;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
  // @media
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
      margin-left: 100px;
    }
  }
}
</style>

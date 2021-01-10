<template>
  <div id="app">
    <!-- start navBar -->
    <NavbarComponent />
    <router-view />
    <!-- end navBar -->
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

$primaryBgColor: #255675;
$primaryFont: "Poppins", sans-serif;
$mainTextColor: white;
$primary-color: #0def8d;

.rightSideContents {
  text-align: center;

  .form {
    background-color: white;
    padding: 1% 10%;
    border-radius: 20px;
    .suivant {
      background-color: rgba($color: $primaryBgColor, $alpha: 0.7);
      color: white;
      padding: 2% 12%;
      float: right;
      margin: 0;
      &:hover {
        background-color: rgba($color: $primaryBgColor, $alpha: 1);
      }
    }
    .important {
      color: red;
      font-weight: bold;
      position: absolute;
      left: -20px;
      top: -7px;
      font-size: 33px;
    }
    .disabledCode {
      cursor: no-drop;
    }
    .container {
      font-family: "Roboto";
      width: 600px;
      margin: 30px auto 0;
      display: block;
      padding: 10px 50px 50px;
    }
    h2 {
      text-align: center;
      margin-bottom: 50px;
    }
    h2 small {
      font-weight: normal;
      color: #888;
      display: block;
    }

    /* form starting stylings ------------------------------- */
    .group {
      position: relative;
      margin-bottom: 20px;
    }
    input {
      font-size: 15px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      border-bottom: 1px solid #ddd;
      background-color: transparent;
    }
    input:focus {
      outline: none;
      border-bottom: 1px solid $primaryBgColor;
    }

    /* LABEL ======================================= */
    label {
      color: #999;
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    /* active state */
    input:focus ~ label,
    input:valid ~ label {
      top: -20px;
      font-size: 14px;
      color: $primaryBgColor;
    }

    /* BOTTOM BARS ================================= */
    .bar {
      position: relative;
      display: block;
      width: 100%;
    }
    .bar:before,
    .bar:after {
      content: "";
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: $primaryBgColor;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    .bar:before {
      left: 0%;
      top: -2px;
    }
    .bar:after {
      right: 0%;
      top: -2px;
    }

    /* active state */
    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
      width: 100%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
      position: absolute;
      height: 60%;
      width: 100px;
      top: 25%;
      left: 0;
      pointer-events: none;
      opacity: 0.5;
    }

    /* active state */
    input:focus ~ .highlight {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
      from {
        background: $primaryBgColor;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @-moz-keyframes inputHighlighter {
      from {
        background: $primaryBgColor;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @keyframes inputHighlighter {
      from {
        background: $primaryBgColor;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
  }
}
</style>

<script>
import NavbarComponent from "@/components/NavbarComponent";

export default {
  data() {
    return {};
  },
  components: {
    NavbarComponent
  }
};
</script>

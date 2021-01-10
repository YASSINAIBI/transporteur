<template>
  <div class="peages">
    <div class="form">
      <form>
        <div class="row">
          <div class="col-md-8">
            <div class="form-group row formlLineAfter MAD">
              <label
                for="MontantAnnuelMoyenDesPeages"
                class="col-sm-5 col-form-label align-items-center form_line"
                >Montant annuel moyen des péages par véhicule</label
              >
              <div class="col-sm-7">
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="MontantAnnuelMoyenDesPeages"
                  required
                />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="btn-list">
              <button class="btn valide" @click.prevent="nextForm">
                Validé
              </button>
              <button class="btn cancel">Annulé</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

$primaryBgColor: #255675;
$primaryFont: "Poppins", sans-serif;
$mainTextColor: white;
$primaryColor: #12d20d;
$primaryInputeColor: #3f3f41;

.peages {
  @mixin textAfterInput($string) {
    position: relative;
    &::after {
      content: $string;
      width: 2%;
      height: 3px;
      position: absolute;
      top: 4px;
      right: -22px;
      font-size: 20px;
      font-weight: bold;
      color: #ddd;
    }
  }

  .form {
    background-color: white;
    padding: 0 !important;
    border-radius: 20px;
    .form_line {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 100px;
        background-color: $primaryBgColor;
        top: -22px;
        right: 0;
      }
    }
    input {
      font-size: 15px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      /* border: none; */
      border: 2px solid #ddd !important;
      background-color: transparent;
      border-radius: 15px;
      font-weight: bold;
      font-family: $primaryFont;
      color: $primaryInputeColor;
    }

    .MAD {
      @include textAfterInput("MAD");
    }

    .formlLineAfter {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 100px;
        background-color: #255675;
        top: -22px;
        right: 0;
      }
    }

    select {
      font-size: 15px;
      display: block;
      border: 2px solid #ddd;
      background-color: transparent;
      height: 48px;
      border-radius: 15px;
      max-width: 55%;
      margin-left: 14px;
      font-weight: bold;
      font-family: $primaryFont;
      color: $primaryInputeColor;
      option {
        font-weight: bold;
        font-family: $primaryFont;
        color: $primaryInputeColor;
      }
      &:focus {
        background-color: unset;
        box-shadow: unset;
        border-color: #ddd;
      }
    }
    label {
      position: relative !important;
      text-align: end;
      font-family: $primaryFont;
      color: $primaryBgColor;
      top: 0 !important;
      font-weight: 500;
    }
  }

  .btn-list {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    .valide {
      color: $primaryColor;
      border: 4px solid $primaryColor;
      padding: 0px 15px;
      margin: 40px 10px;
      border-radius: 15px;
      font-weight: bold;
      font-family: $primaryFont;
      font-size: 20px;
    }
    .add {
      color: $primaryBgColor;
      border: 4px solid $primaryBgColor;
      padding: 5px 15px;
      margin: 40px 10px;
      border-radius: 15px;
      font-weight: bold;
      font-family: $primaryFont;
      font-size: 20px;
    }
    .cancel {
      color: red;
      border: 4px solid red;
      padding: 5px 25px;
      margin: 40px 10px;
      border-radius: 15px;
      font-weight: bold;
      font-family: $primaryFont;
      font-size: 20px;
    }
  }
}
</style>

<script>
export default {
  name: "peages",
  data() {
    return {};
  },
  methods: {
    nextForm() {
      this.$emit("document-process");
    }
  }
};
</script>

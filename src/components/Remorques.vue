<template>
  <div class="remorques">
    <div class="rightSideContents">
      <div class="form mt-5">
        <form v-on:submit.prevent="validateRemorqueFormOne">
          <transition name="slideRight">
            <div
              class="firstRightForm"
              v-if="notValidForm"
              style="animation-duration: 0.3s"
            >
              <p class="addTracteur">Ajouter un remorque</p>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="ImmatriculationR">Immatriculation*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="ImmatriculationR"
                    v-model="validateRemorqueFormOneList.Immatriculation"
                    placeholder="Immatriculation"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="MarqueR">Marque*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="MarqueR"
                    v-model="validateRemorqueFormOneList.Marque"
                    placeholder="Marque"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="ModeleR">Modéle(Année)*</label>
                  <select
                    id="ModeleR"
                    class="form-control"
                    v-model="validateRemorqueFormOneList.Modele"
                  >
                    <option selected>Choose...</option>
                    <option>année1</option>
                    <option>année2</option>
                    <option>année3</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="PoidsVideR">Poids à vide(Kg)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="PoidsVideR"
                    v-model="validateRemorqueFormOneList.PoidsVide"
                    placeholder="PAV"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="ModeleR">Catégorie*</label>
                  <select
                    id="ModeleR"
                    class="form-control"
                    v-model="validateRemorqueFormOneList.Categorie"
                  >
                    <option selected>Choose...</option>
                    <option>catégorie1</option>
                    <option>catégorie2</option>
                    <option>catégorie3</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="PoidsTotalAutoriseR"
                    >Poids total autorisé en charge(Kg)*</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="PoidsTotalAutoriseR"
                    v-model="validateRemorqueFormOneList.PoidsTotalAutorise"
                    placeholder="PTCT"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="miseEnCirculationR"
                  >Date mise en circulation*</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="miseEnCirculationR"
                  v-model="validateRemorqueFormOneList.miseEnCirculation"
                  required
                />
              </div>

              <button class="btn suivant">SUIVANT</button>
            </div>
          </transition>
        </form>
        <form>
          <div class="row">
            <div class="col-md-8">
              <div class="form-group row formlLineAfter">
                <label
                  for="ModeDeFinancement"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Mode de financement du véhicule tracté</label
                >
                <select
                  id="ModeDeFinancement"
                  class="form-control col-sm-7"
                  v-model="validateRemorqueFormTwoList.ModeDeFinancement"
                  :disabled="notValidForm"
                >
                  <option selected>Crédit Bail ou Location Financière</option>
                  <option>...</option>
                </select>
              </div>

              <div class="form-group row valeurDuVehiculeTracte formlLineAfter">
                <label
                  for="valeurDuVehiculeTracte"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Valeur du véhicule tracté</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="valeurDuVehiculeTracte"
                    v-model="validateRemorqueFormTwoList.valeurDuVehiculeTracte"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div class="form-group row periodiciteDesLoyers formlLineAfter">
                <label
                  for="periodiciteDesLoyers"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Périodicité des loyers</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="periodiciteDesLoyers"
                    v-model="validateRemorqueFormTwoList.periodiciteDesLoyers"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div class="form-group row dureeDuContrat formlLineAfter">
                <label
                  for="dureeDuContrat"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Durée du contrat</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="dureeDuContrat"
                    v-model="validateRemorqueFormTwoList.dureeDuContrat"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div class="form-group row formlLineAfter">
                <label
                  for="montantDuLoyer"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Montant du loyer</label
                >
                <select
                  id="montantDuLoyer"
                  class="form-control col-sm-7"
                  v-model="validateRemorqueFormTwoList.montantDuLoyer"
                  :disabled="notValidForm"
                >
                  <option selected>Trimestrielle</option>
                  <option>...</option>
                </select>
              </div>

              <div class="form-group row valeurOptionnelleAchat formlLineAfter">
                <label
                  for="valeurOptionnelleAchat"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Valeur optionnelle d'achat</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="valeurOptionnelleAchat"
                    v-model="validateRemorqueFormTwoList.valeurOptionnelleAchat"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div class="form-group row valeurDeRevente formlLineAfter">
                <label
                  for="valeurDeRevente"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Valeur de revente</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="valeurDeRevente"
                    v-model="validateRemorqueFormTwoList.valeurDeRevente"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div
                class="form-group row DureeUtilisationDuVehiculeT formlLineAfter"
              >
                <label
                  for="DureeUtilisationDuVehiculeT"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Durée d'utilisation du véhicule tracté</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="DureeUtilisationDuVehiculeT"
                    v-model="
                      validateRemorqueFormTwoList.DureeUtilisationDuVehiculeT
                    "
                    :disabled="notValidForm"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="btn-list">
                <button
                  class="btn valide"
                  @click.prevent="validateRemorqueFormTwo"
                >
                  Validé
                </button>
                <button class="btn add" @click.prevent="addNewTracteur">
                  +
                </button>
                <button class="btn cancel">Annulé</button>
              </div>

              <div class="errors-list">
                <ul>
                  <li v-for="(error, index) in errors" :key="index">
                    <div
                      class="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      {{ error }}
                    </div>
                  </li>
                </ul>
              </div>

              <div class="next-form">
                <button class="btn suivant" @click.prevent="nextProcess">
                  SUIVANT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
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

// valide color: #41c215 green
// color selected icone: #e09507 orange
// color not yet validate: #c7c6da gray

.remorques {
  .row {
    margin-right: 0;
  }

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
    .firstRightForm {
      position: absolute;
      background-color: #f4f4f4;
      width: 55%;
      height: 105%;
      right: 0;
      top: 0;
      z-index: 1;
      padding: 1% 4%;
      text-align: left;
      .addTracteur {
        color: $primaryBgColor;
        font-weight: bold;
        font-size: 36px;
        margin: 4% 1%;
      }
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
      label {
        font-weight: 500;
        color: #5c6370;
      }
      input {
        border-radius: unset;
        background-color: white;
        font-size: 16px;
        padding: 25px 17px;
        font-weight: 500;
        &:focus {
          box-shadow: unset;
        }
      }
      select {
        height: 62%;
        max-width: 100%;
        background-color: white;
        border-radius: unset;
        margin: 0;
      }
    }
    .form_line {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 1%;
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

    .valeurDuVehiculeTracte {
      @include textAfterInput("MAD");
    }
    .periodiciteDesLoyers {
      @include textAfterInput("MAD");
    }
    .dureeDuContrat {
      @include textAfterInput("Mois");
    }
    .valeurOptionnelleAchat {
      @include textAfterInput("MAD");
    }
    .valeurDeRevente {
      @include textAfterInput("MAD");
    }
    .DureeUtilisationDuVehiculeT {
      @include textAfterInput("An(s)");
    }

    .formlLineAfter {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 3px;
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
      font-weight: bold;
      color: $primaryBgColor;
      top: 0 !important;
    }
  }

  .btn-list {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    .valide {
      color: $primaryColor;
      border: 4px solid $primaryColor;
      padding: 4px 25px;
      margin: 40px 10px;
      border-radius: 15px;
      font-weight: bold;
      font-family: $primaryFont;
      font-size: 20px;
    }
    .add {
      color: $primaryBgColor;
      border: 4px solid $primaryBgColor;
      padding: 4px 25px;
      margin: 40px 10px;
      border-radius: 15px;
      font-weight: bold;
      font-family: $primaryFont;
      font-size: 20px;
    }
    .cancel {
      color: red;
      border: 4px solid red;
      padding: 4px 25px;
      margin: 40px 10px;
      border-radius: 15px;
      font-weight: bold;
      font-family: $primaryFont;
      font-size: 20px;
    }
  }

  .errors-list {
    height: 400px;
    overflow: auto;
    ul {
      li {
        list-style: none;
      }
    }
  }

  .next-form {
    .suivant {
      background-color: rgba($color: #05adb3, $alpha: 1);
      color: white;
      padding: 2% 20%;
      float: right;
      margin: 0;
      &:hover {
        background-color: rgba($color: #05adb3, $alpha: 1);
      }
    }
  }
}
</style>

<script>
export default {
  name: "remorques",
  data() {
    return {
      notValidForm: true,
      errors: [],
      currentPrecess: 2,

      validateRemorqueFormOneList: {
        Immatriculation: "",
        Marque: "",
        Modele: "",
        PoidsVide: "",
        PoidsTotalAutorise: "",
        miseEnCirculation: "",
        Categorie: ""
      },

      validateRemorqueFormTwoList: {
        ModeDeFinancement: "",
        valeurDuVehiculeTracte: "",
        periodiciteDesLoyers: "",
        dureeDuContrat: "",
        montantDuLoyer: "",
        valeurOptionnelleAchat: "",
        valeurDeRevente: "",
        DureeUtilisationDuVehiculeT: ""
      }
    };
  },

  methods: {
    validateRemorqueFormOne() {
      if (
        this.validateRemorqueFormOneList.Immatriculation == "" ||
        this.validateRemorqueFormOneList.Marque == "" ||
        this.validateRemorqueFormOneList.Modele == "" ||
        this.validateRemorqueFormOneList.PoidsVide == "" ||
        this.validateRemorqueFormOneList.PoidsTotalAutorise == "" ||
        this.validateRemorqueFormOneList.miseEnCirculation == "" ||
        this.validateRemorqueFormOneList.Categorie == ""
      ) {
        alert("completer tout la form");
      } else {
        this.notValidForm = false;
        this.$store.dispatch(
          "addNewDataRemorque",
          this.validateRemorqueFormOneList
        );

        this.validateRemorqueFormOneList.Immatriculation = "";
        this.validateRemorqueFormOneList.Marque = "";
        this.validateRemorqueFormOneList.Modele = "";
        this.validateRemorqueFormOneList.PoidsVide = "";
        this.validateRemorqueFormOneList.PoidsTotalAutorise = "";
        this.validateRemorqueFormOneList.miseEnCirculation = "";
        this.validateRemorqueFormOneList.Categorie = "";
      }
    },

    validateRemorqueFormTwo() {
      var remorquedataOne = this.$store.state.formDRemorque.length; //1
      var remorquedataTwo = this.$store.state.formDTwoRemorque.length; //0

      if (remorquedataOne == remorquedataTwo) {
        alert("completer d'abord la premiere formulaire de tracteur");
        this.notValidForm = true;
      } else {
        if (
          this.validateRemorqueFormTwoList.ModeDeFinancement === "" ||
          this.validateRemorqueFormTwoList.valeurDuVehiculeTracte === "" ||
          this.validateRemorqueFormTwoList.periodiciteDesLoyers === "" ||
          this.validateRemorqueFormTwoList.dureeDuContrat === "" ||
          this.validateRemorqueFormTwoList.montantDuLoyer === "" ||
          this.validateRemorqueFormTwoList.valeurOptionnelleAchat === "" ||
          this.validateRemorqueFormTwoList.valeurDeRevente === "" ||
          this.validateRemorqueFormTwoList.DureeUtilisationDuVehiculeT === ""
        ) {
          alert("completer tout la form");
        } else {
          this.$store.dispatch(
            "addNewDataTwoRemorque",
            this.validateRemorqueFormTwoList
          );

          this.validateRemorqueFormTwoList.ModeDeFinancement = "";
          this.validateRemorqueFormTwoList.valeurDuVehiculeTracte = "";
          this.validateRemorqueFormTwoList.periodiciteDesLoyers = "";
          this.validateRemorqueFormTwoList.dureeDuContrat = "";
          this.validateRemorqueFormTwoList.montantDuLoyer = "";
          this.validateRemorqueFormTwoList.valeurOptionnelleAchat = "";
          this.validateRemorqueFormTwoList.valeurDeRevente = "";
          this.validateRemorqueFormTwoList.DureeUtilisationDuVehiculeT = "";

          this.errors = [];
        }
      }
    },

    addNewTracteur() {
      var remorquedataOne = this.$store.state.formDRemorque.length;
      var remorquedataTwo = this.$store.state.formDTwoRemorque.length;

      if (remorquedataOne != remorquedataTwo) {
        console.log("please complete first the form");
        this.errors.push(
          "completer et valider la deuxieme form de remorque por ajouter un nouveaux remorque"
        );
      } else {
        this.notValidForm = !this.notValidForm;
        this.errors = [];
      }
    },

    nextProcess(currentPrecess) {
      var remorquedataOne = this.$store.state.formDRemorque.length;
      var remorquedataTwo = this.$store.state.formDTwoRemorque.length;

      if (remorquedataOne == remorquedataTwo) {
        this.$emit("current-process", currentPrecess);
        this.errors = [];
      } else {
        this.errors.push(
          "completer et valider la deuxieme formulaire de remorque por passé a etape suivant"
        );
      }
    }
  }
};
</script>

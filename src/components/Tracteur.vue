<template>
  <div class="tracteur">
    <div class="rightSideContents">
      <div class="form mt-5">
        <form v-on:submit.prevent="validateTracteurFormOne">
          <transition name="slideRight">
            <div
              class="firstRightForm"
              v-if="notValidForm"
              style="animation-duration: 0.3s"
            >
              <p class="addTracteur">Ajouter un tracteur</p>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="Immatriculation">Immatriculation*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Immatriculation"
                    v-model="validateTracteurFormOneList.Immatriculation"
                    placeholder="Immatriculation"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="Marque">Marque*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Marque"
                    v-model="validateTracteurFormOneList.Marque"
                    placeholder="Marque"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="Modele">Modéle(Année)*</label>
                  <select
                    id="Modele"
                    class="form-control"
                    v-model="validateTracteurFormOneList.Modele"
                  >
                    <option selected>Choose...</option>
                    <option>année1</option>
                    <option>année2</option>
                    <option>année3</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="PoidsVide">Poids à vide(Kg)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="PoidsVide"
                    v-model="validateTracteurFormOneList.PoidsVide"
                    placeholder="PAV"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="PoidsTotalRoulant"
                    >Poids total roulant autorisé(Kg)*</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="PoidsTotalRoulant"
                    v-model="validateTracteurFormOneList.PoidsTotalRoulant"
                    placeholder="PTRA"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="PoidsTotalAutorise"
                    >Poids total autorisé en charge(Kg)*</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="PoidsTotalAutorise"
                    v-model="validateTracteurFormOneList.PoidsTotalAutorise"
                    placeholder="PTCT"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="miseEnCirculation">Date mise en circulation*</label>
                <input
                  type="date"
                  class="form-control"
                  id="miseEnCirculation"
                  v-model="validateTracteurFormOneList.miseEnCirculation"
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
              <div class="form-group row kilometrageAnnuelMoyen formlLineAfter">
                <label
                  for="kilometrageAnnuelMoyen"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Kilométrage annuel moyen d'un véhicule moteur</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="kilometrageAnnuelMoyen"
                    v-model="validateTracteurFormTwoList.kilometrageAnnuelMoyen"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div
                class="form-group row nombreDejoursExploitation formlLineAfter"
              >
                <label
                  for="nombreDejoursExploitation"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Nombre de jours d'exploitation du véhicule moteur par
                  an</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="nombreDejoursExploitation"
                    v-model="
                      validateTracteurFormTwoList.nombreDejoursExploitation
                    "
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div class="form-group row formlLineAfter">
                <label
                  for="ModeDeFinancement"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Mode de financement du véhicule tracté</label
                >
                <select
                  id="ModeDeFinancement"
                  class="form-control col-sm-7"
                  v-model="validateTracteurFormTwoList.ModeDeFinancement"
                  :disabled="notValidForm"
                >
                  <option selected>Emprunt</option>
                  <option>...</option>
                </select>
              </div>

              <div class="form-group row ValeurDuVehicule formlLineAfter">
                <label
                  for="ValeurDuVehicule"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Valeur du véhicule moteur</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="ValeurDuVehicule"
                    v-model="validateTracteurFormTwoList.ValeurDuVehicule"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div class="form-group row PartDeEmprunt formlLineAfter">
                <label
                  for="PartDeEmprunt"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Part de l'emprunt dans le renouvellement</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="PartDeEmprunt"
                    v-model="validateTracteurFormTwoList.PartDeEmprunt"
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
                    v-model="validateTracteurFormTwoList.dureeDuContrat"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div class="form-group row formlLineAfter">
                <label
                  for="periodiciteDesRemboursements"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Périodicité des remboursements</label
                >
                <select
                  id="periodiciteDesRemboursements"
                  class="form-control col-sm-7"
                  v-model="
                    validateTracteurFormTwoList.periodiciteDesRemboursements
                  "
                  :disabled="notValidForm"
                >
                  <option selected>Trimestrielle</option>
                  <option>...</option>
                </select>
              </div>

              <div class="form-group row tauxIinteret formlLineAfter">
                <label
                  for="tauxIinteret"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Taux d'intérêt</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="TauxIinteret"
                    v-model="validateTracteurFormTwoList.tauxIinteret"
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
                    v-model="validateTracteurFormTwoList.valeurDeRevente"
                    :disabled="notValidForm"
                  />
                </div>
              </div>

              <div
                class="form-group row DureeUtilisationDuVehicule formlLineAfter"
              >
                <label
                  for="DureeUtilisationDuVehiculeM"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Durée d'utilisation du véhicule moteur</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="DureeUtilisationDuVehiculeM"
                    v-model="
                      validateTracteurFormTwoList.DureeUtilisationDuVehiculeM
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
                  @click.prevent="validateTracteurFormTwo"
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

.tracteur {
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

    .kilometrageAnnuelMoyen {
      @include textAfterInput("KM");
    }
    .nombreDejoursExploitation {
      @include textAfterInput("Jours");
    }
    .ValeurDuVehicule {
      @include textAfterInput("MAD");
    }
    .PartDeEmprunt {
      @include textAfterInput("MAD");
    }
    .dureeDuContrat {
      @include textAfterInput("Mois");
    }
    .tauxIinteret {
      @include textAfterInput("(%)");
    }
    .valeurDeRevente {
      @include textAfterInput("MAD");
    }
    .DureeUtilisationDuVehicule {
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
  name: "tracteur",
  data() {
    return {
      notValidForm: true,
      errors: [],
      currentPrecess: 1,

      validateTracteurFormOneList: {
        Immatriculation: "",
        Marque: "",
        Modele: "",
        PoidsVide: "",
        PoidsTotalRoulant: "",
        PoidsTotalAutorise: "",
        miseEnCirculation: ""
      },

      validateTracteurFormTwoList: {
        kilometrageAnnuelMoyen: "",
        nombreDejoursExploitation: "",
        ModeDeFinancement: "",
        ValeurDuVehicule: "",
        PartDeEmprunt: "",
        dureeDuContrat: "",
        periodiciteDesRemboursements: "",
        tauxIinteret: "",
        valeurDeRevente: "",
        DureeUtilisationDuVehiculeM: ""
      }
    };
  },
  methods: {
    validateTracteurFormOne() {
      if (
        this.validateTracteurFormOneList.Immatriculation === "" ||
        this.validateTracteurFormOneList.Marque === "" ||
        this.validateTracteurFormOneList.Modele === "" ||
        this.validateTracteurFormOneList.PoidsVide === "" ||
        this.validateTracteurFormOneList.PoidsTotalRoulant === "" ||
        this.validateTracteurFormOneList.PoidsTotalAutorise === "" ||
        this.validateTracteurFormOneList.miseEnCirculation === ""
      ) {
        alert("completer tout la form");
      } else {
        this.notValidForm = false;
        this.$store.dispatch(
          "addNewDataTracteur",
          this.validateTracteurFormOneList
        );

        this.validateTracteurFormOneList.Immatriculation = "";
        this.validateTracteurFormOneList.Marque = "";
        this.validateTracteurFormOneList.Modele = "";
        this.validateTracteurFormOneList.PoidsVide = "";
        this.validateTracteurFormOneList.PoidsTotalRoulant = "";
        this.validateTracteurFormOneList.PoidsTotalAutorise = "";
        this.validateTracteurFormOneList.miseEnCirculation = "";
      }
    },

    validateTracteurFormTwo() {
      var tracteurdataOne = this.$store.state.formDTracteur.length; //1
      var tracteurdataTwo = this.$store.state.formDTwoTracteur.length; //0

      if (tracteurdataOne == tracteurdataTwo) {
        alert("completer d'abord la premiere formulaire de tracteur");
        this.notValidForm = true;
      } else {
        if (
          this.validateTracteurFormTwoList.kilometrageAnnuelMoyen === "" ||
          this.validateTracteurFormTwoList.nombreDejoursExploitation === "" ||
          this.validateTracteurFormTwoList.ModeDeFinancement === "" ||
          this.validateTracteurFormTwoList.ValeurDuVehicule === "" ||
          this.validateTracteurFormTwoList.PartDeEmprunt === "" ||
          this.validateTracteurFormTwoList.dureeDuContrat === "" ||
          this.validateTracteurFormTwoList.periodiciteDesRemboursements ===
            "" ||
          this.validateTracteurFormTwoList.tauxIinteret === "" ||
          this.validateTracteurFormTwoList.valeurDeRevente === "" ||
          this.validateTracteurFormTwoList.DureeUtilisationDuVehiculeM === ""
        ) {
          alert("completer tout la form");
        } else {
          this.$store.dispatch(
            "addNewDataTwoTracteur",
            this.validateTracteurFormTwoList
          );

          this.validateTracteurFormTwoList.kilometrageAnnuelMoyen = "";
          this.validateTracteurFormTwoList.nombreDejoursExploitation = "";
          this.validateTracteurFormTwoList.ModeDeFinancement = "";
          this.validateTracteurFormTwoList.ValeurDuVehicule = "";
          this.validateTracteurFormTwoList.PartDeEmprunt = "";
          this.validateTracteurFormTwoList.dureeDuContrat = "";
          this.validateTracteurFormTwoList.periodiciteDesRemboursements = "";
          this.validateTracteurFormTwoList.tauxIinteret = "";
          this.validateTracteurFormTwoList.valeurDeRevente = "";
          this.validateTracteurFormTwoList.DureeUtilisationDuVehiculeM = "";

          this.errors = [];
        }
      }
    },

    addNewTracteur() {
      var tracteurdataOne = this.$store.state.formDTracteur.length;
      var tracteurdataTwo = this.$store.state.formDTwoTracteur.length;

      if (tracteurdataOne != tracteurdataTwo) {
        console.log("please complete first the form");
        this.errors.push(
          "completer et valider la deuxieme form de tracteur por ajouter un nouveaux tracteur"
        );
      } else {
        this.notValidForm = !this.notValidForm;
        this.errors = [];
      }
    },

    nextProcess(currentPrecess) {
      var tracteurdataOne = this.$store.state.formDTracteur.length;
      var tracteurdataTwo = this.$store.state.formDTwoTracteur.length;

      if (tracteurdataOne == tracteurdataTwo) {
        this.$emit("current-process", currentPrecess);
        this.errors = [];
      } else {
        this.errors.push(
          "completer et valider la deuxieme formulaire de tracteur por passé a etape suivant"
        );
      }
    }
  },
  created() {},
  computed: {}
};
</script>

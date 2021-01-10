<template>
  <div class="chauffeurs">
    <div class="rightSideContents">
      <div class="form mt-5">
        <form>
          <div class="row">
            <div class="col-md-8">
              <div class="form-group row formlLineAfter">
                <label
                  for="nomEtPrenom"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Nom et Prénom</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="nomEtPrenom"
                    v-model="validateChaffeursFormList.nomEtPrenom"
                    required
                  />
                </div>
              </div>

              <div class="form-group row formlLineAfter">
                <label
                  for="identiteNationale"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Carte d’identité nationale</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="identiteNationale"
                    v-model="validateChaffeursFormList.identiteNationale"
                  />
                </div>
              </div>

              <div class="form-group row formlLineAfter">
                <label
                  for="NombreDeConducteursAffectes"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Nombre de conducteurs affectés à 1 véhicule</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="NombreDeConducteursAffectes"
                    v-model="
                      validateChaffeursFormList.NombreDeConducteursAffectes
                    "
                  />
                </div>
              </div>

              <div
                class="form-group row nombreDeJoursActiviteAffecte formlLineAfter"
              >
                <label
                  for="nombreDeJoursActiviteAffecte"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Nombre de jours d'activité par an d'un conducteur affecté au
                  véhicule</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="nombreDeJoursActiviteAffecte"
                    v-model="
                      validateChaffeursFormList.nombreDeJoursActiviteAffecte
                    "
                  />
                </div>
              </div>

              <div class="form-group row tempsDeServiceMensuel formlLineAfter">
                <label
                  for="tempsDeServiceMensuel"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Temps de service mensuel</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="tempsDeServiceMensuel"
                    v-model="validateChaffeursFormList.tempsDeServiceMensuel"
                  />
                </div>
              </div>

              <div
                class="form-group row nombreDeJoursTravaillesParMois formlLineAfter"
              >
                <label
                  for="nombreDeJoursTravaillesParMois"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Nombre de jours travaillés pour un mois de pleine
                  activité</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="nombreDeJoursTravaillesParMois"
                    v-model="
                      validateChaffeursFormList.nombreDeJoursTravaillesParMois
                    "
                  />
                </div>
              </div>

              <div
                class="form-group row salaireMensuelCorrespondant formlLineAfter"
              >
                <label
                  for="salaireMensuelCorrespondant"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Salaire mensuel correspondant</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="salaireMensuelCorrespondant"
                    v-model="
                      validateChaffeursFormList.salaireMensuelCorrespondant
                    "
                  />
                </div>
              </div>

              <div class="form-group row PrimesAnnuelles formlLineAfter">
                <label
                  for="PrimesAnnuelles"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Primes annuelles</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="PrimesAnnuelles"
                    v-model="validateChaffeursFormList.PrimesAnnuelles"
                  />
                </div>
              </div>

              <div
                class="form-group row tauxDeChargesPatronales formlLineAfter"
              >
                <label
                  for="tauxDeChargesPatronales"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Taux de charges patronales (%)après allègements</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="tauxDeChargesPatronales"
                    v-model="validateChaffeursFormList.tauxDeChargesPatronales"
                  />
                </div>
              </div>

              <div class="form-group row formlLineAfter">
                <label
                  for="nombreDeMoisPayes"
                  class="col-sm-5 col-form-label align-items-center form_line"
                  >Nombre de mois payés</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="nombreDeMoisPayes"
                    v-model="validateChaffeursFormList.nombreDeMoisPayes"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="btn-list">
                <button
                  class="btn valide"
                  @click.prevent="validateChaffeursForm"
                >
                  Validé
                </button>
                <!-- <button class="btn add" @click.prevent="validateChaffeursForm">+</button> -->
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

.chauffeurs {
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

    .nombreDeJoursActiviteAffecte {
      @include textAfterInput("Jours");
    }
    .tempsDeServiceMensuel {
      @include textAfterInput("Heurs");
    }
    .nombreDeJoursTravaillesParMois {
      @include textAfterInput("Jours");
    }
    .salaireMensuelCorrespondant {
      @include textAfterInput("MAD");
    }
    .PrimesAnnuelles {
      @include textAfterInput("MAD");
    }
    .tauxDeChargesPatronales {
      @include textAfterInput("(%)");
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
  name: "chauffeurs",
  data() {
    return {
      errors: [],
      currentPrecess: 3,

      validateChaffeursFormList: {
        nomEtPrenom: "",
        identiteNationale: "",
        NombreDeConducteursAffectes: "",
        nombreDeJoursActiviteAffecte: "",
        tempsDeServiceMensuel: "",
        nombreDeJoursTravaillesParMois: "",
        salaireMensuelCorrespondant: "",
        PrimesAnnuelles: "",
        tauxDeChargesPatronales: "",
        nombreDeMoisPayes: ""
      }
    };
  },
  methods: {
    validateChaffeursForm() {
      if (
        this.validateChaffeursFormList.nomEtPrenom === "" ||
        this.validateChaffeursFormList.identiteNationale === "" ||
        this.validateChaffeursFormList.NombreDeConducteursAffectes === "" ||
        this.validateChaffeursFormList.nombreDeJoursActiviteAffecte === "" ||
        this.validateChaffeursFormList.tempsDeServiceMensuel === "" ||
        this.validateChaffeursFormList.nombreDeJoursTravaillesParMois === "" ||
        this.validateChaffeursFormList.salaireMensuelCorrespondant === "" ||
        this.validateChaffeursFormList.PrimesAnnuelles === "" ||
        this.validateChaffeursFormList.tauxDeChargesPatronales === "" ||
        this.validateChaffeursFormList.nombreDeMoisPayes === ""
      ) {
        alert("completer tout la form");
      } else {
        this.$store.dispatch(
          "addNewDataChauffeurs",
          this.validateChaffeursFormList
        );

        this.validateChaffeursFormList.nomEtPrenom = "";
        this.validateChaffeursFormList.identiteNationale = "";
        this.validateChaffeursFormList.NombreDeConducteursAffectes = "";
        this.validateChaffeursFormList.nombreDeJoursActiviteAffecte = "";
        this.validateChaffeursFormList.tempsDeServiceMensuel = "";
        this.validateChaffeursFormList.nombreDeJoursTravaillesParMois = "";
        this.validateChaffeursFormList.salaireMensuelCorrespondant = "";
        this.validateChaffeursFormList.PrimesAnnuelles = "";
        this.validateChaffeursFormList.tauxDeChargesPatronales = "";
        this.validateChaffeursFormList.nombreDeMoisPayes = "";

        this.errors = [];
      }
    },

    nextProcess(currentPrecess) {
      var tracteurdataOne = this.$store.state.formDChauffeur.length;

      if (tracteurdataOne != 0) {
        this.$emit("current-process", currentPrecess);
        this.errors = [];
      } else {
        this.errors.push(
          "completer et valider la formulaire de chauffeur pour passé a etape suivant"
        );
      }
    }
  }
};
</script>

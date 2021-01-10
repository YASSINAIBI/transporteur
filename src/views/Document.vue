<template>
  <div class="Document">
    <div class="row">
      <div class="col-md-2 text-md-center">
        <div class="leftSideContents">
          <div
            :class="validGneraleForm ? 'activeIcon' : 'icone'"
            :style="FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-briefcase default-icone fa-4x ml-3"></i>
            <p class="ml-3">Generale</p>
          </div>
          <div
            :class="validResponsableForm ? 'activeIcon' : 'icone'"
            :style="FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-user-alt default-icone fa-4x ml-3"></i>
            <p class="ml-3">Responsable</p>
          </div>

          <div
            :class="validFlotteForm ? 'activeIcon' : 'icone'"
            :style="FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-truck default-icone fa-4x ml-3"></i>
            <p class="ml-3">Flotte</p>
          </div>

          <div
            :class="validDocumentsForm ? 'activeIcon' : 'icone'"
            :style="FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-file default-icone fa-4x ml-3"></i>
            <p class="ml-3">Documents</p>
          </div>

          <div
            :class="validConfirmationForm ? 'activeIcon' : 'icone'"
            :style="!FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-check-circle fa-4x ml-3"></i>
            <p class="ml-3">Confirmation</p>
          </div>
        </div>
      </div>

      <div class="col-md-10">
        <div class="rightSideContents">
          <div class="imgServices">
            <div class="service">
              <img src="../assets/documentImg/1.png" />
              <p>Assurances</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/2.png" />
              <p>Taxes par véhicule</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/3.png" />
              <p>Carburant</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/4.png" />
              <p>Pneumatiques</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/5.png" />
              <p>Péages</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/6.png" />
              <p>L'entretien-réparations</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/7.png" />
              <p>Coûts de structure et autres charges</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/8.png" />
              <p>Expoitation et autres éléments de rémunération</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/9.png" />
              <p>Indemnités de déplacement</p>
            </div>
            <div class="service">
              <img src="../assets/documentImg/10.png" />
              <p>Autre coût à inclure dans la recomposition annuelle</p>
            </div>
          </div>

          <div class="documentForm">
            <assurances
              v-if="documentProcess == 1"
              @document-process="documentProcess++"
            />
            <taxes
              v-if="documentProcess == 2"
              @document-process="documentProcess++"
            />
            <carburant
              v-if="documentProcess == 3"
              @document-process="documentProcess++"
            />
            <pneumatiques
              v-if="documentProcess == 4"
              @document-process="documentProcess++"
            />
            <peages
              v-if="documentProcess == 5"
              @document-process="documentProcess++"
            />
            <entretienRe
              v-if="documentProcess == 6"
              @document-process="documentProcess++"
            />
            <coutsStructure
              v-if="documentProcess == 7"
              @document-process="documentProcess++"
            />
            <expoitationAndAutres
              v-if="documentProcess == 8"
              @document-process="documentProcess++"
            />
            <indemnitesDeplacement
              v-if="documentProcess == 9"
              @document-process="documentProcess++"
            />
            <autreCoutInclure v-if="documentProcess == 10" />
            <!-- <div class="form">
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
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div> -->
          </div>
        </div>
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

.Document {
  .row {
    margin-right: 0;
  }
  .leftSideContents {
    position: relative;
    margin-top: 25%;
    @media (max-width: 760px) {
      width: 70%;
    }
    p {
      margin-bottom: 15%;
    }
    .icone {
      position: relative;
      &::after {
        content: "\f111";
        // content: "\f111";
        position: absolute;
        border: 0px solid #0def8d !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 100;
        top: 0;
        right: -16px;
        z-index: 1;
        font-size: 35px;
        background-color: white;
      }
    }
    .activeIcon {
      position: relative;
      &::after {
        content: "\f058";
        position: absolute;
        border: 0px solid #0def8d !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 100;
        top: 0;
        right: -16px;
        z-index: 1;
        font-size: 35px;
        background-color: white;
        color: #0def8d;
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 1%;
      height: 100%;
      background-color: $primaryBgColor;
      top: 0;
      right: 0;
    }
  }

  .rightSideContents {
    .imgServices {
      display: flex;
      flex-wrap: wrap;
      margin-top: 4%;
      position: relative;
      .service {
        position: relative;
        img {
          width: 265px;
          padding: 0px 40px;
        }
        p {
          width: 260px;
          color: $primaryBgColor;
          font-weight: bold;
          font-family: $primaryFont;
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 90%;
        height: 2px;
        background-color: lightgray;
        bottom: 0;
      }
    }

    .documentForm {
      margin-top: 5%;
    }

    //   @mixin textAfterInput($string) {
    //     position: relative;
    //     &::after {
    //       content: $string;
    //       width: 2%;
    //       height: 3px;
    //       position: absolute;
    //       top: 4px;
    //       right: -22px;
    //       font-size: 20px;
    //       font-weight: bold;
    //       color: #ddd;
    //     }
    //   }

    //   .form {
    //     background-color: white;
    //     padding: 0 !important;
    //     border-radius: 20px;
    //     .form_line {
    //       position: relative;
    //       &::after {
    //         content: "";
    //         position: absolute;
    //         width: 1%;
    //         height: 100px;
    //         background-color: $primaryBgColor;
    //         top: -22px;
    //         right: 0;
    //       }
    //     }
    //     input {
    //       font-size: 15px;
    //       padding: 10px 10px 10px 5px;
    //       display: block;
    //       width: 100%;
    //       /* border: none; */
    //       border: 2px solid #ddd !important;
    //       background-color: transparent;
    //       border-radius: 15px;
    //       font-weight: bold;
    //       font-family: $primaryFont;
    //       color: $primaryInputeColor;
    //     }

    //     .nombreDeJoursActiviteAffecte {
    //       @include textAfterInput("Jours");
    //     }
    //     .tempsDeServiceMensuel {
    //       @include textAfterInput("Heurs");
    //     }
    //     .nombreDeJoursTravaillesParMois {
    //       @include textAfterInput("Jours");
    //     }
    //     .salaireMensuelCorrespondant {
    //       @include textAfterInput("MAD");
    //     }
    //     .PrimesAnnuelles {
    //       @include textAfterInput("MAD");
    //     }
    //     .tauxDeChargesPatronales {
    //       @include textAfterInput("(%)");
    //     }

    //     .formlLineAfter {
    //       position: relative;
    //       &::before {
    //         content: "";
    //         position: absolute;
    //         width: 3px;
    //         height: 100px;
    //         background-color: #255675;
    //         top: -22px;
    //         right: 0;
    //       }
    //     }

    //     select {
    //       font-size: 15px;
    //       display: block;
    //       border: 2px solid #ddd;
    //       background-color: transparent;
    //       height: 48px;
    //       border-radius: 15px;
    //       max-width: 55%;
    //       margin-left: 14px;
    //       font-weight: bold;
    //       font-family: $primaryFont;
    //       color: $primaryInputeColor;
    //       option {
    //         font-weight: bold;
    //         font-family: $primaryFont;
    //         color: $primaryInputeColor;
    //       }
    //       &:focus {
    //         background-color: unset;
    //         box-shadow: unset;
    //         border-color: #ddd;
    //       }
    //     }
    //     label {
    //       position: relative !important;
    //       text-align: end;
    //       font-family: $primaryFont;
    //       font-weight: bold;
    //       color: $primaryBgColor;
    //       top: 0 !important;
    //     }
    //   }
  }
}
</style>

<script>
import assurances from "@/components/Assurances.vue";
import taxes from "@/components/TaxesVeh.vue";
import carburant from "@/components/Carburant.vue";
import pneumatiques from "@/components/Pneumatiques.vue";
import peages from "@/components/Peages.vue";
import entretienRe from "@/components/EntretienRe.vue";
import coutsStructure from "@/components/CoutsStructure.vue";
import expoitationAndAutres from "@/components/ExpoitationAndAutres.vue";
import indemnitesDeplacement from "@/components/IndemnitesDeplacement.vue";
import autreCoutInclure from "@/components/AutreCoutInclure";

export default {
  data() {
    return {
      FormSelected: true,
      validGneraleForm: true,
      validResponsableForm: true,
      validFlotteForm: true,
      validDocumentsForm: false,
      validConfirmationForm: false,

      documentProcess: 1
    };
  },

  components: {
    assurances,
    taxes,
    carburant,
    pneumatiques,
    peages,
    entretienRe,
    coutsStructure,
    expoitationAndAutres,
    indemnitesDeplacement,
    autreCoutInclure
  }
};
</script>

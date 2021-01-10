<template>
  <div class="Flotte">
    <div class="row">
      <div class="col-md-2 text-md-center">
        <div class="leftSideContents">
          <div
            :class="validGneraleForm ? 'activeIcon' : 'icone'"
            :style="!FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-briefcase default-icone fa-4x ml-3"></i>
            <p class="ml-3">Generale</p>
          </div>
          <div
            :class="validResponsableForm ? 'activeIcon' : 'icone'"
            :style="!FormSelected ? 'color: #255675;' : 'color: #DDD'"
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
            :style="!FormSelected ? 'color: #255675;' : 'color: #DDD'"
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

      <!-- process == 1 -->
      <div class="col-md-1" v-if="process == 1">
        <div class="flotteIconeList">
          <div>
            <i
              class="fas fa-truck-pickup"
              style="font-size: 35px; color: #e09508; margin: 17% 0%;"
            ></i>
            <p>Tracteur</p>
          </div>

          <div>
            <i
              class="fas fa-truck-loading"
              style="font-size: 35px; color: #c7c6da; margin: 17% 0%;"
            ></i>
            <p>Remorques</p>
          </div>

          <div>
            <i
              class="fas fa-id-card"
              style="font-size: 35px; color: #c7c6da; margin: 17% 0%;"
            ></i>
            <p>Chauffeurs</p>
          </div>
        </div>
      </div>
      <!-- process == 1 -->

      <!-- process == 2 -->
      <div class="col-md-1" v-if="process == 2">
        <div class="flotteIconeList">
          <div>
            <i
              class="fas fa-truck-pickup"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Tracteur</p>
          </div>

          <div>
            <i
              class="fas fa-truck-loading"
              style="font-size: 35px; color: #e09508; margin: 17% 0%;"
            ></i>
            <p>Remorques</p>
          </div>

          <div>
            <i
              class="fas fa-id-card"
              style="font-size: 35px; color: #c7c6da; margin: 17% 0%;"
            ></i>
            <p>Chauffeurs</p>
          </div>
        </div>
      </div>
      <!-- process == 2 -->

      <!-- process == 3 -->
      <div class="col-md-1" v-if="process == 3">
        <div class="flotteIconeList">
          <div>
            <i
              class="fas fa-truck-pickup"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Tracteur</p>
          </div>

          <div>
            <i
              class="fas fa-truck-loading"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Remorques</p>
          </div>

          <div>
            <i
              class="fas fa-id-card"
              style="font-size: 35px; color: #e09508; margin: 17% 0%;"
            ></i>
            <p>Chauffeurs</p>
          </div>
        </div>
      </div>
      <!-- process == 3 -->

      <!-- process == 4 -->
      <div class="col-md-1" v-if="process == 4">
        <div class="flotteIconeList">
          <div>
            <i
              class="fas fa-truck-pickup"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Tracteur</p>
          </div>

          <div>
            <i
              class="fas fa-truck-loading"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Remorques</p>
          </div>

          <div>
            <i
              class="fas fa-id-card"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Chauffeurs</p>
          </div>
        </div>
      </div>
      <!-- process == 4 -->

      <!-- process == 5 -->
      <div class="col-md-1" v-if="process == 5">
        <div class="flotteIconeList">
          <div>
            <i
              class="fas fa-truck-pickup"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Tracteur</p>
          </div>

          <div>
            <i
              class="fas fa-truck-loading"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Remorques</p>
          </div>

          <div>
            <i
              class="fas fa-id-card"
              style="font-size: 35px; color: #41c215; margin: 17% 0%;"
            ></i>
            <p>Chauffeurs</p>
          </div>
        </div>
      </div>
      <!-- process == 5 -->

      <div class="col-md-9">
        <tracteur v-if="process == 1" @current-process="process++" />
        <remorques v-if="process == 2" @current-process="process++" />
        <chauffeurs v-if="process == 3" @current-process="process++" />
        <tracteurD v-if="process == 4" @current-process="process++" />
        <remorquesD v-if="process == 5" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

$primaryBgColor: #255675;
$primaryFont: "Poppins", sans-serif;
$mainTextColor: white;
$primaryColor: #12d20d;

// valide color: #41c215 green
// color selected icone: #e09507 orange
// color not yet validate: #c7c6da gray

.Flotte {
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

  .flotteIconeList {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      font-weight: 500;
      font-family: $primaryFont;
      color: #ddd;
      margin: 0;
      margin-left: -15px;
    }
  }
}
</style>

<script>
import tracteur from "@/components/Tracteur";
import remorques from "@/components/Remorques";
import chauffeurs from "@/components/Chauffeurs";
import tracteurD from "@/components/TracteurD";
import remorquesD from "@/components/RemorquesD";

export default {
  name: "Flotte",
  data() {
    return {
      FormSelected: true,
      validGneraleForm: true,
      validResponsableForm: true,
      validFlotteForm: false,
      validDocumentsForm: false,
      validConfirmationForm: false,

      valideForm1: true,
      valideForm2: false,
      valideForm3: false,

      process: 1
    };
  },
  components: {
    tracteur,
    remorques,
    chauffeurs,
    tracteurD,
    remorquesD
  },
  methods: {},
  created() {
    console.log(this.process);
  }
};
</script>

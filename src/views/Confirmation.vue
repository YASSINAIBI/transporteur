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
            :style="FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-check-circle fa-4x ml-3"></i>
            <p class="ml-3">Confirmation</p>
          </div>
        </div>
      </div>

      <div class="col-md-10">
        <div class="rightSideContents">
          <div class="card text-white bg-success mb-3" style="max-width: 100%;">
            <div class="card-header">searchfret</div>
            <div class="card-body">
              <h5 class="card-title">
                votre information a eté enregistrer avec success
              </h5>
              <p class="card-text">
                Congatulation
              </p>
            </div>
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

  //   .rightSideContents {

  //   }
}
</style>

<script>
export default {
  data() {
    return {
      FormSelected: true,
      validGneraleForm: true,
      validResponsableForm: true,
      validFlotteForm: true,
      validDocumentsForm: true,
      validConfirmationForm: false
    };
  }
};
</script>

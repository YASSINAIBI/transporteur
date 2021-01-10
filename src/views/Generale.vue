<template>
  <div class="Generale">
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
            :style="!FormSelected ? 'color: #255675;' : 'color: #DDD'"
          >
            <i class="fas fa-user-alt default-icone fa-4x ml-3"></i>
            <p class="ml-3">Responsable</p>
          </div>

          <div
            :class="validFlotteForm ? 'activeIcon' : 'icone'"
            :style="!FormSelected ? 'color: #255675;' : 'color: #DDD'"
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

      <div class="col-md-4">
        <div class="rightSideContents">
          <div class="form mt-5">
            <form>
              <div class="group mt-4">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Raison Sociale</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label>Capital</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Ville</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Address</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>ICE</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>RC</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label>Chiffres d’affaire Année 2018</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label>Chiffres d’affaire Année 2019</label>
              </div>

              <div class="group">
                <input type="text" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label>Chiffres d’affaire Année 2020</label>
              </div>

              <router-link to="/responsable">
                <button class="btn suivant">SUIVANT</button>
              </router-link>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="rightSideTwoContents">
          <button class="btn"><i class="fas fa-power-off"></i></button>
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

.Generale {
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

  .rightSideTwoContents {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 80vh;
    button {
      color: white;
      background-color: red;
      padding: 10px 15px;
      border-radius: 50%;
      font-size: 25px;
    }
  }
}
</style>

<script>
export default {
  name: "Generale",
  data() {
    return {
      FormSelected: true,
      validGneraleForm: false,
      validResponsableForm: false,
      validFlotteForm: false,
      validDocumentsForm: false,
      validConfirmationForm: false
    };
  }
};
</script>

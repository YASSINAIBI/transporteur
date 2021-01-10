<template>
  <div class="Responsable">
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
            :style="FormSelected ? 'color: #255675;' : 'color: #DDD'"
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
            <form v-on:submit.prevent="addUserFun">
              <div class="group mt-4">
                <input type="text" v-model="Nom" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Nom</label>
              </div>

              <div class="group">
                <input type="text" v-model="Prenom" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Prenom</label>
              </div>

              <div class="group">
                <input type="email" v-model="Email" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Email</label>
              </div>

              <div class="group">
                <input type="text" v-model="Telephone" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Telephone</label>
              </div>

              <div class="group">
                <input type="text" v-model="Login" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label>Login</label>
              </div>

              <div class="group">
                <input type="text" v-model="Password" required />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label><span class="important">*</span>Password</label>
              </div>

              <div class="group">
                <input type="text" class="disabledCode" disabled />
                <!-- <span class="highlight"></span> -->
                <span class="bar"></span>
                <label>Code d'accés</label>
              </div>

              <button class="btn suivant">VALIDE</button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="rightSideTwoContents">
          <div class="bottom-btn">
            <router-link to="/flotte">
              <button class="btn suivant">SUIVANT</button>
            </router-link>
            <button class="btn logout-btn">
              <i class="fas fa-power-off"></i>
            </button>
          </div>
          <div class="table-contents">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">NOM COMPLET</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">TELEPHONE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in usersList" :key="user.userID">
                  <td>{{ user.Nom }}</td>
                  <td>{{ user.Email }}</td>
                  <td>{{ user.Telephone }}</td>
                </tr>
              </tbody>
            </table>
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
$primary-color: #0def8d;

.Responsable {
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
    .bottom-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      .logout-btn {
        color: white;
        background-color: red;
        padding: 10px 15px;
        border-radius: 50%;
        font-size: 25px;
      }
      .suivant {
        background-color: rgba($color: $primaryBgColor, $alpha: 0.7);
        color: white;
        padding: 8% 65%;
        float: right;
        margin: 25% 1%;
        &:hover {
          background-color: rgba($color: $primaryBgColor, $alpha: 1);
        }
      }
    }
    .table-contents {
      margin: 12% 4% 0% 4%;

      @media (max-width: 720px) {
        margin: 40% 0% 0% 0%;
      }

      @media (max-width: 470px) {
        margin: 100% 0% 0% 0%;
      }

      table {
        border-collapse: separate;
        border-spacing: 0rem 1rem;
        font-size: 12px;
        td {
          border-top: 0px solid #dee2e6;
        }
        tbody {
          tr {
            font-weight: bold;
            font-family: $primaryFont;
            font-size: 15px;
            &:nth-child(odd) {
              background-color: #f2f2f2;
            }
            &:nth-child(even) {
              background-color: $primary-color;
            }

            .detailButton {
              background-color: transparent;
              color: darkslategray;
              border: unset;
            }
            .time {
              color: $primaryBgColor;
            }
            button {
              padding: 0% 30%;
            }
          }
        }
        thead {
          th {
            border-bottom: 0px solid #dee2e6;
            background-color: #142048;
            color: white;
            border-right: 10px solid white;
            border-left: 10px solid white;
            &:first-of-type {
              border-left: 0px solid white;
            }
            &:last-of-type {
              border-right: 0px solid white;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Responsable",
  data() {
    return {
      FormSelected: true,

      validGneraleForm: true,

      validResponsableForm: false,

      validFlotteForm: false,

      validDocumentsForm: false,

      validConfirmationForm: false,

      userID: 1,

      Nom: "",
      Prenom: "",
      Email: "",
      Telephone: "",
      Login: "",
      Password: "",

      usersList: []
    };
  },
  methods: {
    addUserFun() {
      this.usersList.push({
        userID: this.userID,
        Nom: this.Nom,
        Prenom: this.Prenom,
        Email: this.Email,
        Telephone: this.Telephone,
        Login: this.Login,
        Password: this.Password
      });
      this.Nom = "";
      this.Prenom = "";
      this.Email = "";
      this.Telephone = "";
      this.Login = "";
      this.Password = "";

      this.userID++;
    }
  }
};
</script>

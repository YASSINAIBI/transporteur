<template>
  <div class="remorquesdata">
    <div class="topTxt">
      <h2>REMORQUE</h2>
      <p>AJOUTER UN REMORQUE</p>
    </div>

    <div class="table-contents">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Marque</th>
            <th scope="col">Model</th>
            <th scope="col">La mise en sérculation</th>
            <th scope="col">Matrécile</th>
            <th scope="col">Catégorie</th>
            <th scope="col">Tracteur lié</th>
            <th scope="col">PTAC</th>
            <th scope="col">PTRA</th>
            <th scope="col">Poid à vide</th>
            <th scope="col">Activation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(allRemorqueDatas, index) in allRemorqueData" :key="index">
            <td>{{ allRemorqueDatas.Immatriculation }}</td>
            <td>{{ allRemorqueDatas.Modele }}</td>
            <td>{{ allRemorqueDatas.miseEnCirculation }}</td>
            <td>{{ allRemorqueDatas.Marque }}</td>
            <td>{{ allRemorqueDatas.Categorie }}</td>
            <td>{{ allRemorqueDatas.valeurDeRevente }}</td>
            <td>{{ allRemorqueDatas.periodiciteDesLoyers }}</td>
            <td>{{ allRemorqueDatas.PoidsTotalAutorise }}</td>
            <td>{{ allRemorqueDatas.PoidsVide }}</td>
            <td>
              <button
                type="button"
                class="btn btn-success"
                :class="
                  allRemorqueDatas.activated ? 'btn-success' : 'btn-danger'
                "
                @click="
                  allRemorqueDatas.activated = !allRemorqueDatas.activated
                "
              >
                {{ allRemorqueDatas.activated ? "ON" : "OFF" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="next-form">
      <router-link to="/document">
        <button class="btn suivant">
          SUIVANT
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

$primaryBgColor: #255675;
$primaryFont: "Poppins", sans-serif;
$mainTextColor: white;
$primary-color: #0def8d;

.remorquesdata {
  .suivant {
    background-color: rgba($color: #05adb3, $alpha: 0.8);
    color: white;
    padding: 1% 7%;
    float: right;
    margin: 0;
    &:hover {
      background-color: rgba($color: #05adb3, $alpha: 1);
      color: white;
    }
  }

  .topTxt {
    display: flex;
    align-items: baseline;
    margin-top: 5%;
    justify-content: space-between;
    flex-wrap: wrap;
    h2 {
      color: $primaryBgColor;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        background-color: lightgray;
        height: 2px;
        width: 170%;
        bottom: -10px;
        @media (max-width: 712px) {
          width: 100%;
        }
      }
    }
    p {
      border: 4px solid $primary-color;
      margin-left: -28px;
      padding: 12px 13px;
      border-radius: 20px 0px 20px 20px;
      transition: all 0.5s ease-in-out;
      position: relative;
      font-weight: bold;
      font-family: $primaryFont;
      margin-right: 8%;
      cursor: pointer;
      &:hover {
        background-color: $primary-color;
        color: $primaryBgColor;
      }
      &::before {
        content: "";
        background-color: $primaryBgColor;
        width: 25px;
        height: 3px;
        position: absolute;
        left: -30px;
        top: 22px;
      }
      &::after {
        content: "";
        background-color: $primaryBgColor;
        width: 25px;
        height: 3px;
        position: absolute;
        right: -30px;
        top: 22px;
      }
    }
  }

  .table-contents {
    margin: 5% 0% 0% 0%;

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
</style>

<script>
export default {
  data() {
    return {
      allRemorqueData: []
    };
  },
  created() {
    let arr1 = this.$store.state.formDRemorque;
    let arr2 = this.$store.state.formDTwoRemorque;
    let arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

    this.allRemorqueData = arr3;
  }
};
</script>

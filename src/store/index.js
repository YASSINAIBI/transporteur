import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = false;

export default new Vuex.Store({
  strict: true,
  state: {
    formDTracteur: [
      // {
      //   "Immatriculation": "jqdqsjmlqjsm",
      //   "Marque": "qsdjsqdmljs",
      //   "Modele": "qsdkmqsdlj",
      //   "PoidsVide": "qsjdlmdqsjsd",
      //   "PoidsTotalRoulant": "qsjdmldsqj",
      //   "PoidsTotalAutorise": "sdqjmldsjq",
      //   "miseEnCirculation": "jqsdmljqsdone"
      // },
      // {
      //   "Immatriculation": "<xjmlx<jlm<",
      //   "Marque": "qsdjsqdmlqdsmldjsqlmdsjs",
      //   "Modele": "qsdkmqsdlj",
      //   "PoidsVide": "qsjdlmdqsjsd",
      //   "PoidsTotalRoulant": "qsjdmldsqj",
      //   "PoidsTotalAutorise": "sdqjmldsjq",
      //   "miseEnCirculation": "jqsdmljqsdtwo"
      // }
    ],
    formDTwoTracteur: [
      // {
      //   "kilometrageAnnuelMoyen" : "qsdjlmsj",
      //   "nombreDejoursExploitation" : "qsdjldsjlm",
      //   "ModeDeFinancement" : "sdqkmlj",
      //   "ValeurDuVehicule" : "qsdjlmqjs",
      //   "PartDeEmprunt" : "dsqlsjds",
      //   "dureeDuContrat" : "sqdsdqsqdj",
      //   "periodiciteDesRemboursements" : "jqdsjsdqmlsjmqsl",
      //   "tauxIinteret" : "dqsjdsqjsdsq",
      //   "valeurDeRevente" : "kmkqmsldjsqd",
      //   "DureeUtilisationDuVehiculeM" : "qdmsqjlmfjone",
      //   "activated": true
      // },
      // {
      //   "kilometrageAnnuelMoyen" : "qsdjlmsj",
      //   "nombreDejoursExploitation" : "qsdjldsjlm",
      //   "ModeDeFinancement" : "sdqkmlj",
      //   "ValeurDuVehicule" : "qsdjlmqjs",
      //   "PartDeEmprunt" : "dsqlsjds",
      //   "dureeDuContrat" : "sqdsdqsqdj",
      //   "periodiciteDesRemboursements" : "jqdsjsdqmlsjmqsl",
      //   "tauxIinteret" : "dqsjdsqjsdsq",
      //   "valeurDeRevente" : "kmkqmsldjsqd",
      //   "DureeUtilisationDuVehiculeM" : "qdmsqjlmfjtwo",
      //   "activated": false
      // }
    ],

    formDRemorque: [
      // {
      //   "Immatriculation": "sdnkldnqslkdsq",
      //   "Marque": "sdqhklsdhdsql",
      //   "Modele": "sjkldjqsldks",
      //   "PoidsVide": "sfnklnkldfsdfs",
      //   "PoidsTotalAutorise": "dskfjsdkdjsfsd",
      //   "miseEnCirculation": "fnklfdnkdfsl",
      //   "Categorie": "qsdjlsqmjdsqm"
      // },
      // {
      //   "Immatriculation": "sdnkldnqslkdsq",
      //   "Marque": "sdqhklsdhdsql",
      //   "Modele": "sjkldjqsldks",
      //   "PoidsVide": "sfnklnkldfsdfs",
      //   "PoidsTotalAutorise": "dskfjsdkdjsfsd",
      //   "miseEnCirculation": "fnklfdnkdfsl",
      //   "Categorie": "qsdjlsqmjdsqm"
      // }
    ],
    formDTwoRemorque: [
      // {
      //   "ModeDeFinancement": "dfdklhdklfhd",
      //   "valeurDuVehiculeTracte": "dsjdmlsdjfsdlj",
      //   "periodiciteDesLoyers": "dfkfdsmkfdsm",
      //   "dureeDuContrat": "kfdsmfdsk",
      //   "montantDuLoyer": "dsfklmfdsjfsd",
      //   "valeurOptionnelleAchat": "dkfsmdfksd",
      //   "valeurDeRevente": "mdfjdsml",
      //   "DureeUtilisationDuVehiculeT": "dsfnldfsjldsfk",
      //   "activated": true
      // },
      // {
      //   "ModeDeFinancement": "jmjdlj",
      //   "valeurDuVehiculeTracte": "jmljmljmjl",
      //   "periodiciteDesLoyers": "jdsmjdfsmjldsf",
      //   "dureeDuContrat": "dskmfkdmlejm",
      //   "montantDuLoyer": "sdfjmldsjm",
      //   "valeurOptionnelleAchat": "sdfkmfkds",
      //   "valeurDeRevente": "sdkfmùkù",
      //   "DureeUtilisationDuVehiculeT": "dsfjmlfdsj",
      //   "activated": false
      // }
    ],

    formDChauffeur: []
  },
  mutations: {
    NEW_DATA(state, formDTracteur) {
      state.formDTracteur.push({
        Immatriculation: formDTracteur.Immatriculation,
        Marque: formDTracteur.Marque,
        Modele: formDTracteur.Modele,
        PoidsVide: formDTracteur.PoidsVide,
        PoidsTotalRoulant: formDTracteur.PoidsTotalRoulant,
        PoidsTotalAutorise: formDTracteur.PoidsTotalAutorise,
        miseEnCirculation: formDTracteur.miseEnCirculation
      });
    },
    NEW_DATA_TWO(state, formDTwoTracteur) {
      state.formDTwoTracteur.push({
        kilometrageAnnuelMoyen: formDTwoTracteur.kilometrageAnnuelMoyen,
        nombreDejoursExploitation: formDTwoTracteur.nombreDejoursExploitation,
        ModeDeFinancement: formDTwoTracteur.ModeDeFinancement,
        ValeurDuVehicule: formDTwoTracteur.ValeurDuVehicule,
        PartDeEmprunt: formDTwoTracteur.PartDeEmprunt,
        dureeDuContrat: formDTwoTracteur.dureeDuContrat,
        periodiciteDesRemboursements:
          formDTwoTracteur.periodiciteDesRemboursements,
        tauxIinteret: formDTwoTracteur.tauxIinteret,
        valeurDeRevente: formDTwoTracteur.valeurDeRevente,
        DureeUtilisationDuVehiculeM:
          formDTwoTracteur.DureeUtilisationDuVehiculeM,
        activated: true
      });
    },

    NEW_DATA_REMORQUE(state, formDRemorque) {
      state.formDRemorque.push({
        Immatriculation: formDRemorque.Immatriculation,
        Marque: formDRemorque.Marque,
        Modele: formDRemorque.Modele,
        PoidsVide: formDRemorque.PoidsVide,
        PoidsTotalAutorise: formDRemorque.PoidsTotalAutorise,
        miseEnCirculation: formDRemorque.miseEnCirculation,
        Categorie: formDRemorque.Categorie
      });
    },
    NEW_DATA_REMORQUE_TWO(state, formDTwoRemorque) {
      state.formDTwoRemorque.push({
        ModeDeFinancement: formDTwoRemorque.ModeDeFinancement,
        valeurDuVehiculeTracte: formDTwoRemorque.valeurDuVehiculeTracte,
        periodiciteDesLoyers: formDTwoRemorque.periodiciteDesLoyers,
        dureeDuContrat: formDTwoRemorque.dureeDuContrat,
        montantDuLoyer: formDTwoRemorque.montantDuLoyer,
        valeurOptionnelleAchat: formDTwoRemorque.valeurOptionnelleAchat,
        valeurDeRevente: formDTwoRemorque.valeurDeRevente,
        DureeUtilisationDuVehiculeT:
          formDTwoRemorque.DureeUtilisationDuVehiculeT,
        activated: true
      });
    },

    NEW_DATA_CHAUFFEUR(state, formDChauffeur) {
      state.formDChauffeur.push({
        nomEtPrenom: formDChauffeur.nomEtPrenom,
        identiteNationale: formDChauffeur.identiteNationale,
        NombreDeConducteursAffectes: formDChauffeur.NombreDeConducteursAffectes,
        nombreDeJoursActiviteAffecte:
          formDChauffeur.nombreDeJoursActiviteAffecte,
        tempsDeServiceMensuel: formDChauffeur.tempsDeServiceMensuel,
        nombreDeJoursTravaillesParMois:
          formDChauffeur.nombreDeJoursTravaillesParMois,
        salaireMensuelCorrespondant: formDChauffeur.salaireMensuelCorrespondant,
        PrimesAnnuelles: formDChauffeur.PrimesAnnuelles,
        tauxDeChargesPatronales: formDChauffeur.tauxDeChargesPatronales,
        nombreDeMoisPayes: formDChauffeur.nombreDeMoisPayes
      });
    }
  },
  actions: {
    addNewDataTracteur({ commit }, formDTracteur) {
      commit("NEW_DATA", formDTracteur);
    },
    addNewDataTwoTracteur({ commit }, formDTwoTracteur) {
      commit("NEW_DATA_TWO", formDTwoTracteur);
    },

    addNewDataRemorque({ commit }, formDRemorque) {
      commit("NEW_DATA_REMORQUE", formDRemorque);
    },
    addNewDataTwoRemorque({ commit }, formDTwoRemorque) {
      commit("NEW_DATA_REMORQUE_TWO", formDTwoRemorque);
    },

    addNewDataChauffeurs({ commit }, formDChauffeur) {
      commit("NEW_DATA_CHAUFFEUR", formDChauffeur);
    }
  },
  modules: {}
});

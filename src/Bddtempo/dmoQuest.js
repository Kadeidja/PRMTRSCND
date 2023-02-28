export const dmoquestType = {
    "elements": [
        {
            "type": "text",
            "title": "Repères",
            "choices": "none",
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "fpc"]
        },

        {
            "type": "text",
            "title": "Localisation",
            "choices": "none",
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "fpc"]
        },

        {
            "type": "radio",
            "title": "Type de pose",
            "choices": ["APLLIQUE AVEC DOUBLAGE", "APPLIQUE INT AVEC EMBRASURE", "FEUILLURE INT", "TUNNEL AU NU INT", "FEUILLURE EXT", "DEPOSE TOTALE"],
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "fpc"]
        },

        {
            "type": "none",
            "title": "SÉCURITÉ",
            "description": "le salarié qui ne respecte pas les consignes de sécurité ne pourra en aucun cs se prévaloir de ses manquements pour rechercher la résponsabilité de l'entreprise qui l'emploie",
            "choices": "none",
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "fpc"]
        },

        {
            "type": "none",
            "title": "Repères",
            "choices": "none",
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "fpc"]
        },
        {
            "type": "imagepicker",
            "name": "Materiel",
            "title": "Materiel a prévoir ",
            "description": "Séléctionner les éléments nécessaires",
            "isRequired": true,
            "choices": [
                {
                    "value": "Rien",
                    "text": "Rien"
                },
                {
                    "value": "Harnais de sécurité",
                    "imageLink": "../img/photo18.jpg",
                    "text": "Harnais de sécurité",
                    "title":"Ascenseur"
                },
                {
                    "value": "Echafaudage",
                    "imageLink": "../img/photo19.jpg",
                    "text": "Echafaudage"
                },
                {
                    "value": "Nacelle",
                    "imageLink": "../img/photo20.jpg",
                    "text": "Nacelle"
                },
                {
                    "value": "Gazelle",
                    "imageLink": "../img/photo21.jpg",
                    "text": "Gazelle"
                },
                {
                    "value": "Autre",
                    "text": "Autre"
                }

            ]

        },
        {
            "type": "imagepicker",
            "name": "Accès",
            "title": "Accès ",
            "description": "Séléctionner l'accès",
            "isRequired": true,
            "choices": [
                {
                    "value": "Rien",
                    "text": "Rien"
                },
                {
                    "value": "Ascenseur",
                    "imageLink": "../img/photo23.jpg",
                    "text": "Ascenseur"
                },
                {
                    "value": "Echelle",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Echelle"
                },
                {
                    "value": "Autre",
                    "text": "Autre"
                }

            ]
        },
        {
            "type": "imagepicker",
            "name": "Manutention",
            "title": "Manutention ",
            "description": "Séléctionner les matériaux de manutention",
            "isRequired": true,
            "choices": [
                {
                    "value": "Rien",
                    "text": "Rien"
                },
                {
                    "value": "Ascenseur",
                    "imageLink": "",
                    "text": "Ascenseur"
                },
                {
                    "value": "Echelle",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Echelle"
                },
                {
                    "value": "Autre",
                    "text": "Autre"
                }

            ]
        },
        {
            "type": "comment",
            "name": "autre-comment",
            "title": "Autre",
            "visibleIf": "{Type-de-Fixation}=Autre",
            "isRequired": "true",
            "choicesFromQuestion": "Type-de-Fixation",
            "choicesFromQuestionMode": "selected",
            "showQuestionNumbers": "false"
        },

        // QUESTION 3
        {
            "type": "panel",
            "name": "Type-de-Fixation",
            "title": "Type de Fixation ",
            "description": "Séléctionner les types de fixations",
            "isRequired": true,
            "elements": [
                {
                    "type": "panel",
                    "name": "type-de-fixation",
                    "title": "Type de Fixation",
                    "elements": [{
                        "type": "radiogroup",
                        "name": "les-fixations",
                        "title": "Les Fixations",
                        "isRequired": true,
                        "choices": ["PATTES EQUERRE", "VIS"]
                    }, {
                        "type": "dropdown",
                        "name": "dropdown-pattes-les-fixations",
                        "title": "Selectionner un type de patte",
                        "visibleIf": "{les-fixations}='PATTES EQUERRE'",
                        "choices": ["Vissage Vis Peinture 6*60", "Scellement Mortier", "Scellement Plâtre"]

                    }, {
                        "type": "dropdown",
                        "name": "dropdown-vis-les-fixations",
                        "title": "Selectionner un type de vis",
                        "visibleIf": "{les-fixations}=VIS",
                        "choices": ["VIS1", "VIS2", "VIS3"]
                    }]
                }
            ]
        },
        // QUESTION 4
        {
            "type": "imagepicker",
            "name": "nombre-de-fixation",
            "title": "Nombre de Fixation",
            "description": "Séléctionner le nombre de fixation necessaire",
            "isRequired": true,
            "choices": [
                {
                    "value": "Echelle",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Echelle"
                },
                {
                    "value": "Echelle",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Echelle"
                },
                {
                    "value": "Echelle",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Echelle"
                },
                {
                    "value": "Echelle",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Echelle"
                }
            ]
        },
        // QUESTION 5
        {
            "type": "imagepicker",
            "name": "choix-de-bande-comprime",
            "title": "Choix de bande comprimé",
            "description": "Séléctionner la bande",
            "isRequired": true,
            "choices": [
                {
                    "value": "berner-classe-1",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Berner Classe 1 Ep 15 mm Lg"
                },
                {
                    "value": "Echelle",
                    "imageLink": "../img/photo24.jpg",
                    "text": "Echelle"
                }
            ]
        },
        //QUESTION 6 -> Créer un component calcul pour cette question
        //QUESTION 7 
        {
            "type": "panel",
            "name": "Type-de-Fixation",
            "title": "Type de Fixation ",
            "description": "Séléctionner les types de fixations",
            "isRequired": true,
            "elements": [
                {
                    "type": "panel",
                    "name": "tasseau-de-calages",
                    "title": "Tasseau de calage",
                    "elements": [{
                        "type": "radiogroup",
                        "name": "les-tasseaux-de-calage",
                        "title": "Selectionner",
                        "isRequired": true,
                        "choices": ["OUI", "NON"]
                    },{
                        "type": "dropdown",
                        "name": "dropdown-oui-sens-tasseau-de-calage",
                        "title": "Selectionner le/s sens du tasseau de calage",
                        "visibleIf": "{les-tasseaux-de-calage}=OUI",
                        "choices": ["Traverse BASSE", "Traverse Haute", "Côté Droit", "Côté Gauche", "4 côtés"]
                    },{
                        "type": "dropdown",
                        "name": "dropdown-oui-type-tasseau-de-calage",
                        "title": "Selectionner le type de tasseau de calage",
                        "visibleIf": "{les-tasseaux-de-calage}=OUI",
                        "choices": ["27 X 50 Bois EXO", "28 X 50 Komacel", "RENO 27 X 13", "Autre"]
                    },{
                        "type": "text",
                        "title": "Autre",
                        "choices": "none",
                        "visibleIf": "{dropdown-oui-type-tasseau-de-calage}=Autre",
                        "storeDataAsText": false
                    }]
                }
            ]
        },



    ]
}
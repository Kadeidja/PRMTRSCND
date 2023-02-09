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
            "title": "Materiel a prévoir  ",
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
                    "text": "Harnais de sécurité"
                },
                {
                    "value": "Echafaudage",
                    "imageLink": "./img/photo19.jpg",
                    "text": "Echafaudage"
                },
                {
                    "value": "Nacelle",
                    "imageLink": "../../img/photo20.jpg",
                    "text": "Nacelle"
                },
                {
                    "value": "Gazelle",
                    "imageLink": "../../img/photo21.jpg",
                    "text": "Gazelle"
                },
                {
                    "value": "Autre",
                    "text": "Autre"
                }

            ]
        }
    ]
}
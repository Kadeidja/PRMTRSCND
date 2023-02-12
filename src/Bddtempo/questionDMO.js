export const questType = {
    "elements": [
        {
            "type": "text",
            "title": "Your Name",
            "choices": "none",
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "fpc"]
        },
        // CHECKBOX TYPE OF QUESTION -----------------------
        {
            "type": "checkbox",
            "title": "Choose beetwen thoses colors",
            "choices": ["blue", "grey", "brown"],
            "isRequired": true,
            "colCount": 2,
            "showNoneItem": true,
            "showOtherItem": true,
            "showSelectAllItem": true,
            "separateSpecialChoices": true,
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "planning", "fpc"]
        },
        // RADIO TYPE OF QUESTION -----------------------
        {
            "type": "radio",
            "title": "Choose beetwen thoses colors",
            "choices": ["blue", "grey", "brown"],
            "isRequired": true,
            "colCount": 2,
            "showNoneItem": true,
            "showOtherItem": true,
            "showSelectAllItem": true,
            "separateSpecialChoices": true,
            "storeDataAsText": false,
            "whereYouBelong": ["dmo", "planning", "fpc"]
        },
        // DROPDOWN TYPE OF QUESTION -----------------------
        {
            "type": "dropdown",
            "name": "car",
            "title": "Which is the brand of your car?",
            "isRequired": true,
            "showNoneItem": true,
            "showOtherItem": true,
            "choices": ["Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
        },
        // IMG TYPE OF QUESTION -------------------------
        {
            "type": "imagepicker",
            "name": "animals",
            "title": "Which animals would you like to see in real life?",
            "description": "Please select all that apply.",
            "isRequired": true,
            "choices": [
              {
                "value": "lion",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
                "text": "Lion"
              },
              {
                "value": "giraffe",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
                "text": "Giraffe"
              },
              {
                "value": "red-panda",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
                "text": "Red panda"
              },
              {
                "value": "camel",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
                "text": "Camel"
              }
            ],
            "showLabel": true,
            "multiSelect": true
          },
          // QUESTION ET SOUS QUESTION -------------------------
        {
          "type": "imagepicker",
          "name": "animals",
          "title": "Which animals would you like to see in real life?",
          "description": "Please select all that apply.",
          "isRequired": true,
          "choices": [
            {
              "value": "lion",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
              "text": "Lion"
            },
            {
              "value": "giraffe",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
              "text": "Giraffe"
            },
            {
              "value": "red-panda",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
              "text": "Red panda"
            },
            {
              "value": "camel",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
              "text": "Camel"
            }
          ],
          "showLabel": true,
          "multiSelect": true
        }
    ]
};
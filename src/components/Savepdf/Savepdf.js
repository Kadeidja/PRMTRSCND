import './Savepdf.css' ;
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { SurveyPDF } from "survey-pdf";

const surveyJson = { /* ... */ };

const exportToPdfOptions = { /* ... */ };

const savePdf = function (surveyData) {
  const surveyPdf = new SurveyPDF(surveyJson, exportToPdfOptions);
  surveyPdf.data = surveyData;
  surveyPdf.save();
};
// ...
function Surveytopdf() {
  const survey = new Model(surveyJson);
  
  survey.addNavigationItem({
    id: "pdf-export",
    title: "Save as PDF",
    action: () => savePdf(survey.data)
  });

  return (
    <Survey model={survey} id="surveyContainer" />
  );
}
//https://surveyjs.io/pdf-generator/documentation/get-started-angular

export default Surveytopdf;
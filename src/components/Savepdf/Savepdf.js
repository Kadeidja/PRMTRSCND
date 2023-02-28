import './Savepdf.css' ;
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { SurveyPDF } from "survey-pdf";
import { dmoquestType } from '../../Bddtempo/dmoQuest';

//const surveyJson = { /* ... */ };

const exportToPdfOptions = {
    fontSize: 12
  };

const savePdf = function (surveyData) {
  const surveyPdf = new SurveyPDF(dmoquestType, exportToPdfOptions);
  surveyPdf.data = surveyData;
  surveyPdf.save();
};
// ...
function Surveytopdf() {
  const survey = new Model(dmoquestType);
  
  survey.addNavigationItem({
    id: "pdf-export",
    title: "Générer un PDF",
    action: () => savePdf(survey.data)
  });

  return (
    <Survey model={survey} id="surveyContainer" />
  );
}
//https://surveyjs.io/pdf-generator/documentation/get-started-angular

export default Surveytopdf;


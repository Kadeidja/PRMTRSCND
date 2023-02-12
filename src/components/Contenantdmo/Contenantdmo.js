import './Contenantdmo';
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
// import {questType} from "../../Bddtempo/questionDMO"
import { dmoquestType } from '../../Bddtempo/dmoQuest'; 
import { SurveyPDF } from "survey-pdf";

const exportToPdfOptions = {
    fontSize: 12
  };
  
  const savePdf = function (surveyData) {
    const surveyPdf = new SurveyPDF(dmoquestType, exportToPdfOptions);
    surveyPdf.data = surveyData;
    surveyPdf.save();
  };

function QuestCompo() {
    const survey = new Model(dmoquestType);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    survey.addNavigationItem({
        id: "pdf-export",
        title: "Save as PDF",
        action: () => savePdf(survey.data)
      });
    return (<Survey model={survey} />);
}

export default QuestCompo;
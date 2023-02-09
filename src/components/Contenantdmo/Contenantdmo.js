import './Contenantdmo';
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
// import {questType} from "../../Bddtempo/questionDMO"
import { dmoquestType } from '../../Bddtempo/dmoQuest'; 



function QuestCompo() {
    const survey = new Model(dmoquestType);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

export default QuestCompo;
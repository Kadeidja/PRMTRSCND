import '../../styles/index.css';
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { Chargerfiledata } from "../../Bddtempo/Chargerfile";

function Contenantbdcfunc(){
    const survey = new Model(Chargerfiledata);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    // You can store file id as a content property of a file question value
    // In this case you should handle both `onUploadFiles` and `onDownloadFile` events
    
    survey.onUploadFiles.add(function(survey, options) {
        var formData = new FormData();
        options.files.forEach(function(file) {
            formData.append(file.name, file);
        });
        var xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          "https://api.surveyjs.io/private/Surveys/uploadFiles?accessKey=<your_access_key>"
        );
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);                                           
            options.callback("success",
                options.files.map(function(file) {
                    return { file: file, content: data[file.name] };
                })
            );
        };
        xhr.send(formData);
    });
    
    function detectIEOrEdge() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        var trident = ua.indexOf("Trident/");
        var edge = ua.indexOf("Edge/");
        return edge > 0 || trident > 0 || msie > 0;
    }
    
    survey.onDownloadFile.add(function(survey, options) {
        var xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          "https://api.surveyjs.io/private/Surveys/files?name=" + options.content
        );
         
         xhr.onloadstart = function(ev) {
            xhr.responseType = "blob";
         }
         xhr.onload = function () {
                var file;
                if (detectIEOrEdge()){
                    file = new Blob([xhr.response], options.fileValue.name, { type: options.fileValue.type });
                }
                else {         
                    file = new File([xhr.response], options.fileValue.name, { type: options.fileValue.type });
               }
               var reader = new FileReader();
               reader.onload = function(e) {
                   options.callback("success", e.target.result);
               };
               reader.readAsDataURL(file);
         };
        xhr.send();
        // You can use fetch for modern browsers
        //fetch("https://api.surveyjs.io/private/Surveys/files?name=" + options.content)
        //  .then(function(response) {
        //    return response.blob();
        //  })
        //  .then(function(blob) {
        //    var reader = new FileReader();
        //    reader.onload = function(e) {
        //        options.callback("success", e.target.result);
        //    };
        //    reader.readAsDataURL(new File([blob], options.fileValue.name, { type: options.fileValue.type }));
        //    //options.callback("success", URL.createObjectURL(blob));
        //  });
    });
    
    
    
    return (<Survey model={survey} />);
}
export default Contenantbdcfunc;

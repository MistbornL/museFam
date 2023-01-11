import React from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { model } from "./model";
import { Navbar } from "../../Navigation/Navbar";
StylesManager.applyTheme("defaultV2");
function Survey() {
  const survey = new Model(model);

  survey.onComplete.add(function (result) {
    console.log(result.data);
  });

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Survey model={survey} style={{ width: "300px" }} />
      </main>
    </div>
  );
}
export default Survey;

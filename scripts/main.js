import { OwnsJeansChoices } from "./jeansComponent.js";
import { PageFooter } from "./footerComponent.js";
import { LocationTypeChoices } from "./urbanDweller.js";
import { SaveSubmission } from "./SaveSubmission.js";
import { SubmissionList } from "./submissions.js";

const container = document.querySelector("#container");
const footer = document.querySelector("#footer");

const render = async () => {
  const jeansOwnershipHTML = OwnsJeansChoices();
  const locationsHTML = await LocationTypeChoices();
  const footerHTML = PageFooter();
  const saveButton = await SaveSubmission();
  const submissionList = await SubmissionList();

  container.innerHTML = `
  ${jeansOwnershipHTML}
  ${locationsHTML}
  ${saveButton}
  ${submissionList}
  `;

  footer.innerHTML = footerHTML;
};

document.addEventListener("newSubmissionCreated", render);

render();

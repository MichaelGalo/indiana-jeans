import { setOwnsBlueJeans } from "./TransientState.js";

export const OwnsJeansChoices = () => {
  document.addEventListener("change", handleOwnershipChange);

  let jeansHtml = "<h2>Do you own any jeans?</h2>";
  jeansHtml += "<input type='radio' name='ownsJeans' value='true' /> Yes";
  jeansHtml += "<input type='radio' name='ownsJeans' value='false' /> No";
  return jeansHtml;
};

/*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
  if (changeEvent.target.name === "ownsJeans") {
    const convertedToBoolean = JSON.parse(changeEvent.target.value);
    setOwnsBlueJeans(convertedToBoolean);
  }
};

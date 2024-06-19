// Set up the transient state data structure and provide initial values
const transientState = {
  ownsBlueJeans: false,
  socioLocationId: 0,
};

// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
  transientState.ownsBlueJeans = chosenOwnership;
  console.log(transientState);
};

// Function to convert transient state to permanent state

export const setSocioLocationId = (chosenLocation) => {
  transientState.socioLocationId = chosenLocation;
  console.log(transientState);
};

// time to send the transient State over to the API with a POST
// function to convert transient State to permanent state
export const saveSurveySubmission = async () => {
  // create a postOptions object
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  // make the request
  const response = await fetch(
    "http://localhost:8088/submissions",
    postOptions
  );

  // Define your very own event
  const customEvent = new CustomEvent("newSubmissionCreated");

  // Broadcast, or dispatch, the event
  document.dispatchEvent(customEvent);
};

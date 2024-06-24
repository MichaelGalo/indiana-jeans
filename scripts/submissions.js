export const SubmissionList = async () => {
  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();

  return submissions
    .map((submission) => {
      return `<section class="submission">
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area type foreign key?${submission.socioLocationId}</div>
    </section>`;
    })
    .join("");
};

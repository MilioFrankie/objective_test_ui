import React from "react";

function JobsTableFooter({ data }) {
  let applicantsCount = 0;
  let skillSet = new Set();

  data.allJobs.forEach((job) => {
    applicantsCount += job.applicants.length;

    job.applicants.forEach((applicant) =>
      applicant.skills.forEach((skill) => skillSet.add(skill.name))
    );
  });

  return (
    <tfoot>
      <tr>
        <td colSpan="6">
          {applicantsCount} Applicants, {skillSet.size} Unique Skills
        </td>
      </tr>
    </tfoot>
  );
}

export default JobsTableFooter;

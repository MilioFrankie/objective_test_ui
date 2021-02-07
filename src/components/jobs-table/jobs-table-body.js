import React from "react";

function JobsTableBody({ data }) {
  return (
    <tbody>
      {data.allJobs.map((job) => {
        let jobNameRowSpan = 0;
        job.applicants.forEach((applicant) =>
          applicant.skills.forEach(() => jobNameRowSpan++)
        );
        return (
          <React.Fragment key={job.id}>
            {job.applicants.map((applicant, index) => {
              const firstSkill = applicant.skills[0];
              const length = applicant.skills.length;
              const modSkills = applicant.skills.slice(1);
              return (
                <React.Fragment key={applicant.id}>
                  <tr>
                    {index === 0 && (
                      <td rowSpan={jobNameRowSpan} className="job-name">
                        {job.name}
                      </td>
                    )}
                    <td rowSpan={length} className="applicant-name">
                      {applicant.name}
                    </td>
                    <td rowSpan={length}>
                      <a href={applicant.email}>{applicant.email}</a>
                    </td>
                    <td rowSpan={length}>
                      <a href={applicant.website}>{applicant.website}</a>
                    </td>
                    <td>{firstSkill.name}</td>
                    <td rowSpan={length}>{applicant.coverLetter}</td>
                  </tr>
                  {modSkills.map((skill) => (
                    <tr key={skill.id}>
                      <td>{skill.name}</td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </tbody>
  );
}

export default JobsTableBody;

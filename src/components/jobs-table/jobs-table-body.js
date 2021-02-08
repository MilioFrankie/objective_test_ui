import React from "react";

function JobsTableBody({ data }) {
  return (
    <tbody>
      {data.allJobs.map((job) => {
        let totalSkillsPerJob = 0;
        job.applicants.forEach(
          (applicant) => (totalSkillsPerJob += applicant.skills.length)
        );
        return (
          <React.Fragment key={job.id}>
            {job.applicants.map((applicant, index) => {
              const firstSkill = applicant.skills[0];
              const remainingSkills = applicant.skills.slice(1);
              const skillsCount = applicant.skills.length;
              return (
                <React.Fragment key={applicant.id}>
                  <tr>
                    {index === 0 && (
                      <td rowSpan={totalSkillsPerJob} className="job-name">
                        {job.name}
                      </td>
                    )}
                    <td rowSpan={skillsCount} className="applicant-name">
                      {applicant.name}
                    </td>
                    <td rowSpan={skillsCount}>
                      <a href={`mailto:${applicant.email}`}>{applicant.email}</a>
                    </td>
                    <td rowSpan={skillsCount}>
                      <a href={`http://${applicant.website}/`}>{applicant.website}</a>
                    </td>
                    <td>{firstSkill.name}</td>
                    <td rowSpan={skillsCount}>{applicant.coverLetter}</td>
                  </tr>
                  {remainingSkills.map((skill) => (
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

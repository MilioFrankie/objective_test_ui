import React from "react";
import { useQuery, gql } from "@apollo/client";
import JobsTableBody from './jobs-table-body'

const JOBS = gql`
  {
    allJobs {
      name
      id
      applicants {
        id
        name
        email
        website
        coverLetter
        skills {
          id
          name
        }
      }
    }
  }
`;

function JobsTable() {
  const { loading, error, data } = useQuery(JOBS);
  const headers = [
    "Job",
    "Applicant Name",
    "Email Address",
    "Website",
    "Skills",
    "Cover Letter Paragraph",
  ];

  if(error) return <h1>Ooop something went wrong {error} </h1>
  if(loading) return <h1>...loading</h1>

  return (
    <table className="job-applicants">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <JobsTableBody data={data}/>
      <tfoot>
        <tr>
          <td colSpan="6"> x Applicants, x Unique Skills</td>
        </tr>
      </tfoot>
    </table>
  );
}
export default JobsTable;

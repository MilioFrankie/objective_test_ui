import React from "react";
import { useQuery, gql } from "@apollo/client";
import JobsTableBody from "./jobs-table-body";
import JobsTableFooter from "./jobs-table-footer";
import JobsTableHeader from "./jobs-table-header";

export const JOBS = gql`
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

  if (error) return <h1>Ooops something went wrong {error} </h1>;
  if (loading) return <h1>...loading</h1>;

  return (
    <table className="job-applicants">
      <JobsTableHeader />
      <JobsTableBody data={data} />
      <JobsTableFooter data={data} />
    </table>
  );
}
export default JobsTable;

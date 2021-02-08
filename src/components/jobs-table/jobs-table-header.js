import React from "react";

function JobsTableHeader() {
  const headers = [
    "Job",
    "Applicant Name",
    "Email Address",
    "Website",
    "Skills",
    "Cover Letter Paragraph",
  ];

  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

export default JobsTableHeader;

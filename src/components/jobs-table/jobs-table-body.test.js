import { render, screen } from "@testing-library/react";
import JobsTableBody from "./jobs-table-body";
import { mockData } from "./jobs-table.test";

describe("<JobsTableBody />", () => {
  it("renders table body with first child contianing text: 'Web Developer'.", () => {
    render(
      <table>
        <JobsTableBody data={mockData} />
      </table>
    );
    const body = screen.getAllByRole("row");
    expect(body[0].firstChild.textContent).toContain("Web Developer");
  });

  it("renders table body with 9 cells: [jobName, applicantName, email, website, coverLetter, skillx4]", () => {
    render(
      <table>
        <JobsTableBody data={mockData} />
      </table>
    );
    const body = screen.getAllByRole("cell");
    expect(body).toHaveLength(9);
  });
});

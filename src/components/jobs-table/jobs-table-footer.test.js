import { render, screen } from "@testing-library/react";
import { mockData } from "./jobs-table.test";
import JobsTableFooter from "./jobs-table-footer";

describe("<JobsTableFooter />", () => {
  it("renders table cell with text '1 Applicants, 3 Unique Skills'.", () => {
    render(
      <table>
        <JobsTableFooter data={mockData} />
      </table>
    );
    const footer = screen.getByRole("row");
    expect(footer.textContent).toContain("1 Applicants, 3 Unique Skills");
  });
});

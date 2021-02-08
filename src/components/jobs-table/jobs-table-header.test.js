import { render, screen } from "@testing-library/react";
import JobsTableHeader from "./jobs-table-header";

describe("<JobsTableHeader />", () => {
  it("renders six headers", () => {
    render(
      <table>
        <JobsTableHeader />
      </table>
    );
    const headers = screen.getAllByRole("columnheader");
    expect(headers.length).toBe(6);
  });
});

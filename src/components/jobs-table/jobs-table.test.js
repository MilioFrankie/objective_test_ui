import { act, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import JobsTable, { JOBS } from "./index";

export const mockData = {
  allJobs: [
    {
      applicants: [
        {
          coverLetter:
            "Lorem ipsum Dolore laboris dolor non adipisicing qui consequat adipisicing tempor eu nulla elit in anim do aute in nulla velit laboris consectetur laborum ex Ut cillum officia in veniam Duis sint occaecat consectetur cillum sint ea cupidatat in adipisicing.",
          email: "katarina@katarinamills.com",
          id: "4",
          jobId: "1",
          name: "Katarina Mills",
          website: "katarinamills.com",
          skills: [
            {
              id: "9",
              name: "HTML",
            },
            {
              id: "8",
              name: "Python",
            },
            {
              id: "7",
              name: "C",
            },
            {
              id: "2",
              name: "HTML",
            },
          ],
        },
      ],
      id: "1",
      name: "Web Developer",
    },
  ],
};

const mocks = [
  {
    request: {
      query: JOBS,
    },
    result: {
      data: mockData,
    },
  },
];

describe("<JobsTable />", () => {
  it("renders without error", () => {
    render(
      <MockedProvider mocks={mocks}>
        <JobsTable />
      </MockedProvider>
    );
    const body = screen.getByRole("heading");
    expect(body.textContent).toContain("...loading");
  });

  it("should render table with three rowgroups: [thead, tbody, tfooter]", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <JobsTable />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const table = screen.getAllByRole("rowgroup");

    expect(table).toHaveLength(3);
  });
});

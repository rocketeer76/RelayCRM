import { describe, expect, it } from "vitest";
import { completionRate, isOverdue } from "../../src/lib/domain";
describe("follow ups", () => {
  it("finds overdue work", () =>
    expect(
      isOverdue(
        { dueAt: new Date("2024-01-01"), completedAt: null },
        new Date("2024-01-02"),
      ),
    ).toBe(true));
  it("calculates completion", () =>
    expect(
      completionRate([
        { dueAt: null, completedAt: new Date() },
        { dueAt: null, completedAt: null },
      ]),
    ).toBe(0.5));
});

import { expect, test } from "@playwright/test";
test("shows the RelayCRM dashboard", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: /Add company/i }),
  ).toBeVisible();
});

/**
 * Helper utility to calculate dynamic experience starting from November 2025.
 * Format examples:
 * - Under 12 months: "10 months"
 * - Exactly 12 months: "1 year"
 * - 15 months (1 yr 3 mos): "1.2 years"
 * - 24 months: "2 years"
 */
export function getDynamicExperienceText(startDateStr: string = '2025-11-01'): string {
  const startDate = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;

  if (totalMonths < 12) {
    return `${totalMonths} month${totalMonths === 1 ? '' : 's'}`;
  }

  if (months === 0) {
    return `${years} year${years === 1 ? '' : 's'}`;
  }

  // Calculate formatted decimal years (e.g. 15 months / 12 = 1.25 -> "1.25" formatted to 1 decimal place)
  const decimalYears = (totalMonths / 12).toFixed(1);
  return `${decimalYears} years`;
}

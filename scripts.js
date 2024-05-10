
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
        const entries = new FormData(event.target);
        const { dividend, divider } = Object.fromEntries(entries);


// Validate inputs
if (!dividend.trim() || !divider.trim()) {
  throw new Error("Division not performed. Both values are required in inputs. Try again.");
}

  const numDividend = Number(dividend);
  const numDivider = Number(divider);

  // Check for non-numeric inputs
  if (isNaN(numDividend) || isNaN(numDivider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    document.body.className = 'critical-error'; // Style for critical errors
    throw new Error("Non-numeric input provided");
}
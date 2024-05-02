const buttons = document.querySelectorAll("button");
const images = document.querySelectorAll("img");
const spansInP = document.querySelectorAll("p span");
const spansInEm = document.querySelectorAll("em span");
const spansInTitles = document.querySelectorAll("h2 span");
const comments = document.querySelectorAll(".comments .block");
const steps = document.querySelectorAll(".results .step");

function goToOfferPage() {
  window.location.href = "https://trueprofits360.com/immediate_momentum_v2/ca/en/";
}

buttons.forEach(btn => {
  btn.addEventListener("click", goToOfferPage);
});
images.forEach(img => {
  img.addEventListener("click", goToOfferPage);
});
spansInP.forEach(span => {
  span.addEventListener("click", goToOfferPage);
});
spansInEm.forEach(span => {
  span.addEventListener("click", goToOfferPage);
});
spansInTitles.forEach(span => {
  span.addEventListener("click", goToOfferPage);
});
comments.forEach(comment => {
  comment.addEventListener("click", goToOfferPage);
});
steps.forEach(step => {
  step.addEventListener("click", goToOfferPage);
});

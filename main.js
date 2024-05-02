document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');
  const images = document.querySelectorAll('img');
  const links = document.querySelectorAll('a');
  const spansInP = document.querySelectorAll('p span');
  const spansInEm = document.querySelectorAll('em span');
  const spansInTitles = document.querySelectorAll('h2 span');
  const comments = document.querySelectorAll('.comments .block');
  const steps = document.querySelectorAll('.results .step');
  
  function goToOfferPage() {
    window.open('https://trueprofits360.com/immediate_momentum_v2/ca/en/', '_blank');
  }
  
  const elementsToClick = [
    ...buttons,
    ...images,
    ...links,
    ...spansInP,
    ...spansInEm,
    ...spansInTitles,
    ...comments,
    ...steps
  ];
  
  elementsToClick.forEach(element => {
    element.addEventListener('click', goToOfferPage);
  });
});

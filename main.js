let offerPageUrl = "https://trueprofits360.com/immediate_momentum_v2/ca/en/";
let clickTracked = false;

function trackClick() {
  if (clickTracked) {
    return;
  }
  
  const currentSearchParams = new URLSearchParams(window.location.search);
  const updatedParams = new URLSearchParams();
  
  let subIndex = 0;
  for (const [key, value] of currentSearchParams) {
    if (key.includes('sub') && !isNaN(Number(key.slice(3)))) {
      const subNumber = key.match(/sub(\d+)/)[1];
      
      updatedParams.append(`sub${subNumber}`, value);
    } else {
      const newKey = subIndex === 0 ? 'sub' : `sub${subIndex}`;
      
      updatedParams.append(newKey, value);
      subIndex++;
    }
  }
  
  const trackerUrl = `https://imgs-cdn.net/trk?a=${window.location.hostname}&ev=lpclick&${updatedParams.toString()}`;
  
  fetch(trackerUrl)
    .then(response => {
      if (response.ok) {
        console.log('Click tracked successfully');
      } else {
        console.error('Failed to track click');
      }
    })
    .catch(error => {
      console.error('Error tracking click:', error);
    });
  
  clickTracked = true;
}

fetch(`https://red.darmona.org/offer?domain=${window.location.host}`)
  .then(response => response.json())
  .then(data => {
    if (data.link) {
      offerPageUrl = data.link;
    }
  })
  .catch(error => {
    console.error('Failed to fetch the offer page URL:', error);
  });

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');
  const images = document.querySelectorAll('img');
  const links = document.querySelectorAll('a');
  const spansInP = document.querySelectorAll('p span');
  const spansInEm = document.querySelectorAll('em span');
  const spansInTitles = document.querySelectorAll('h2 span');
  const comments = document.querySelectorAll('.comments .block');
  const steps = document.querySelectorAll('.results .step');
  
  function goToOfferPage(e) {
    e.preventDefault();
    trackClick();
  
    const currentSearchParams = window.location.search;
    const referrer = `referrer=${window.location.hostname}`;
  
  
    if (currentSearchParams) {
      const separator = offerPageUrl.includes('?') ? '&' : '?';
    
      offerPageUrl += separator + currentSearchParams.slice(1);
      offerPageUrl += '&' + referrer;
    } else {
      offerPageUrl += `?${referrer}`;
    }
    
    window.open(offerPageUrl, '_blank');
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

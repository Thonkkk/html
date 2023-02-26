const form = document.querySelector('form');
const assetIdInput = document.querySelector('#assetId');
const getInfoButton = document.querySelector('#getInfo');
const assetInfoDiv = document.querySelector('#assetInfo');

getInfoButton.addEventListener('click', () => {
  const assetId = assetIdInput.value;
  if (assetId) {
    fetch(`https://api.roblox.com/marketplace/productinfo?assetId=${assetId}`)
      .then(response => response.json())
      .then(data => {
        assetInfoDiv.innerHTML = `
          <h2>${data.Name}</h2>
          <p><strong>Description:</strong> ${data.Description}</p>
          <p><strong>Price:</strong> ${data.PriceInRobux.toLocaleString()} Robux</p>
          <p><strong>Is Limited:</strong> ${data.IsLimited ? 'Yes' : 'No'}</p>
          <p><strong>Remaining:</strong> ${data.Remaining.toLocaleString()}</p>
          <p><strong>Owner:</strong> ${data.Creator.Name}</p>
        `;
      })
      .catch(error => {
        assetInfoDiv.textContent = 'Error retrieving asset info. Please check the asset ID and try again.';
        console.error(error);
      });
  } else {
    assetInfoDiv.textContent = 'Please enter an asset ID.';
  }
});

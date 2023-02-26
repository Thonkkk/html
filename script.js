function getAssetInfo() {
  var assetId = document.getElementById("assetId").value;
  if (assetId !== "") {
    var url = "https://api.roblox.com/marketplace/productinfo?assetId=" + assetId;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var assetInfo = document.getElementById("assetInfo");
        assetInfo.innerHTML = "<h2>" + data.Name + "</h2>";
        assetInfo.innerHTML += "<p>Asset ID: " + data.ProductId + "</p>";
        assetInfo.innerHTML += "<p>Creator: " + data.Creator.Name + "</p>";
        assetInfo.innerHTML += "<p>Description: " + data.Description + "</p>";
        assetInfo.innerHTML += "<p>Price: " + data.PriceInRobux + " Robux</p>";
      })
      .catch(error => console.error(error));
  }
}

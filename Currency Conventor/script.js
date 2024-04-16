console.log("Working");

const populate = async (value, currency) => {
  let myStr = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_gtuqFNVMlHZwPg77sxWZavk0P0F7hgucNWAePDSp&base_currency=" +currency;

  let response = await fetch(url);
  let rJson = await response.json();
  console.log(rJson);
document.querySelector(".output").style.display = "block";

for (let keys of Object.keys(rJson["data"])) {
  myStr += `        
    <tr>
    <td>${keys}</td>
    <td>${rJson["data"][keys]["code"]}</td>
    <td>${rJson["data"][keys]["value"] * value}</td>
    </tr>
    `;
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
}
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});

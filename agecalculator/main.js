document.getElementById("YourAge").innerHTML =
  "Please Set Your BirthDate to Caluclate your Age";
function getYourBirthDate() {
  let date = new Date();
  let BirthDate = document.getElementsByTagName("input")[0].value;
  localStorage.setItem("BirthDate", JSON.stringify(BirthDate));
  let GetFromLocal = JSON.parse(localStorage.getItem("BirthDate"));
  let YourAge =
    GetFromLocal[0] + GetFromLocal[1] + GetFromLocal[2] + GetFromLocal[3];
  document.getElementById("YourAge").innerHTML =
    "Your Age is " + (date.getFullYear() - YourAge) + " Years Old";
}

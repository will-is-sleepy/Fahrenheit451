// Fahrenheit 451 Quiz by Will

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let job = document.getElementById("job-in").value.toLowerCase;
  if (job === "Fireman") {
    let msg = `That answer is correct`;
  } else {
    let msg = `That answer is incorrect`;
  }
  let death = document.getElementById("death-in").value.toLowerCase;
  if (death === "Mildred") {
    let msg = `That answer is correct`;
  } else {
    let msg = `That answer is incorrect`;
  }
  let obsession = document.getElementById("obsession-in").value.toLowerCase;
  if (obsession === "Television") {
    let msg = `That answer is correct`;
  } else {
    let msg = `That answer is incorrect`;
  }
  let betrayal = document.getElementById("betrayal-in").value.toLowerCase;
  if (betrayal === "Mildred") {
    let msg = `That answer is correct`;
  } else if (betrayal === "Beatty") {
    let msg = `That answer is correct`;
  } else {
    let msg = `That answer is incorrect`;
  }
}

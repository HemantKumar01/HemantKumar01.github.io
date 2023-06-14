const subjectSelect = document.querySelector("#selectSubject");
const table = document.querySelector(".table");

subjectSelect.onchange = (e) => {
  var subject = subjectSelect.value;
  table.innerHTML = "";
  if (subject == "none") {
    table.style.visibility = "hidden";
    return;
  }
  var tableBodyHTML = "";
  for (var doc of data[subject]) {
    tableBodyHTML += `
    <div class="row flexbox">
        <div class="name"><b>Name: </b>${doc.name}</div>
        <div class="topic"><b>Topic: </b>${doc.topic}</div>
        <div class="link"><a href="${doc.url}">Click Here</a></div>
    </div>
    `;
  }
  table.innerHTML = tableBodyHTML;
  table.style.visibility = "visible";
};

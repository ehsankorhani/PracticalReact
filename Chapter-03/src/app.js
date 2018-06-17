const admin = {
  firstName: "Ehsan",
  lastName: "Korhani"
}

const curentYear = new Date().getFullYear();

const getFullName = (person) => {
  if (person.firstName && person.lastName) {
    return person.firstName + " " + person.lastName;
  } else {
    return "Anonymous";
  }
}

const template  = (
  <div>
    <h2>JSX Tutorial</h2>
    <div className="content-body">
      <p>Author: {getFullName(admin)}</p>
      {(curentYear >= 2018) ? <div>{curentYear}</div> : "old post"}
    </div>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
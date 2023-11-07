const dateSpan = document.querySelectorAll(".currentDate");
const currDay = document.querySelectorAll(".currDay");
const currMonth = document.querySelectorAll(".currMonth");
const currYear = document.querySelectorAll(".currYear");
const publicDate = document.querySelectorAll('.publicDate')

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('ch-ch', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
})

dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  );
});

currDay.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de", {
    day: "numeric",
  }
  );
});

currMonth.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de", {
    month: "long",
  }
  );
});

currYear.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de", {
    year: "numeric",
  }
  );
});



let rand = Math.floor(Math.random() * (15 - 5) + 5);
$('.data-end-place').text(rand)
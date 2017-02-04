function DatePicker(divID, callback) {
  this.divID = divID;
  this.callback = callback;
	this.daysInMonth = function(anyDateInMonth) {
  	return new Date(
  		anyDateInMonth.getFullYear(),
          anyDateInMonth.getMonth() + 1,
          0
      ).getDate();
  }

	this.firstDayInMonth = function(anyDateInMonth) {
  	return new Date(
  		anyDateInMonth.getFullYear(),
          anyDateInMonth.getMonth(),
          1
      ).getDay();
  }

  this.nextMonth = function() {
    const newDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, this.date.getDate());
    this.date = newDate;
    this.render();
  }

  this.prevMonth = function() {
    const newDate = new Date(this.date.getFullYear(), this.date.getMonth()-1, this.date.getDate());
    this.date = newDate;
    this.render();
  }

  this.updateDate = function(e) {
    const targetDay = e.target.closest("td").dataset.cellDay;
    const newDate = new Date(this.date.getFullYear(), this.date.getMonth(), targetDay);
    this.date = newDate;
    this.callback(this.divID, {
      day: this.date.getDate(),
      month: this.date.getMonth(),
      year: this.date.getFullYear()
    });
    this.render();
  }

	this.render = function(date=this.date) {
		const divContainer = document.getElementById(this.divID);
    divContainer.innerHTML = "";
    const nDays = this.daysInMonth(date);
		const fDay = this.firstDayInMonth(date);
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
		const table = document.createElement("table");
    const activeDay = date.getDate();
    const leftButton = document.createElement("button");
    const rightButton = document.createElement("button");
    const calTitle = document.createElement("h2");
    calTitle.innerText = month + " / " + day + " / " + year;
    leftButton.innerText = "<";
    leftButton.onclick = this.prevMonth.bind(this);
    rightButton.onclick = this.nextMonth.bind(this);
    rightButton.innerText = ">";
    divContainer.appendChild(calTitle);
    divContainer.appendChild(leftButton);
    divContainer.appendChild(rightButton);

    for (let i = 0; i < 42; i++) {
				if (i % 7 === 0) {
					const tr = document.createElement("tr");
					table.appendChild(tr);

					for(let x = i; x <= i + 6; x++) {
						const td = document.createElement("td");
						td.className = "day";
            td.onclick = this.updateDate.bind(this);

            if (x >= fDay) {
              if (x < nDays + fDay) {
                const span = document.createElement("span");
                const cellDay = x + 1 - fDay;
                span.innerText = cellDay;
                td.dataset.cellDay = cellDay;
                if (activeDay === cellDay){
                  td.className = td.className + " active";
                }
                td.appendChild(span);
              }
            }
						tr.appendChild(td);
					}
				}
		}
		divContainer.appendChild(table);
	  this.date = date; 
  }
}

// var cal = new DatePicker("calendar-container", function(id, date){
// });
// cal.render(new Date());





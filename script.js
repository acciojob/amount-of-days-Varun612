function daysOfAYear(year) {
	let days=0
	if(year%400===0 || (year%4===0 && year%100!==0)) {
		days=366
	}
	else {
		days=365
	}
	return days
}

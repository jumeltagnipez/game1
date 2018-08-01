
document.getElementById('input').onchange = () => {
	// output.innerHTML = " ";

  const output=document.getElementById('output');

    const limit=document.getElementById('input').value;
    let giftString='';

// for (let i = 0; i < limit; i++) {
	for (let x = 1; x < limit; x++) {
		giftString=gifts[x]+'<br>'+giftString;
		output.innerHTML +='On the '+(days[x])+' day of Christmas my true love sent to me:<br> '+ giftString;
		output.innerHTML += "<hr>";
	}
// }
}


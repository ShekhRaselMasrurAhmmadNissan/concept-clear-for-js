function handleSubmit(e) {
	e.preventDefault();
	const phoneNumber = e.target.phoneNumber.value;
	console.log(phoneNumber);
	if (phoneNumber.startsWith('017')) {
		alert('This is a GrameenPhone Number');
	} else if (phoneNumber.startsWith('019')) {
		alert('This is Banglalink Number');
	} else if (phoneNumber.startsWith('015')) {
		alert(`This is a Teletalk number.`);
	} else {
		alert('I do not know this Number');
	}
}

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const fieldValue = document.getElementById('targetValue');
const incrementButtonAction = () => {
	const val = parseInt(fieldValue.value);
	const updateValue = val + 1;
	if (updateValue > 10) {
		alert('The value is too high to handle');
		return;
	}
	fieldValue.value = updateValue;
};
const decrementButtonAction = () => {
	const val = parseInt(fieldValue.value);
	const updateValue = val - 1;
	if (updateValue < 0) {
		alert('The value is too low.');
		return;
	}
	fieldValue.value = updateValue;
};

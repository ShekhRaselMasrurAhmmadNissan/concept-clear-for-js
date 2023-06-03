function handleSubmit(e) {
	e.preventDefault();
	const phoneNumber = e.target.phoneNumber.value;
	console.log(phoneNumber);
	if (phoneNumber.startsWith('017')) {
		alert('This is a GrameenPhone Number');
	} else if (phoneNumber.startsWith('019')) {
		alert('This is Banglalink Number');
	} else {
		alert('I do not know this Number');
	}
}

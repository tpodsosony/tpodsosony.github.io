/********f************
    
	Project 4 Javascript
	Name:
	Date:
	Description:

*********************/

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;


}

function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("contactError error");
    console.log("hello");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
        console.log("hello");
	}
}

function formFieldHasInput(fieldElement) {
	// Check if the text field has a value
	if (fieldElement.value == null || fieldElement.value.trim() == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

function formHasErrors()
{
    let errorFlag = false;

	let requiredFields = ["name", "phone", "email"];

	//Verifying
	for(let i = 0; i<requiredFields.length; i++){
		let textField = document.getElementById(requiredFields[i]);
		

		if(!formFieldHasInput(textField))
		{
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
			if(!errorFlag)	
			{
				textField.focus();
				textField.select();	
			}
			errorFlag = true;
		}
	}
   
    //Veryfying email field
	let regex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
	let emailField = document.getElementById("email");
	if(!regex.test(emailField.value))
	{
		document.getElementById("emailformat_error").style.display = "block";
		if(!errorFlag)
		{
            emailField.select();
            emailField.focus();
			errorFlag = true;
		}
	}

    //Veryfying phone field
	regex = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i)
	let phoneField = document.getElementById("phone");
	if(!regex.test(phoneField.value))
	{
		document.getElementById("phoneformat_error").style.display = "block";
		if(!errorFlag)
		{
            phoneField.select();
            phoneField.focus();
			errorFlag = true;
		}
	}
    return errorFlag;

}

function load() {

	// Add event listener for the form submit
	document.getElementById("contactform").addEventListener("submit", validate);
	document.getElementById("contactform").reset();
	document.getElementById("contactform").addEventListener("reset", resetForm);
}

function resetForm(e) {
	// Confirm that the user wants to reset the form.
    console.log("Whats going on here");
	if (confirm('Clear order?')) {
		// Ensure all error fields are hidden
		hideErrors();

		document.getElementById("name").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

document.addEventListener("DOMContentLoaded", load);
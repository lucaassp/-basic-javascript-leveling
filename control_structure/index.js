/*Creating a script that simulates a password verification system. 
The user must enter a password and the system must verify that it meets the following 

Criteria:
-Must be at least 8 characters long.
-Must contain at least one upper case letter.
-It must contain at least one lowercase letter.
-It must contain at least one number.

If the password meets all criteria, the system should display a success message. 
Otherwise, it should display an error message indicating which criteria was not met.*/
let password = window.prompt('Inform your password');

if (password.length < 8) {
  console.log('ERRO: Password must contain 8 characters')
} else if (!/[A-Z]/.test(password)) {
  console.log('ERRO: Your password must contain capital letters')
} else if (!/[a-z]/.test(password)) {
  console.log('ERRO: Your password must contain a lowercase letter')
} else if (!/[0-9]/.test(password)) {
  console.log('Your password must contain a number')
} else {
  console.log('Valid password!')
} 
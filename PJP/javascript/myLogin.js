function startWithU(targ){
	if( (targ.startsWith("u", 0) ||targ.startsWith("U", 0)) == true )
	{
		return true;
	}
	else return false;
		
};

function startWithA(targ){
	if( (targ.startsWith("a", 0) ||targ.startsWith("A", 0)) == true )
	{
		return true;
	}
	else return false;

};
function validateform(){
	var temp = document.getElementById("user_id").value;
	if(temp.length<8) 
	{
		document.getElementById("user_val").innerHTML = "Error : Enter 8 character User ID.";
		document.getElementById("login_form").reset();
		return false;
		
	}
	var sU = startWithU(temp);
	var sA = startWithA(temp);
	if( (sU || sA) == false )
	{
		document.getElementById("user_val").innerHTML = "Error : User ID must start with U or A.";
		document.getElementById("login_form").reset();
		return false;
	}



		
	/*else { 
	
	document.getElementById("login").addEventListener("submit", (event) => {
	var ans = document.getElementById("user_id").value;
	ans = ans + "<br>" + document.getElementById("email_id").value;
	console.log(ans);
	document.getElementById("text_in").innerHTML = ans;
    event.preventDefault();
});
	}*/
};

$(document).ready(function () {
    // Cloning Qualification Section


    $('#btnAddqual').click(function () {
        var num = $('.clonedqual').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedqual' + num).clone().attr('id', 'clonedqual' + newNum);




        $('.clonedqual').last().append(newSection)

        $('#btnDelqual').prop('disabled', false);

        if (newNum == 3)
            $('#btnAddqual').prop('disabled', true);


        let st = document.querySelectorAll('input[name="startDate[]"]');
        let ed = document.querySelectorAll('input[name="endDate[]"]');


        for (let i = 0; i < 11; i++) {
            st[i].max = new Date().toISOString().split("T")[0];
            ed[i].max = new Date().toISOString().split("T")[0];
            st[i].onchange = function () {
                var input = ed[i];
                input.min = st[i].value;
            }
        }

        for (let j = 0; j < 11; j++) {
            st[j].min = "1960-01-01";
            ed[j].min = "1960-01-01";
            ed[j].onchange = function () {
                var input = st[j];
                input.max = ed[j].value;
            }
        }
    });

    $('#btnDelqual').click(function () {

        var num = $('.clonedqual').length; // how many "duplicatable" input fields we currently have
        $('#clonedqual' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddqual').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelqual').prop('disabled', true);



    });

    $('#btnDelqual').prop('disabled', true);
});




$(document).ready(function () {
    // Cloning Skill Section

    $('#btnAddskill').click(function () {

        var num = $('.clonedskill').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedskill' + num).clone().attr('id', 'clonedskill' + newNum);



        $('.clonedskill').last().append(newSection)

        $('#btnDelskill').prop('disabled', false);

        if (newNum == 5)
            $('#btnAddskill').prop('disabled', true);
    });

    $('#btnDelskill').click(function () {

        var num = $('.clonedskill').length; // how many "duplicatable" input fields we currently have
        $('#clonedskill' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddskill').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelskill').prop('disabled', true);
    });

    $('#btnDelskill').prop('disabled', true);
});




$(document).ready(function () {
    // Cloning Work Section

    $('#btnAddwork').click(function () {

        var num = $('.clonedwork').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedwork' + num).clone().attr('id', 'clonedwork' + newNum);



        $('.clonedwork').last().append(newSection)

        $('#btnDelwork').prop('disabled', false);


        if (newNum == 3)
            $('#btnAddwork').prop('disabled', true);

        let st = document.querySelectorAll('input[name="startDate[]"]');
        let ed = document.querySelectorAll('input[name="endDate[]"]');


        for (let i = 0; i < 11; i++) {
            st[i].max = new Date().toISOString().split("T")[0];
            ed[i].max = new Date().toISOString().split("T")[0];
            st[i].onchange = function () {
                var input = ed[i];
                input.min = st[i].value;
            }
        }

        for (let j = 0; j < 11; j++) {
            st[j].min = "1960-01-01";
            ed[j].min = "1960-01-01";
            ed[j].onchange = function () {
                var input = st[j];
                input.max = ed[j].value;
            }
        }
    });

    $('#btnDelwork').click(function () {
        var num = $('.clonedwork').length; // how many "duplicatable" input fields we currently have
        $('#clonedwork' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddwork').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelwork').prop('disabled', true);
    });

    $('#btnDelwork').prop('disabled', true);
});





$(document).ready(function () {
    // Cloning Project Section


    $('#btnAddproject').click(function () {
        var num = $('.clonedproject').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedproject' + num).clone().attr('id', 'clonedproject' + newNum);





        $('.clonedproject').last().append(newSection)

        $('#btnDelproject').prop('disabled', false);



        if (newNum == 5)
            $('#btnAddproject').prop('disabled', true);

        let st = document.querySelectorAll('input[name="startDate[]"]');
        let ed = document.querySelectorAll('input[name="endDate[]"]');


        for (let i = 0; i < 11; i++) {
            st[i].max = new Date().toISOString().split("T")[0];
            ed[i].max = new Date().toISOString().split("T")[0];
            st[i].onchange = function () {
                var input = ed[i];
                input.min = st[i].value;
            }
        }

        for (let j = 0; j < 11; j++) {
            st[j].min = "1960-01-01";
            ed[j].min = "1960-01-01";
            ed[j].onchange = function () {
                var input = st[j];
                input.max = ed[j].value;
            }
        }
    });

    $('#btnDelproject').click(function () {
        var num = $('.clonedproject').length; // how many "duplicatable" input fields we currently have
        $('#clonedproject' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddproject').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelproject').prop('disabled', true);
    });

    $('#btnDelproject').prop('disabled', true);
});


$(document).ready(function () {
    // Cloning Certificate Section

    $('#btnAddcertificate').click(function () {
        var num = $('.clonedcertificate').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedcertificate' + num).clone().attr('id', 'clonedcertificate' + newNum);




        $('.clonedcertificate').last().append(newSection)

        $('#btnDelcertificate').prop('disabled', false);

        if (newNum == 5)
            $('#btnAddcertificate').prop('disabled', true);
    });

    $('#btnDelcertificate').click(function () {
        var num = $('.clonedcertificate').length; // how many "duplicatable" input fields we currently have
        $('#clonedcertificate' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddcertificate').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelcertificate').prop('disabled', true);
    });

    $('#btnDelcertificate').prop('disabled', true);


});


//Date Validations for Start Date and End Date

$(document).ready(function () {
    let st = document.querySelectorAll('input[name="startDate[]"]');
    let ed = document.querySelectorAll('input[name="endDate[]"]');


    for (let i = 0; i < 11; i++) {
        st[i].max = new Date().toISOString().split("T")[0];
        ed[i].max = new Date().toISOString().split("T")[0];
        st[i].onchange = function () {
            var input = ed[i];
            input.min = st[i].value;
        }
    }

    for (let j = 0; j < 11; j++) {
        st[j].min = "1960-01-01";
        ed[j].min = "1960-01-01";
        ed[j].onchange = function () {
            var input = st[j];
            input.max = ed[j].value;
        }
    }

});


// Date Validation for Certificates

$(document).ready(function () {
    issueDate.min = "1960-01-01";
    issueDate.max = new Date().toISOString().split("T")[0];
});



// Date Validation for DOB

$(document).ready(function () {
    dob.min = "1960-01-01";
    dob.max = new Date().toISOString().split("T")[0];
});

//Password Validation
var check = function () {
    var str = document.getElementById('password').value;
    if (str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match(/[0-9]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >= 6) {
        document.getElementById('pwdmsg1').style.color = '#06d6a0';
        document.getElementById('pwdmsg1').innerHTML = 'Strong Password';
    }
    else {
        document.getElementById('pwdmsg1').style.color = '#ef476f';
        document.getElementById('pwdmsg1').innerHTML = 'Weak Password';
    }
    if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
        document.getElementById('pwdmsg2').style.color = '#06d6a0';
        document.getElementById('pwdmsg2').innerHTML = 'Matching';
    } else {
        document.getElementById('pwdmsg2').style.color = '#ef476f';
        document.getElementById('pwdmsg2').innerHTML = 'Not Matching';
    }
}

function storeData() {
    return true;
}


function successPage() {
    if (storeData()) {
        document.getElementById("user_msg").innerHTML = "User Registration is Successful !";
        document.getElementById("user_msg_id").innerHTML = "Your User ID is : ";
    }

    else {
        document.getElementById("user_msg").innerHTML = "User Registration is NOT Successful !";
    }
}




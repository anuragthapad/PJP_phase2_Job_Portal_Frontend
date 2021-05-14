const getData = document.getElementById('fetch-data');

const request = new XMLHttpRequest();

request.open('GET', 'data.json', true);
request.onload = function () {
    if(this.readyState == 4 && this.status == 200) {
        const obj = JSON.parse(this.responseText)
        populate(obj);
    }
}
request.send();

// var output = 

function populate(obj) {
    console.log(obj);
    obj.forEach(row => {
        console.log(row);
        if(row.id == 1) {
            getData.innerHTML = `<div class="container" style="width: 50%; align-items: center;">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>User Application ID:</td>
                            <td>` + row.id +`</td>
                        </tr>
                        <tr>
                            <td>First Name: </td>
                            <td>` + row.first_name + `</td>
                        </tr>
                        <tr>
                            <td>Last Name: </td>
                            <td>`+ row.last_name +`</td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
        }
    });
    // getData.innerHTML = myContainer;
}
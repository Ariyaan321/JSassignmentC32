
let c = 0

document.getElementById('sub').addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e)

    var fullname = document.getElementById('fullnameid').value;
    var email = document.getElementById('emailid').value;
    var number = document.getElementById('numberid').value;
    var dropdown = document.getElementById('dropmenu').value;
    var tshirtSize = document.querySelector('input[name="tsize"]:checked').value;
    var additionalInfo = document.querySelectorAll('input[name="addinfo"]:checked').value;
    var howHearEvent = document.querySelector('input[name="hearevent"]:checked');

    console.log("fullname: ", fullname)
    console.log("emaiL: ", email)
    console.log("num: ", number)
    console.log("dropdown: ", dropdown)
    console.log("thsirsize: ", tshirtSize)
    console.log("addinfor: ", additionalInfo)
    console.log("howhearev: ", howHearEvent)




    let isValid = true;

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('sub').addEventListener('click', function (e) {
            e.preventDefault();

            const fullName = document.getElementById('fullnameid').value.trim();
            if (fullName === '') {
                isValid = false;
            }
            const email = document.getElementById('emailid').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
            }

            const number = document.getElementById('numberid').value.trim();
            if (isNaN(number)) {
                isValid = false;
            }

            const dropdown = document.getElementById('dropmenu').value;
            if (dropdown === '') {
                isValid = false;
            }

            const tshirtSize = document.querySelector('input[name="tsize"]:checked');
            if (!tshirtSize) {
                isValid = false;
            }

            const additionalInfo = document.querySelectorAll('input[type="checkbox"]:checked');
            if (additionalInfo.length === 0) {
                isValid = false;
            }

            const howHearEvent = document.querySelector('input[name="hearevent"]:checked');
            if (!howHearEvent) {
                isValid = false;
            }

            if (isValid) {
                console.log("Form is valid. Submitting...");
            } else {
                console.log("Form is not valid. Please check your inputs.");
            }
        });
    });

    if (isValid) {
        document.querySelector('form').reset();
    }

})

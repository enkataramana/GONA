window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    /* Getting input from the user into height variable.
    Input is a string so typecasting is necessary. */
    let height = parseInt(document
        .querySelector("#height").value);

    /* Getting input from the user into weight variable. 
    Input is a string so typecasting is necessary.*/
    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");
    let links = document.getElementById("links");

    // Checking if the user provided a proper value or not
    if (height === "" || isNaN(height)) {
        result.innerHTML = "Provide a valid Height!";
    } else if (weight === "" || isNaN(weight)) {
        result.innerHTML = "Provide a valid Weight!";
    } else {
        // Fixing up to 2 decimal places
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
            links.innerHTML = `<a href="uw.html">Learn more about Underweight</a>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span>`;
            links.innerHTML = `<a href="nrml.html">Learn more about Healthy Weight</a>`;
        } else {
            result.innerHTML = `Over Weight : <span>${bmi}</span>`;
            links.innerHTML = `<a href="ow.html">Learn more about Overweight</a>`;
        }
    }
}

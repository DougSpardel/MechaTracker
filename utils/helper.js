let cars = [];

document.getElementById('car-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const vin = document.getElementById('vin').value;
    const issue = document.getElementById('issue').value;
    const status = document.getElementById('status').value;

    const carIndex = cars.findIndex(c => c.vin === vin);
    if (carIndex > -1) {
        cars[carIndex].issue = issue;
        cars[carIndex].status = status;
    } else {
        cars.push({ vin, issue, status });
    }

    renderCars();
});

function renderCars() {
    const template = document.getElementById("car-status-template").innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate({ cars });
    document.getElementById('car-status-container').innerHTML = html;
}
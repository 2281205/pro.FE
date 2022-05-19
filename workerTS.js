var workers = [];
var isWorkersValid = function (worker) {
    return worker.isValid;
};
for (var i = 0; i < 10; i++) {
    var worker = {
        firstName: 'First Name ' + i,
        lastName: 'Last Name' + i,
        job: 'Job ' + i,
        isValid: true
    };
    if (isWorkersValid(worker)) {
        workers.push(worker);
    }
}
;
console.log(workers);

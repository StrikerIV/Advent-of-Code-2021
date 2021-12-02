const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n').map((num) => parseInt(num, 10));

function checkDepth(depthMeasurements) {
    return depthMeasurements.reduce((count, curr, idx, arr) => {
        return curr > arr[idx-=1] ? count+=1 : count;
    }, 0);
}

function checkMeasurementSums(depthMeasurements) {
    return depthMeasurements.reduce((count, curr, idx, arr) => {
        return (arr[idx+=-1] + curr + arr[idx+=1]) < (curr + arr[idx+=1] + arr[idx+=2]) ? count+=1 : count;
    }, 0);
}
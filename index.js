// Code your solution in this file!
const distanceFromHqInBlocks = function(num) {
    return Math.abs(42-num);
}

const distanceFromHqInFeet = function(num) {
    return distanceTravelledInFeet(num, 42);
}

const distanceTravelledInFeet = function(beginning, end) {
    return (Math.abs(end-beginning)) * 264;
}

const calculatesFarePrice = function(start, destination) {
    const dist = distanceTravelledInFeet(start, destination);
    if(dist <= 400) {
        return 0;
    }
    else if(dist > 400 && dist < 2000) {
        return (dist-400) * 0.02;
    }    
    else if(dist >= 2000 && dist < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}
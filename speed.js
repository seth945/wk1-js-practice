function speedDetector(speed) {
    const speedLimit = 70;
    const maxDemeritPoints = 12;

    // If the speed is less than the speed limit, it's OK
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate how much the speed exceeds the limit
        const excessSpeed = speed - speedLimit;
        
        const demeritPoints = Math.floor(excessSpeed / 5);
        
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
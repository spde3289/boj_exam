    let hour = 23
    let min = 28;
    let min1 = 80;
    let sumMin = min + min1
    if (sumMin >= 60) {
        min = (min + min1) - 60;
        hour += 1;
        if (min >= 60) {
            min -= 60;
            hour += 1;
        }
        if (hour >=24) {
            hour %= 24
        };
    } else {
        min += min1;
    };
    console.log(hour + ' ' + min);
function matrixDiagonals(arr) {
    let matrixAPivot = 0, matrixYPivot = arr.length - 1;
    let matrixACounter = 0, matrixYCounter = 0;

    for(let i in arr) {                        
        matrixACounter += arr[i][matrixAPivot];
        matrixYCounter += arr[i][matrixYPivot];
        
        matrixAPivot += 1;   
        matrixYPivot -= 1;
    }
    return matrixACounter - matrixYCounter;
}


function plusMinus(arr) {
    const base = arr.length;
    let zeros = 0, lessThanZero = 0, greaterThanZero = 0;

    for(const item of arr) {
        if(item > 0) greaterThanZero += 1;
        else if(item < 0) lessThanZero += 1;
        else if(item === 0) zeros += 1;
    }
    
    console.log(greaterThanZero / base);
    console.log(lessThanZero / base);
    console.log(zeros / base);
}

//plusMinus([-4,3,-9,0,4,1]);

function logStaircase(n) {
    let counter = 1;
    for(let i = n; i > 0; i--) {
        console.log(' '.repeat(i - 1) + '#'.repeat(counter));
        counter += 1;
    }
}

// logStaircase(10);

function minMaxSum(arr) {
    let isNotCompleted = true;
    let positionExcluded = 0;
    let sumsArr = [];
    let i = 0;

    while(isNotCompleted) {
        if (i >= arr.length) {
            i = 0;
            continue;
        }else {            
            let count = 0;
            for(const i in arr) {                  
                if(i != positionExcluded) {                    
                    count += arr[i];
                }
            }
            sumsArr.push(count);
            positionExcluded += 1;
            
            if(positionExcluded >= arr.length) isNotCompleted = false;
            i++;
        }
    }
    console.log(Math.min(...sumsArr), Math.max(...sumsArr));
}

// minMaxSum([1,2,3,4,5]);

function birthdayCakeCandles(arr) {
    const maxCandle = Math.max(...arr);
    const maxCandlesArr = arr.filter(item => item === maxCandle);
    return maxCandlesArr.length;
}

//birthdayCakeCandles([1,2,3,4,4]);

function timeConversion(time) {
    const timeObj = {
        ['01']: '13',
        ['02']: '14',
        ['03']: '15',
        ['04']: '16',
        ['05']: '17',
        ['06']: '18',
        ['07']: '19',
        ['08']: '20',
        ['09']: '21',
        ['10']: '22',
        ['11']: '23',
        ['12']: '00'
    };

    if (time.indexOf('PM') !== -1 && time.substring(0,2) !== '12') return timeObj[time.substring(0,2)] + time.substring(2,time.length - 2);
    else if(time.indexOf('PM') !== -1 && time.substring(0, 2) === '12') return time.substring(0,time.length - 2);
    else if(time.indexOf('AM') && time.substring(0, 2) === '12') return timeObj['12'] + time.substring(2,time.length - 2);
    else if(time.indexOf('AM') || time.indexOf('PM')) return time.substring(0,time.length - 2);
    return time;
}

console.log(timeConversion('12:05:39AM'));
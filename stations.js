let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const stations = {
    'one': new Set(['id', 'nv', 'ut']),
    'two': new Set(['wa', 'id', 'mt']),
    'three': new Set(['or', 'nv', 'ca']),
    'four': new Set(['nv', 'ut']),
    'five': new Set(['ca', 'az'])
};

function calculateBestStations() { 
    let finalStations = new Set();

    debugger;
    while(statesNeeded.size) {
        let bestStation;
        let statesCovered = new Set();

        for(const station of Object.keys(stations)) {
            const covered = new Set([...statesNeeded].filter(state => stations[station].has(state)));
            
            if(covered.size > statesCovered.size) {
                bestStation = station;
                statesCovered = covered;
            }   
        }
        
        statesNeeded = new Set([...statesNeeded].filter(state => !statesCovered.has(state)));        
        finalStations.add(bestStation);
    }
    return finalStations;        
}

console.log(calculateBestStations());
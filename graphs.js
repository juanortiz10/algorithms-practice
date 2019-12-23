const START = 'start';
const FIN = 'fin';

const graph = {
    [START]: {
        a: 5,
        b: 2
    },
    a: {
        d: 4,
        c: 2
    },
    b: {
        a: 8,
        c: 7        
    },
    c: {
        [FIN]: 1
    },
    d: {
        [FIN]: 3
    },
    [FIN]: {}
};

const costs = {
    a: 5,
    b: 2,
    c: Infinity,
    d: Infinity,
    [FIN]: Infinity
};

const parents = {
    a: [START],
    b: [START],
    c: null,
    d: null,
    [FIN]: null  
};

let procesed = [];

function findLowestCostNode() {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for(const node of Object.keys(costs)) {
        const cost = costs[node];
        
        if(cost < lowestCost && (procesed.indexOf(node) === -1)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }    
    return lowestCostNode;
}

function calcShortestPath() {
    let node = findLowestCostNode();
    
    while(node !== null) {
        debugger;
        let cost = costs[node];
        let neighbors = graph[node];        
        
        for(const n of Object.keys(neighbors)) {
            let newCost = cost + neighbors[n];
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }        
        procesed.push(node);
        node = findLowestCostNode();
    }
}

calcShortestPath();
console.log(procesed);

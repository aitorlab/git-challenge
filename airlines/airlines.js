const flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

function airlines() {
    const name = prompt('Welcome to Skylab Airlines. Please, insert your name');
    console.log(`Mr./Mrs. ${name}, the information about our flights are:`)
        
    function showAllFlights() {
        flights.forEach(showFlights);
            
        function showFlights(flight) {
            if(flight.scale === true) {
                console.log(`The flight with origin ${flight.from}, and destination ${flight.to} ` +
                `has a cost of ${flight.cost}\u{20AC} and performs scale`);
            } else {
                 console.log(`The flight with origin ${flight.from}, and destination ${flight.to} ` + 
                 `has a cost of ${flight.cost}\u{20AC} and doesn't perform scale`);
            }
        }
    }
        
    function showMediumCost() {
        let mediumCost = 0;
        flights.forEach(sumCost);

        function sumCost(flight) {
            mediumCost += flight.cost;
        }

        mediumCost = (mediumCost / flights.length).toFixed(2);
        console.log(`The medium cost of the flights is ${mediumCost}\u{20AC}`);
    }
    
    function showScaleFlights() {
        let scaleFlights = 0;
        flights.forEach(countScaleFlights);

        function countScaleFlights(flight) {
            if(flight.scale === true) {
                scaleFlights++;
            }
        }

        console.log(`There are a total of ${scaleFlights} flights that perform scale`);
    }
        
    function showLastDestinations() {
        const lastFlights = flights.slice(6,11);
        const lastDestinations = [];
        lastFlights.forEach(showDestinations);

        function showDestinations(flight) {
            lastDestinations.push(flight.to);
        }
    
        console.log(`The destinations of the last flights of the day are: ${lastDestinations.join(', ')}`);    
    }
    
        showAllFlights();
        showMediumCost();
        showScaleFlights();
        showLastDestinations();
    
}

airlines();
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
    if((name !== null) && (name !== undefined) && (name !== '')) {
        
        function showAllFlights() {
            console.log(`Mr./Mrs. ${name}, the updated information about our flights are:`)
            flights.forEach(showFlights);
            
            function showFlights(flight) {
                if(flight.scale === true) {
                    console.log(`The flight with id ${flight.id}, origin ${flight.from} and destination ${flight.to} ` +
                                `has a cost of ${flight.cost}\u{20AC} and performs scale`);
                } else {
                    console.log(`The flight with id ${flight.id}, origin ${flight.from} and destination ${flight.to} ` + 
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

        function askUserType() {
            let userType = prompt('Are you a user or an admin? Enter the word "admin" or "user" to define your role');
            if(userType !== null) {
                userType = userType.toUpperCase();
                if(userType === 'ADMIN') {
                    function addNewFlights() {
                        for(let i = flights.length; i < 16; i++) {
                            let answer = prompt('Do you want to add a new flight? Y/N');
                            if(answer !== null) {
                                answer = answer.toUpperCase();
                                if((answer === 'YES') || (answer === 'Y')) {
                                    let id = flights[flights.length -1].id + 1;
                                    const origin = prompt('Introduce an origin');
                                    const destination = prompt('Introduce a destination');
                                    const newCost = prompt('Introduce the price of the new flight');
                                    let newScale = prompt('Does the flight perform scale? Y/N');
                                    if(newScale !== null) {
                                        newScale = newScale.toUpperCase();
                                        if((newScale === 'YES') || (newScale === 'Y')) {
                                            newScale = true;
                                        } else {
                                            newScale = false;
                                        }
                                    } else {
                                        newScale = false;
                                    }  
                                    flights.push({id: id, to: destination, from: origin, cost: newCost, scale: newScale});
                                    id++;
                                    if(flights.length === 15) {
                                        let finalAnswer = prompt('Do you want to add a new flight? Y/N');
                                        if(finalAnswer !== null) {
                                            finalAnswer = finalAnswer.toUpperCase();
                                            if((finalAnswer === 'YES') || (finalAnswer === 'Y')) {
                                            alert('The total number of flights cannot be more than 15')
                                            break;
                                            } else {
                                                break;
                                            }
                                        }    
                                    }      
                                } else if((answer === 'NO') || (answer === 'N')) {
                                    break;
                                } else {
                                    break;
                                }
                            } else {
                                break;
                            }      
                        }         
                    
                        console.log('UPDATING DATA...............................................');
                        showAllFlights();     
                    }
                 
                    function deleteFlight() {
                        let answer = prompt('Do you want to delete a flight?');
                        if(answer !== null) {
                            answer = answer.toUpperCase();
                            if((answer === 'YES') || (answer === 'Y')) {
                                let idRemoved = prompt('Please, enter the id of the flight you want to delete:');
                                idRemoved = parseInt(idRemoved);
                                const removeIndex = flights.map(function(item) {return item.id;}).indexOf(idRemoved);
                                flights.splice(removeIndex, 1);
                                console.log('UPDATING DATA...............................................');
                                showAllFlights();
                            } else if((answer === 'NO') || (answer === 'N')) {
                                alert('Thanks for using Airlines Pro');
                                return;
                            } else {
                                alert(`Enter a valid word/character: "yes", "y", "no" or "n"`);
                                deleteFlight();
                            } 
                        } else {
                            alert('Thanks for using Airlines Pro');
                            return;
                        }           
                    }

                    addNewFlights(); 
                    deleteFlight();

                } else if(userType === 'USER') {
                    function searchByPrice() {
                        let priceRequested = '';
                        const typeOfSearch = prompt('What type of search do you want to perform? ' +
                                                    'Enter the symbol "<" to search for lower prices than the price entered. ' +
                                                    'Enter the symbol ">" to search for greater prices than the price entered.' +
                                                    'Enter the symbol "=" to search for equal prices than the price entered.');
                
                        function showFilteredFlights(filteredArray) {
                            console.log('UPDATING DATA...............................................');
                            filteredArray.forEach(showFlights);
                            function showFlights(flight) {
                                if(flight.scale === true) {
                                    console.log(`The flight with id ${flight.id}, origin ${flight.from} and destination ${flight.to} ` +
                                                `has a cost of ${flight.cost}\u{20AC} and performs scale`);
                                } else {
                                    console.log(`The flight with id ${flight.id}, origin ${flight.from}, and destination ${flight.to} ` + 
                                                `has a cost of ${flight.cost}\u{20AC} and doesn't perform scale`);
                                }
                            }         
                        }
                
                        function buyFlight(filteredArray) {
                            let idEntered = prompt('Enter the ID of the flight that you want to purchase');
                            idEntered = parseInt(idEntered);
                            const flightSelected = filteredArray.filter(flight => flight.id === idEntered);
                            if(flightSelected.length === 0) {
                                alert(`The id entered doesn't correspond to any filtered flight. Please, enter a valid id`);
                                buyFlight();
                            } else {
                            alert(`The flight with id ${flightSelected[0].id}, origin ${flightSelected[0].from} and destination ${flightSelected[0].to} ` +
                                  `has been reserved. Thank you for your purchase.`);
                            }
                        }

                        switch(typeOfSearch) {
                            case '<':
                                priceRequested = prompt('Enter the comparison price');
                                const cheapestFlights = flights.filter(price => price.cost < priceRequested);
                                if(cheapestFlights.length === 0) {
                                    alert('There is no flight that meets the search criteria');
                                    searchByPrice();
                                } else {
                                    showFilteredFlights(cheapestFlights);
                                    buyFlight(cheapestFlights);
                                }
                                break;
                            case '>':
                                priceRequested = prompt('Enter the comparison price');
                                const expensiveFlights = flights.filter(price => price.cost > priceRequested);
                                if(expensiveFlights.length === 0) {
                                    alert('There is no flight that meets the search criteria');
                                    searchByPrice();
                                } else {
                                    showFilteredFlights(expensiveFlights);
                                    buyFlight(expensiveFlights);
                                }
                                break;
                            case '=':
                                priceRequested = prompt('Enter the comparison price');
                                priceRequested = parseInt(priceRequested);
                                const equalFlights = flights.filter(price => price.cost === priceRequested);
                                if(equalFlights.length === 0) {
                                    alert('There is no flight that meets the search criteria');
                                    searchByPrice();
                                } else {
                                    showFilteredFlights(equalFlights);
                                    buyFlight(equalFlights);
                                } 
                                break; 
                            default:
                                alert('You have to enter one correct value: <, > or =');
                                searchByPrice();
                        }
                    }

                    searchByPrice();           
                } else {
                    alert(`Enter the word "admin" or "user" to define your role`);
                    askUserType();
                }
            } else {
                alert('Thanks for using Airlines Pro');
                return;
            }
        }
        showAllFlights();
        showMediumCost();
        showScaleFlights();
        showLastDestinations();
        askUserType();  
    } else if (name === '') {
        alert('Please, enter a valid name');
        airlines();
        
    } else {
        alert('Thanks for using Airlines Pro');
    }    
}
airlines();
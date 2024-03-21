function TicketPricing (age){
    condition1 = (age <= 12);

    switch(condition1){
        case true:
            return "$10";
        case false:
            condition2 = (age >= 13 && age <= 17);
            switch(condition2){
                case true:
                    return "$15";
                case false:
                    return "$20";
            }
    }
}

console.log(TicketPricing(11));
console.log(TicketPricing(16));
console.log(TicketPricing(30));
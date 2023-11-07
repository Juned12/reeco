export const currency_formatter = (number) => {
    if(number) {
        return parseFloat(number)
        .toLocaleString('en-US',{
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
            style: 'currency', 
            currency: 'USD' 
        }) 
    } 
    return 0
}
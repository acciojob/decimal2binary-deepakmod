function decimalToBinary(decimal){
    let binary="";
    while (decimal>0){
        let reminder=decimal%2;
        binary+=reminder;
        decimal=Math.floor(decimal/2);
    }
    return binary;
}

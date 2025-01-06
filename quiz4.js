function calculate (num1, operator, num2 ){
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return 'Invalid Operator';
    } 

}

calculate(3, '+', 6); // 9
calculate(11, '-', 6); // 5
calculate(6, '*', 3); // 2
calculate(15, '/', 3); // 45

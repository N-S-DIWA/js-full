let num = 123456789;
    function reverse(num)
    {
        let result = num.toString().split('').reverse().join('');
        console.log(result);
    }
 reverse(num);
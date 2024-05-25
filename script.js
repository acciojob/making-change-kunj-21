const makeChange = (c) => {
  // your name here
	 const values = {
        q: 25, // quarter
        d: 10, // dime
        n: 5,  // nickel
        p: 1   // penny
    };
    
    
    let change = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    };


    change.q = Math.floor(c / values.q);
    c %= values.q;

    change.d = Math.floor(c / values.d);
    c %= values.d;

    change.n = Math.floor(c / values.n);
    c %= values.n;

    change.p = c; 

    return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

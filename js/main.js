//Login Button Event Handler
const loginBtn = document.getElementById('login').addEventListener('click',function(event){
    event.preventDefault();
    const loginArea = document.getElementById('login-area');
    const email     = document.getElementById('email').value;
    const password  = document.getElementById('password').value;
    if(email === "admin" && password === "123"){
         loginArea.style.display = 'none';
         document.getElementById('transaction-area').style.display = 'block';
    }else{
         document.getElementById('login-warning').style.display = 'block';
         document.getElementById('login-msg').innerText = "Invalid Email or Password";
    }
});

//Deposit Button Event Handler
const depositBtn = document.getElementById('deposit').addEventListener('click',function(){
    const dAmount       = parseFloat(document.getElementById('dAmount').value);
    const depositAmount = parseFloat(document.getElementById('depositAmount').innerText);
    const total         = (dAmount + depositAmount).toFixed(2);
    const balanceAmount = parseFloat(document.getElementById('balanceAmount').innerText);
    const totalBalance  = (parseFloat(dAmount + balanceAmount)).toFixed(2);
    if(!dAmount){
        document.getElementById('deposit-warning').style.display = 'block';
        document.getElementById('deposit-msg').innerText = "Please, Input an Amount";
    }else{
        document.getElementById('depositAmount').innerText = total;
        document.getElementById('balanceAmount').innerText = totalBalance;
        document.getElementById('deposit-warning').style.display = 'block';
        document.getElementById('deposit-msg').innerText = "Successfully deposit $"+ dAmount;
    }
    document.getElementById('dAmount').value = "";
});

//Withdraw Button Event Handler
const withdrawBtn = document.getElementById('withdraw').addEventListener('click',function(){
    const wAmount        = parseFloat(document.getElementById('wAmount').value);
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').innerText);
    const total          = (wAmount + withdrawAmount).toFixed(2);
    const balanceAmount  = parseFloat(document.getElementById('balanceAmount').innerText);
    if(wAmount > balanceAmount){
        document.getElementById('withdraw-warning').style.display = 'block';
        document.getElementById('withdraw-msg').innerText = "You can't withdraw more than your Balance Amount";
    }else if(!wAmount){
        document.getElementById('withdraw-warning').style.display = 'block';
        document.getElementById('withdraw-msg').innerText = "Please, Input an Amount";
    }else{
        const totalBalance   = (parseFloat(balanceAmount - wAmount)).toFixed(2);
        document.getElementById('withdrawAmount').innerText = total;
        document.getElementById('balanceAmount').innerText = totalBalance;
        document.getElementById('withdraw-warning').style.display = 'block';
        document.getElementById('withdraw-msg').innerText = "Successfully withdraw $"+ wAmount;
    }
    document.getElementById('wAmount').value="";
});
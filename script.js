function checkAccount(){

const account = document.getElementById("account").value;

const portal = document.getElementById("portal").value;

if(account==""){

alert("Nhập tài khoản");

return;

}

const popup = document.getElementById("popup");

const result = document.getElementById("resultText");

result.innerHTML = "Đang kiểm tra...";

popup.style.display="flex";

setTimeout(()=>{

result.innerHTML=

`⚠️ ${portal}

Tài khoản ${account}

đã được kiểm tra thành công.`;

},2500);

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
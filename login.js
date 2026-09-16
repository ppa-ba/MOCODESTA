function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "mocodesta" && password == "rahmat"){
    alert ("SELAMAT DATANG DI APLIKASI MOCODESTA, SILAHKAN KLIK UNTUK MASUK KE DASHBOARD UTAMA");
    window.location = "dashboard.html"; // Redirecting to other page.
    return false;
    }
    else{
    alert("USERNAME ATAU PASSWORD YANG ANDA MASUKAN SALAH, SILAHKAN COBA LAGI");
    return;
    }
    }

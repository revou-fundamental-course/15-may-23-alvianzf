function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;

    var style = document.getElementsByClassName("result-luas").style = "visible";
    document.getElementById("output-luas").innerHTML = '<span>'+sisiLuas+'</span>';
}

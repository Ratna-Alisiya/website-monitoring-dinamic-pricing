
function generateQR() {
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;

    if (r && g && b) {
        var qr = new QRious({
            element: document.getElementById('qrCanvas'),
            value: 'RGB: ' + r + ',' + g + ',' + b,
            size: 200
        });
    }
}

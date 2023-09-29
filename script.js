
const split1 = () => {
    var n = document.getElementById("num1").value;

    if (n > 9999) {
        document.getElementById("ans2").innerHTML = "10000 पेक्षा लहान संख्या लिहा"
    } else {
        document.getElementById("d1").innerHTML = parseInt(n % 10);
        n = parseInt(n / 10);
        document.getElementById("d2").innerHTML = parseInt(n % 10);
        n = parseInt(n / 10);
        document.getElementById("d3").innerHTML = parseInt(n % 10);
        n = parseInt(n / 10);
        document.getElementById("d4").innerHTML = parseInt(n % 10);
        n = parseInt(n / 10);

        var number = document.getElementById("num1").value;
    let decimalValue = number.toString().indexOf(".");
        let result = number.toString().substring(decimalValue + 1);

    if ( result === number ) {
        document.getElementById("d0001").innerHTML = 0;
        document.getElementById("d001").innerHTML = 0;
        document.getElementById("d01").innerHTML = 0;
        document.getElementById("ans2").innerHTML = "दशांश बिंदूनंतर 3 अंक असलेली संख्या लिहा "
    }

    else if ( parseInt(result) < 10 ) {
        var m = parseInt(result);
        document.getElementById("d01").innerHTML = m;
        document.getElementById("d0001").innerHTML = 0;
        document.getElementById("d001").innerHTML = 0;
    }
    
    else if ( parseInt(result) < 100 ) {
        var m = parseInt(result);
        document.getElementById("d001").innerHTML = parseInt(m % 10);
        m = parseInt(m / 10);
        document.getElementById("d01").innerHTML = parseInt(m % 10);
        document.getElementById("d0001").innerHTML = 0;
    }    

    else if (parseInt(result) > 999 ) {
        document.getElementById("ans2").innerHTML = "दशांश बिंदूनंतर 3 अंक असलेली संख्या लिहा "
        var m = 0;
        document.getElementById("d0001").innerHTML = parseInt(m % 10);
        m = parseInt(m / 10);
        document.getElementById("d001").innerHTML = parseInt(m % 10);
        m = parseInt(m / 10);
        document.getElementById("d01").innerHTML = parseInt(m % 10);
        m = parseInt(m / 10);
    }
    else {
        document.getElementById("ans2").innerHTML = "योग्य संख्या"
        var m = parseInt(result);
        document.getElementById("d0001").innerHTML = parseInt(m % 10);
        m = parseInt(m / 10);
        document.getElementById("d001").innerHTML = parseInt(m % 10);
        m = parseInt(m / 10);
        document.getElementById("d01").innerHTML = parseInt(m % 10);
        m = parseInt(m / 10);
    }

    }

}

const x0001 = () => {
    var n = document.getElementsByTagName("h2").item(7).innerHTML;
    document.getElementById("ans2").innerHTML = n * 0.001;
}

const x001 = () => {
    var n = document.getElementsByTagName("h2").item(6).innerHTML;
    document.getElementById("ans2").innerHTML = n * 0.01;
}

const x01 = () => {
    var n = document.getElementsByTagName("h2").item(5).innerHTML;
    document.getElementById("ans2").innerHTML = parseFloat(n*0.1).toFixed(1);
}

const x1 = () => {
    var n = document.getElementsByTagName("h2").item(3).innerHTML;
    document.getElementById("ans2").innerHTML = n * 1;
}

const x10 = () => {
    var n = document.getElementsByTagName("h2").item(2).innerHTML;
    document.getElementById("ans2").innerHTML = n * 10;
}

const x100 = () => {
    var n = document.getElementsByTagName("h2").item(1).innerHTML;
    document.getElementById("ans2").innerHTML = n * 100;
}

const x1000 = () => {
    var n = document.getElementsByTagName("h2").item(0).innerHTML;
    document.getElementById("ans2").innerHTML = n * 1000;
}

const x = () => {
    document.getElementById("ans2").innerHTML = "दशांश चिन्ह";
}

var input = document.getElementById("num1");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
});
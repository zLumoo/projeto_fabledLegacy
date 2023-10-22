var dataTermino = new Date("2023-10-22T09:59:59").getTime();
    
        var x = setInterval(function() {
    
            var dataAtual = new Date().getTime();
    
            var diferenca = dataTermino - dataAtual;
    
            var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
            document.getElementById("temporizador").innerHTML = dias + "d " + horas + "h "
            + minutos + "m " + segundos + "s ";
    
            if (diferenca < 0) {
                clearInterval(x);
                document.getElementById("temporizador").innerHTML = "UPDATE RELEASED";
            }
        }, 1000);
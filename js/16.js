function esPrimo(numero) {
    for(let i = 2; i <= Math.sqrt(numero); ++i) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function obtenerFactoresPrimos(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let primos = [];

            for(let i = 2; i <= numero; ++i) {
                while(esPrimo(i) && numero % i === 0) {
                    if (!primos.includes(i)) {
                        primos.push(i);
                    }

                    numero /= i;
                }
            }

            return primos;
        } else {
            return null;
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}
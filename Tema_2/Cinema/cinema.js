// Datos de matrizAsientos
const filas = 5;
const asientosXFila = 10;

// Busca asientos según el número solicitado
function suggest(numeroAsientosXReservar) {
    const asientos = matrizAsientos(filas, asientosXFila);
    for (let fila = filas - 1; fila >= 0; fila--) {
        const disponibles = asientosDisponibles(asientos[fila], numeroAsientosXReservar);
        if (disponibles.size === numeroAsientosXReservar) {
            return disponibles;
        }
    }
    return new Set();
}

// Crea matrizAsientos de asientos
function matrizAsientos(filas, asientosXFila) {
    const asientos = [];
    for (let fila = 0; fila < filas; fila++) {
        const arreglo = [];
        for (let seat = 0; seat < asientosXFila; seat++) {
            arreglo.push({ id: fila * asientosXFila + seat + 1, ocupado: false });
        }
        asientos.push(arreglo);
    }
    return asientos;
}

// Valída asientos disponibles
function asientosDisponibles(fila, numeroAsientosXReservar) {
    const disponibles = new Set();
    for (let i = 0; i < fila.length; i++) {
        const asiento = fila[i];
        if (!asiento.ocupado) {
            disponibles.add(asiento.id);
            if (disponibles.size === numeroAsientosXReservar) {
                break;
            }
        } else {
            disponibles.clear();
        }
    }
    return disponibles;
}

console.log("Asientos sugeridos para reserva:", suggest(7));

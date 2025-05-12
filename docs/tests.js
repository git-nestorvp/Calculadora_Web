// tests.js

// Función para ejecutar y documentar las pruebas
function runTest(description, testFunction) {
    try {
        testFunction();
        console.log(`✅ ${description} - PASÓ`);
    } catch (error) {
        console.error(`❌ ${description} - FALLÓ (Error: ${error.message})`);
    }
}

// Prueba de suma
function testSuma() {
    const expected = 5;
    document.getElementById("display").value = "2+3";
    calculateResult();
    const result = parseFloat(document.getElementById("display").value);
    if (result !== expected) {
        throw new Error(`Esperado: ${expected}, Obtenido: ${result}`);
    }
}

// Prueba de resta
function testResta() {
    const expected = 5;
    document.getElementById("display").value = "8-3";
    calculateResult();
    const result = parseFloat(document.getElementById("display").value);
    if (result !== expected) {
        throw new Error(`Esperado: ${expected}, Obtenido: ${result}`);
    }
}

// Prueba de multiplicación
function testMultiplicacion() {
    const expected = 15;
    document.getElementById("display").value = "3*5";
    calculateResult();
    const result = parseFloat(document.getElementById("display").value);
    if (result !== expected) {
        throw new Error(`Esperado: ${expected}, Obtenido: ${result}`);
    }
}

// Prueba de división
function testDivision() {
    const expected = 4;
    document.getElementById("display").value = "20/5";
    calculateResult();
    const result = parseFloat(document.getElementById("display").value);
    if (result !== expected) {
        throw new Error(`Esperado: ${expected}, Obtenido: ${result}`);
    }
}

// Prueba de limpieza de pantalla
function testClearDisplay() {
    document.getElementById("display").value = "123";
    clearDisplay();
    const result = document.getElementById("display").value;
    if (result !== "") {
        throw new Error(`Esperado: "", Obtenido: ${result}`);
    }
}

// Prueba de manejo de error (forzado)
function testErrorForzado() {
    const expected = 10;  // Valor incorrecto para forzar error
    document.getElementById("display").value = "2+3";
    calculateResult();
    const result = parseFloat(document.getElementById("display").value);
    if (result !== expected) {
        throw new Error(`Esperado: ${expected}, Obtenido: ${result}`);
    }
}

// Ejecutar todas las pruebas
function runTests() {
    console.log("=== Ejecutando Pruebas ===");
    runTest("Prueba de Suma (2+3=5)", testSuma);
    runTest("Prueba de Resta (8-3=5)", testResta);
    runTest("Prueba de Multiplicación (3*5=15)", testMultiplicacion);
    runTest("Prueba de División (20/5=4)", testDivision);
    runTest("Prueba de Limpieza de Pantalla", testClearDisplay);
    runTest("Prueba de Error Forzado (2+3=10)", testErrorForzado); // Forzando error
    console.log("=== Fin de Pruebas ===");
}

// Ejecutar automáticamente al cargar la página
window.onload = runTests;

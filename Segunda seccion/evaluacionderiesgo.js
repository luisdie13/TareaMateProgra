function evaluateRisk(income, hasLoans, latePayments, isStudent) {
    // Evaluar si es de alto riesgo
    if ((income < 20000 && latePayments > 3) || (hasLoans && isStudent)) {
        return 'High';
    }
    // Evaluar si es de riesgo moderado
    else if ((income >= 20000 && income <= 50000 && latePayments <= 2) || (hasLoans && !isStudent)) {
        return 'Moderate';
    }
    // Si no cumple con las condiciones anteriores, es de bajo riesgo
    else {
        return 'Low';
    }
}

// Ejemplo de uso
console.log(evaluateRisk(15000, true, 4, true)); // "High"
console.log(evaluateRisk(30000, false, 1, false)); // "Low"
console.log(evaluateRisk(25000, true, 1, false)); // "Moderate"
console.log(evaluateRisk(40000, true, 3, true)); // "Moderate"
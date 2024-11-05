function recommendProduct(age, isMember, purchaseHistory) {
    const { tech, fashion } = purchaseHistory;

    // Recomendación de producto de alta tecnología
    if (isMember && tech >= 5) {
        return "High-Tech Product";
    }
    if (age >= 18 && age <= 30 && fashion >= 2) {
        return "High-Tech Product";
    }

    // Recomendación de producto de moda
    if (!isMember && Object.values(purchaseHistory).reduce((a, b) => a + b, 0) >= 3) {
        return "Fashion Product";
    }
    if (age >= 25 && age <= 40) {
        return "Fashion Product";
    }

    // Recomendación de producto genérico
    return "Generic Product";
}

// Ejemplo de uso
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); // "High-Tech Product"
console.log(recommendProduct(26, false, { tech: 1, fashion: 0, other: 2 })); // "Fashion Product"
console.log(recommendProduct(45, false, { tech: 0, fashion: 0, other: 0 })); // "Generic Product"
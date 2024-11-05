# Tarea1 Matematica para programacion

<h2>Primera Seccion 1</h2>

<h3>Ejercicio A</h3>
![Seccion1 A](PrimeraSeccion/seccion1a.jpg)

<h3>Ejercicio B</h3>
![Seccion1 B](PrimeraSeccion/seccion1b.jpg)

<h3>Ejercicio C</h3>
![Seccion1 C](PrimeraSeccion/seccion1c.jpg)

<h3>Ejercicio D</h3>
![Seccion1 D](PrimeraSeccion/seccion1d.jpg)

<h3>Ejercicio E</h3>
![Seccion1 E](PrimeraSeccion/seccion1e.jpg)



<h2>Primera Seccion 2</h2>

<h3>Ejercicio A</h3>
![Seccion1 2 A](PrimeraSeccion/seccion2a.jpg)

<h3>Ejercicio B</h3>
![Seccion1 2 B](PrimeraSeccion/seccion2b.jpg)

<h3>Ejercicio C</h3>
![Seccion1 2 C](PrimeraSeccion/seccion2c.jpg)

<h3>Ejercicio D</h3>
![Seccion1 2 D](PrimeraSeccion/seccion2d.jpg)

<h3>Ejercicio E</h3>
![Seccion1 2 C](PrimeraSeccion/seccion2e.jpg)


<h2>Segunda Seccion 1</h2>

<h3>Ejercicio 1 Explicacion</h3>

<p>La función evaluateRisk toma cuatro parámetros de entrada, cada uno representando una característica importante del cliente bancario que nos ayudará a evaluar su nivel de riesgo:

income (ingresos): Un número que representa el ingreso anual del cliente en dólares.
hasLoans (tiene préstamos): Un valor booleano (true o false) que indica si el cliente tiene algún préstamo activo.
latePayments (pagos atrasados): Un número que representa la cantidad de pagos que el cliente ha realizado fuera de tiempo.
isStudent (es estudiante): Un valor booleano (true o false) que indica si el cliente es un estudiante.
La función devuelve un string que indica el nivel de riesgo del cliente: 'High' (alto riesgo), 'Moderate' (riesgo moderado) o 'Low' (bajo riesgo).

Lógica de Evaluación
El nivel de riesgo de un cliente se determina basándose en una serie de condiciones. La función evalúa estas condiciones en el orden que se encuentra en el código, y detiene su evaluación tan pronto como se cumple una condición, retornando el nivel de riesgo correspondiente.

1. Condiciones para "High" (Alto Riesgo)
El cliente es considerado de alto riesgo si cumple alguna de estas dos condiciones:

Ingresos bajos y muchos pagos atrasados: Si el cliente tiene ingresos menores a $20,000 y ha tenido más de 3 pagos atrasados, se considera que es un cliente de alto riesgo. Esto se debe a que tiene dificultades financieras evidentes, lo cual indica un riesgo mayor para el banco.

La condición en código es:

if (income < 20000 && latePayments > 3) {
    return 'High';
}
Tiene préstamos y es estudiante: Si el cliente tiene préstamos activos y es estudiante, también se considera de alto riesgo. Los estudiantes generalmente no tienen una fuente de ingresos estable, lo que puede hacer que les sea difícil cumplir con sus obligaciones financieras. Además, si ya tienen préstamos, esto puede indicar que podrían estar sobreendeudados.

La condición en código es:

if (hasLoans && isStudent) {
    return 'High';
}
2. Condiciones para "Moderate" (Riesgo Moderado)
Si el cliente no cumple con las condiciones para alto riesgo, pero cumple alguna de estas condiciones, se considera de riesgo moderado:

Ingresos medianos y pocos pagos atrasados: Si el cliente tiene ingresos entre $20,000 y $50,000 y ha tenido 2 o menos pagos atrasados, se considera que está en una situación financiera relativamente más estable, pero aún existe cierto nivel de riesgo. Este cliente podría tener ingresos medianos, pero si no ha mostrado una falta de responsabilidad en sus pagos, el riesgo es moderado.

La condición en código es:

if (income >= 20000 && income <= 50000 && latePayments <= 2) {
    return 'Moderate';
}
Tiene préstamos pero no es estudiante: Si el cliente tiene préstamos activos pero no es estudiante, esto también lo pone en una categoría de riesgo moderado. Aunque puede ser responsable con los pagos, tener préstamos es siempre un indicador de riesgo para el banco, pero ser un adulto que no es estudiante podría indicar que tiene una fuente de ingresos más estable que un estudiante.

La condición en código es:

if (hasLoans && !isStudent) {
    return 'Moderate';
}
3. Condición para "Low" (Bajo Riesgo)
Si el cliente no cumple con ninguna de las condiciones anteriores, se considera de bajo riesgo. Esto ocurre cuando el cliente tiene un buen comportamiento financiero (por ejemplo, pocos o ningún pago atrasado, y/o ingresos estables), lo que hace menos probable que represente un riesgo significativo para el banco.

La condición en código es:

return 'Low';
Este es el caso por defecto si ninguna de las condiciones anteriores se cumple.

Ejemplos:
Ejemplo 1: Cliente con bajos ingresos y pagos atrasados
Entrada: evaluateRisk(15000, true, 4, true)
Análisis:

El cliente tiene ingresos de $15,000 (menos de $20,000).
Tiene 4 pagos atrasados (más de 3).
Es estudiante.
Resultado: La condición de "alto riesgo" (ingresos bajos y pagos atrasados) se cumple, por lo que el resultado será 'High'.

console.log(evaluateRisk(15000, true, 4, true)); // "High"
Ejemplo 2: Cliente con ingresos medianos y pocos pagos atrasados
Entrada: evaluateRisk(30000, false, 1, false)
Análisis:

El cliente tiene ingresos de $30,000 (entre $20,000 y $50,000).
Ha tenido 1 pago atrasado (menos de 2).
No tiene préstamos activos ni es estudiante.
Resultado: La condición de "riesgo moderado" (ingresos entre $20,000 y $50,000, y pocos pagos atrasados) se cumple, por lo que el resultado será 'Moderate'.

console.log(evaluateRisk(30000, false, 1, false)); // "Moderate"
Ejemplo 3: Cliente con ingresos altos y sin préstamos ni pagos atrasados
Entrada: evaluateRisk(60000, false, 0, false)
Análisis:

El cliente tiene ingresos de $60,000 (más de $50,000).
No tiene préstamos activos.
No ha tenido ningún pago atrasado.
Resultado: Ninguna de las condiciones para "alto riesgo" o "riesgo moderado" se cumple, por lo que se considera de bajo riesgo, y el resultado será 'Low'.

console.log(evaluateRisk(60000, false, 0, false)); // "Low"</p>


<h3>Ejercicio 2 Explicacion</h3>

<p>
1. Parámetros de la función:
La función recommendProduct recibe tres parámetros:

age (edad del usuario): Un número que indica la edad del usuario.
isMember (miembro o no miembro): Un valor booleano (true o false) que indica si el usuario es miembro de un programa de fidelización o no.
purchaseHistory (historial de compras): Un objeto que contiene las cantidades de productos comprados por categoría. Este objeto tiene las siguientes propiedades:
tech: Número de productos tecnológicos comprados.
fashion: Número de productos de moda comprados.
other: Número de productos de otras categorías comprados.
Ejemplo de purchaseHistory:


{
  tech: 6,
  fashion: 1,
  other: 2
}
2. Lógica de Recomendación:
La función determina qué tipo de producto recomendar según varios criterios, que se explican a continuación.

Recomendación de Producto de Alta Tecnología:
El primer bloque de código en la función se encarga de recomendar un producto tecnológico (de alta tecnología). Para ello, hay dos condiciones principales:

Condición 1: Si el usuario es miembro (isMember === true) y ha comprado al menos 5 productos tecnológicos (tech >= 5), entonces la función recomienda un producto de alta tecnología.

Explicación: Si el usuario es miembro de un programa de fidelidad y ha mostrado interés en productos tecnológicos en el pasado (al menos 5 productos), es una buena idea recomendarle productos de esa categoría para mantener su interés.

Condición 2: Si el usuario tiene entre 18 y 30 años (age >= 18 && age <= 30) y ha comprado al menos 2 productos de moda (fashion >= 2), la función también recomienda un producto de alta tecnología.

Explicación: Los usuarios jóvenes suelen estar interesados en productos tecnológicos modernos, y si han comprado productos de moda en el pasado, puede que también tengan interés en productos tecnológicos.

Si alguna de estas condiciones se cumple, se devuelve "High-Tech Product".

Recomendación de Producto de Moda:
El siguiente bloque evalúa si se debe recomendar un producto de moda. Existen también dos condiciones para esto:

Condición 1: Si el usuario no es miembro (isMember === false) y ha comprado al menos 3 productos en total (cualquier categoría: tecnológica, de moda u otros productos). La función verifica esto sumando todas las compras usando Object.values(purchaseHistory).reduce((a, b) => a + b, 0).

Explicación: Si el usuario no es miembro, pero ha realizado varias compras en total (al menos 3 productos), la función asume que está interesado en seguir comprando productos y podría estar interesado en productos de moda.

Condición 2: Si el usuario tiene entre 25 y 40 años (age >= 25 && age <= 40), se recomienda un producto de moda.

Explicación: Este rango de edad es típico para personas que siguen las tendencias de moda. Los usuarios en este grupo etario a menudo están interesados en productos de moda.

Si alguna de estas condiciones se cumple, se devuelve "Fashion Product".

Recomendación de Producto Genérico:
Si ninguna de las condiciones anteriores se cumple, la función recomendará un producto genérico:

Esto ocurre cuando el usuario no cumple con las condiciones para productos de alta tecnología ni para productos de moda. En ese caso, el producto recomendado será simplemente "Generic Product".
3. Cálculo del Historial de Compras:
En el bloque donde se evalúa si se recomienda un producto de moda, la función utiliza la siguiente línea de código para calcular el número total de productos comprados:


Object.values(purchaseHistory).reduce((a, b) => a + b, 0)
Object.values(purchaseHistory): Este método devuelve un array con los valores de las propiedades del objeto purchaseHistory. En nuestro caso, esto generará un array con los valores de las categorías de productos comprados, es decir, [tech, fashion, other].

reduce((a, b) => a + b, 0): Este es un método de array que permite acumular los valores de un array. Comienza con un valor inicial de 0 y luego suma los valores del array uno por uno. En este caso, sumará el número de productos comprados en todas las categorías (tecnológicos, moda y otros).

4. Ejemplo de uso de la función:
Aquí tienes algunos ejemplos de cómo se usa la función recommendProduct:

Ejemplo 1:


console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 }));
// "High-Tech Product"
El usuario tiene 22 años, es miembro y ha comprado 6 productos tecnológicos, 1 de moda y 2 de otras categorías.
La condición para recomendar un producto tecnológico se cumple porque el usuario es miembro y ha comprado al menos 5 productos tecnológicos.
Se recomienda un producto tecnológico.
Ejemplo 2:


console.log(recommendProduct(26, false, { tech: 1, fashion: 0, other: 2 }));
// "Fashion Product"
El usuario tiene 26 años, no es miembro y ha comprado 1 producto tecnológico, 0 productos de moda y 2 de otras categorías (total de 3 productos).
La condición para recomendar un producto de moda se cumple porque ha comprado al menos 3 productos en total y no es miembro.
Se recomienda un producto de moda.
Ejemplo 3:


console.log(recommendProduct(45, false, { tech: 0, fashion: 0, other: 0 }));
// "Generic Product"
El usuario tiene 45 años, no es miembro y no ha comprado productos en ninguna categoría.
Ninguna de las condiciones anteriores se cumple, por lo que se recomienda un producto genérico.</p>

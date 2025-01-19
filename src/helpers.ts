export function calculateEquation(equation: string, x: number) {
    const validEquationRegex = /^[0-9+\-*/^x().\s]*$/;
  
    if (!validEquationRegex.test(equation)) {
      return "Error: Invalid characters in equation.";
    }
    equation = equation
    .replace(/\b(\d+)(x|[(])/g, '$1*$2')
    .replace(/(x)\(/g, '$1*(');

    equation = equation.replace(/\^/g, '**').replace(/x/g, `(${x})`);
  
    try {
      const result = eval(equation);
  
      if (!isFinite(result)) {
        throw new Error('Invalid calculation (possibly division by zero).');
      }
      return result;
    } catch (error) {
      return "Error: Invalid equation.";
    }
}

export function connectElements(id1: string, id2: string, id3: string) {
    const el1 = document.getElementById(id1);
    const el2 = document.getElementById(id2);
    const svg = document.getElementById(id3);

    if (!el1 || !el2 || !svg) {
      console.error("Elements not found");
      return;
    }

    svg.innerHTML = '';
  
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
  
    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;
  
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${x1} ${y1} C ${x1 + 50} ${y1}, ${x2 - 50} ${y2}, ${x2} ${y2}`);
    path.setAttribute('stroke', '#0066FF4F');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-width', '7');
  
    svg.appendChild(path);
}
function areaOfTriangle(side1, side2, side3){
    const semiPerimeter = 0.5 * (side1 + side2 + side3);
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    return area;
}

console.log(areaOfTriangle(3,5,7));
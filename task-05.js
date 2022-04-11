function areaOfTriangle(side1, side2, side3){
    s = 0.5 * (side1 + side2 + side3);
    area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
}

areaOfTriangle(5,5,5);
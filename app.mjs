window.sumMatrix = function sumMatrix() {
    // Get the input elements for the matrices
    var matrix1 = document.querySelectorAll(".matrix")[0].querySelectorAll(".input");
    var matrix2 = document.querySelectorAll(".matrix")[1].querySelectorAll(".input");
    var result = document.querySelectorAll(".result")[0].querySelectorAll(".input");

    // Convert the input values to a nested array
    var m1 = [];
    var m2 = [];
    var res = [];

    for (var i = 0; i < matrix1.length; i++) {
        if (i % 3 === 0) {
            m1.push([]);
            m2.push([]);
            res.push([]);
        }
        m1[m1.length - 1].push(Number(matrix1[i].value));
        m2[m2.length - 1].push(Number(matrix2[i].value));
        res[res.length - 1].push(0);
    }

    // Perform the matrix addition
    for (var i = 0; i < m1.length; i++) {
        for (var j = 0; j < m1[i].length; j++) {
            res[i][j] = m1[i][j] + m2[i][j];
        }
    }

    // Display the result in the input elements
    for (var i = 0; i < res.length; i++) {
        for (var j = 0; j < res[i].length; j++) {
            result[i * 3 + j].value = res[i][j];
        }
    }
}

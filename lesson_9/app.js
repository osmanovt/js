const numArr = [3, 45, 2323, 65, 343];

let value;

value = numArr.length;
// numArr.length = 0;           // Удалит все значения из массива
// numArr.length = 100;         // Создаст 100 пустых элементов

value = Array.isArray(numArr);
numArr[2] = 54532;
value = numArr[2];

value = numArr.push(100);
value = numArr.pop();           // Удаляет с конца и возвращает значение удаленного элемента

value = numArr.unshift(200);    // Добавляет элемент в начало массива
value = numArr.shift();               // Удаляет с начала и возвращает значение удаленного элемента

value = numArr.slice(0, 2);           // Возвращает указанные элементы      Не изменяет массив

value = numArr.splice(1, 1, "one", "two");  // Удаляет с указанного индекса указанное количество элементов    Изменяет массив

value = numArr.reverse();       // Изменяет массив

value = numArr.concat(numArr);

value = numArr.join(" ");       // массив в строку

value = value.split(" ");   // Строку в массив по разделителю

console.log(value, numArr);
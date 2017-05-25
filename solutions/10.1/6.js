Array.prototype.shuffle = function() {
  // для массива длины 0 или 1 возвращаем сам массив
  if(this.length<=1){
    return this;
  }
  // случайное число - индекс массива
  let index = Math.floor(Math.random()*(this.length));
  
  // сохраняем элемент с этим индексом
  let element = this[index];

  // удаляем элемент из массива
  let arrayWithoutElement = this.slice(0,index).concat(this.slice(index+1));

  // возвращаем перемешанный остаток массива
  // (рекурсивный вызов) с добавленным в конец
  // случайным элементом, который был выбран ранее
  return arrayWithoutElement.shuffle().concat([element]);
}

console.log( [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle() );

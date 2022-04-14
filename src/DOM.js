/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
	for(let i = 0;i<count;i++){
		let e = document.createElement(tag);
		elem.innerHTML = content;
		document.body.insertAdjacentElement('afterbegin',elem);
	}
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
function gen(i,childrenCount,level){
	let item = document.createElement('div');
	item.classList.add(`item_${i}`);
	if(i < level){
		for(let i = 0;i<childrenCount;i++){
			item.append(gen(i+1,childrenCount,level));
		}
	}
	return item;
}
export function generateTree(childrenCount, level) {
	return gen(1,childrenCount,level);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
	let tree = generateTree(2,3);
	for(let i = 0;i<2;i++){
		tree.getElementsByClassName('item_2')[i].outerHTML = "<section> class='item_2'"+tree.getElementsByClassName('item_2')[i].innerHTML+"</section>";
	}
	return tree;

}

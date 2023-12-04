//значит у нас каждая нода - это список, это пока простая имплементация
//https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
// class TreeNode{
// 	constructor(value){
// 		this.value = value
// 		this.descendants = []
// 	}

// }

// const first = new TreeNode(69)
// const second = new TreeNode(322)
// const third = new TreeNode(228)
// const f = new TreeNode(12)
// const fif = new TreeNode(111)

// first.descendants.push(second)
// second.descendants.push(third,f,fif)

// first.forEach(element => {
// 	console.log(element.descendants);
// });

// возьму лучше отсюда, здесь лучше

// https://code.tutsplus.com/data-structures-with-javascript-tree--cms-23393a


class Node{
 constructor(data){
	this.data = data
	this.parent = null
	this.children = []

 }



}

class Tree{
	constructor(){
		let node = new Node(data)
		this._root = node
	}

}

let first = new Tree("Biba")
	first._root


	function find(data, node =this._root){
		if(node.data == data){
			return node 
		}

		for (const child of node.children) {
			if(this.find(data,child)){
				return child
			}
		}

		return null
	}
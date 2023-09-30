

function reverseWords(s){
	let reversed = ""
	const splitted = s.split(".")
	
	for (const i of splitted){
			 reversed =   i + "." + reversed         
	}
	if (reversed[reversed.length-1] === "."){
		reversed = reversed.slice(0,-1)
	}
	return reversed
}

var LongestComminPrefix = function(string_array){


	let prefix = string_array[0]
	

	for (let i = 1; i < string_array.length; i++) {
	
		while(string_array[i].indexOf(prefix) !==0){

			prefix = prefix.substring(0,prefix.length -1 )
			
		}
		
		 
	}
	console.log(prefix)
	

}

// LongestComminPrefix(["flower","flow","flight"])

// LongestComminPrefix(["dog","racecar","car"])

// LongestComminPrefix(["c","acc","ccc"])

var IntToRoman = function(num){

	let array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	let string_array = ['M','CM', 'D', 'CD', 'C', 'XC', 'L','XL', 'X','IX', 'V','IV','I']
	let new_string = ''
	for (let i = 0; i < array.length; i++) {

		let quotient = Math.floor(num/array[i]) 
		let remainder = num % array[i]

		if (quotient != 0 ) {
			num -= array[i] * quotient
			for (let k = 0; k < quotient; k++) {
				new_string += string_array[i]
			}
			
		}
		
	}
	
	console.log(new_string)
}

// IntToRoman(249)

var Length_of_Longest_Substring = function(s){
	
	let start = 0
	let slice_of_s = ''
	let includes_or_not
	let array_of_lengths = [0]
	let a = s.length
	let i = 0
	do {
		i++
		slice_of_s = s.slice(start, i)
		includes_or_not = slice_of_s.includes(s[i])

		if(includes_or_not === true){
			array_of_lengths.push(slice_of_s.length)
			start +=1
			i--
			
			
		}
		else{
			array_of_lengths.push(slice_of_s.length)
		
			
		}
		
	}while(i < s.length)

	array_of_lengths.sort((a,b) => a-b)
	const result = array_of_lengths.pop()
	console.log(result)
	
}

// Length_of_Longest_Substring('pwwkew')
// Length_of_Longest_Substring('abcabcbb')
// Length_of_Longest_Substring('bbbbb')
// Length_of_Longest_Substring('dvdf')

var Longest_Palindrome = function(s){
	function longest_substring(s){
		
		return s.sort(function(a,b){
			return b.length - a.length
		})[0]
	}
	const length_of_s = s.length
	let counter = 1 
	let counter2 = 1
	let num = 1
	let num_special = 0
	let new_array = []
	
	while(counter != length_of_s){

		while(counter - num >= 0 && counter + num <= length_of_s){
			
			if(s[counter - num] === s[counter + num]){
				new_array.push(s.slice(counter - num, counter+num+1))
				num++
			}
			else{
				break
			}
		
		}
		counter +=1
		num = 1
	}
	let i = 0
	
	while(counter2 < length_of_s){
		
		if(s[i] === s[counter2 ]){
			new_array.push(s.slice(i,counter2+1))
			counter2+=1
			while(i != 0 && i - num >= 0 && counter2 + num_special <= length_of_s){
				if(s[i - num] === s[counter2 + num_special]){
					new_array.push(s.slice(i-num,counter2 + 1 + num_special))
					num++
					num_special++
				}
				else{
					i+=1
					num = 1
					num_special = 0
					break
				}
			}
		}
		else{
			i = counter2
			counter2 = i+1
		}
		
		
	}
	if(new_array.length === 0){
		return s[0]
	}
	
	let value1 = longest_substring(new_array)
	return value1
	
}
// Longest_Palindrome('babad')
// Longest_Palindrome('asanbacabn')
// Longest_Palindrome('tattarrattat')
// Longest_Palindrome('SQQSYYSQQS')

var Group_Anagrams = function(strs){
	let new_array = []
	let sorted = ''
	let map_solution = new Map()

	strs.forEach(element => {
		sorted = element.split('').sort().join('')
		if(map_solution.has(sorted)){
			map_solution.set(sorted, map_solution.get(sorted) + ' ' + element )
		}
		else{
			map_solution.set(sorted, element)
		}
	});
	for (let values of map_solution.values()) {
		new_array.push(values.split(' '))
	}
	return new_array
	

}
// Group_Anagrams(["eat","tea","tan","ate","nat","bat"])

var topKFrequent = function(nums, k){
	let freq_map = new Map()
	let count = 1
	let count2 = 1
	let new_arr = []
	nums.forEach(elem =>{
		
		if(freq_map.has(elem)){
			let a = freq_map.get(elem)
			freq_map.set(elem,++a || 1)
		}
		else{
			count = 1
			freq_map.set(elem,count)
		}
		
	})
	let sorted_map = new Map([...freq_map.entries()].sort((a,b) => b[1] - a[1]))
	for (let key of sorted_map.keys()) {
		new_arr.push(key)
		if(count2 === k){
			return new_arr
		}
		count2++
	}

}

// topKFrequent([5,3,1,1,1,3,73,1],1)

var productExceptSelf = function(nums){
	const len = nums.length
	let before_arr = []
	let after_arr = []
	let final_arr = []
	const initial = 1
	// let filtered = nums.filter((current) => current != 0)
	
	// for (let i = 0; i < len ; i++) {
	// 	popped = nums.shift()
		
	// 	new_arr[i] = nums.reduce((accum, current) => accum * current,initial)
	// 	nums.push(popped)
	// }
	// return new_arr

	for (let i = 0; i < len; i++) {
		if(i === 0){
			before_arr[0] = 1
		}
		else{
			before_arr[i] = before_arr[i-1] * nums[i-1]
		}
	}

	for (let k = len-1; k >= 0; k--) {
		if(k ===len-1){
			after_arr[len-1] = 1
		}
		else{
			after_arr[k] = after_arr[k+1] * nums[k+1]
		}

	}

	for (let l = 0; l < len; l++) {
		final_arr[l] = before_arr[l] * after_arr[l]
		
	}

	return final_arr


}

// productExceptSelf([-1,1,0,-3,3])
// productExceptSelf([1,2,3,4])
// productExceptSelf([0,0])



var isValidSudoku = function(board){

	let cube_map = new Map()
	let col_map = new Map()
	let row_map = new Map()
	let count = 0
	let count_2 = 0

	for (let i = 0; i < 9; i++) {
		if(row_map.has(board[count][i]) ){
			return false
		}
		else if(board[count][i] != "."){
			row_map.set(board[count][i])
		}
		if(i === 8){
			if(count === 8) break
			row_map.clear()
			count +=1
			i = -1
		}
		
		
	}

	for (let k = 0; k < 9; k++) {
		if(col_map.has(board[k][count_2]) ){
			return false
		}
		else if(board[k][count_2] != "."){
			col_map.set(board[k][count_2])
		}
		if(k === 8){
			if(count_2 === 8) break
			col_map.clear()
			count_2 +=1
			k = -1
		}
		
	}

	
	let joe = 0
	let adv_counter = 0
	let v = 0
	let col_count = 0

	do {
		for (let j = joe; j <joe + 3; j++) {
			
			if(cube_map.has(board[v][j])){
				return false
			}
			else if(board[v][j] != "."){
				cube_map.set(board[v][j])
			
			}
			
			
		}
		
		v++
		if(v === 3){
			v = 0
			joe += 3
			cube_map.clear()
			col_count++
		}
		if(col_count===3){
			joe = 0
			v = 0
			adv_counter +=1
			board.splice(0,3)
			col_count = 0
		}
		if(adv_counter === 3){
			return true
		}
	}while( v < 3 )

	


}

// isValidSudoku([["5","3",".",".","7",".",".",".","."]
// 							,["6",".",".","1","9","5",".",".","."]
// 							,[".","9","8",".",".",".",".","6","."]
// 							,["8",".",".",".","6",".",".",".","3"]
// 							,["4",".",".","8",".","3",".",".","1"]
// 							,["7",".",".",".","2",".",".",".","6"]
// 							,[".","6",".",".",".",".","2","8","."]
// 							,[".",".",".","4","1","9",".",".","5"]
// 							,[".",".",".",".","8",".",".","7","9"]])

// isValidSudoku([[".",".","4",".",".",".","6","3","."]
// 							,[".",".",".",".",".",".",".",".","."]
// 							,["5",".",".",".",".",".",".","9","."]
// 							,[".",".",".","5","6",".",".",".","."]
// 							,["4",".","3",".",".",".",".",".","1"]
// 							,[".",".",".","7",".",".",".",".","."]
// 							,[".",".",".","5",".",".",".",".","."]
// 							,[".",".",".",".",".",".",".",".","."]
// 							,[".",".",".",".",".",".",".",".","."]])

isValidSudoku([[".",".",".","9",".",".",".",".","."]
							,[".",".",".",".",".",".",".",".","."]
							,[".",".","3",".",".",".",".",".","1"]
							,[".",".",".",".",".",".",".",".","."]
							,["1",".",".",".",".",".","3",".","."]
							,[".",".",".",".","2",".","6",".","."]
							,[".","9",".",".",".",".",".","7","."]
							,[".",".",".",".",".",".",".",".","."]
							,["8",".",".","8",".",".",".",".","."]])

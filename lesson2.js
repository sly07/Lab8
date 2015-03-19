var total = 0
//console.log("Argv.length " + process.argv.length)
for(var i = 0; i < process.argv.length; i++){
	if(i >= 2){
		total += Number(process.argv[i])
	}
}
console.log(total)

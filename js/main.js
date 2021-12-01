// console.log(
//     '안녕하세요 js 코드입니다.'
// );

// function QuestionsMarks(str) { 
    
// 	var res=false;

//     answer = str.toNewlowerCase();

//     for (check : str){

//     };

// 	for(var i=0;i<str.length;i++){
// 		for(var j=i+1;j<str.length;j++){
// 			if(Number(str[i])+Number(str[j])===10){
// 				res=true;
// 				if(str.slice(i,j).split('?').length-1<3){
// 					return false
// 				}
// 			}
// 		}
// 	}
// 	return res;
// }


var strings = 'this iS a TeSt 523 Now!';
var i=0;
var character='';

while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character * 1)){
        // alert('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            // alert ('upper case true');
        }
        if (character == character.toLowerCase()){
            // alert ('lower case true');
        }
        character.match(toLowerCase())
    }
    i++;

    console.log(
        character
        // '안녕하세요 js 코드입니다. 123'
    );   

}

function matrix2(){
	var arr = [[0,0],[0,0]];

	arr[0][0] = document.getElementById('112').value;
	arr[0][1] = document.getElementById('122').value;


	arr[1][0] = document.getElementById('212').value;
	arr[1][1] = document.getElementById('222').value;

	var det = parseInt(math.det(arr));
	document.getElementById('result2').value = det;

	console.log(arr);
	console.log(det);

}

function matrix3(){
	var arr2 = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];

	arr2[0][0] = document.getElementById('11').value;
	arr2[0][1] = document.getElementById('12').value;
	arr2[0][2] = document.getElementById('13').value;

	arr2[1][0] = document.getElementById('21').value;
	arr2[1][1] = document.getElementById('22').value;
	arr2[1][2] = document.getElementById('23').value;

	arr2[2][0] = document.getElementById('31').value;
	arr2[2][1] = document.getElementById('32').value;
	arr2[2][2] = document.getElementById('33').value;

	var det2 = parseInt(math.det(arr2));

	document.getElementById('result3').value = det2;

	console.log(arr2);
	console.log(det2);


}





// <script type="text/javascript">        
//  
// var arr = [ [ 6, 1, 1 ], [ 4, -2, 5 ], [ 2, 8, 7 ] ]
//   
// /* 
//  *       a b c
//  * arr = d e f
//  *       g h i
//  * 
//  * determinant = a*(e*i - f*h) - b*(d*i-f*g) + c*(d*h - e*g)
//  * 
//  */
//   
// var determinant = arr[0][0] * (arr[1][1]*arr[2][2] - arr[1][2]*arr[2][1]) -
//                   arr[0][1] * (arr[1][0]*arr[2][2] - arr[1][2]*arr[2][0]) +
//                   arr[0][2] * (arr[1][0]*arr[2][1] - arr[1][1]*arr[2][0]);
//   
//  
// document.write(determinant);
//             
//  
// /*
// run:
//    
// -306 
//      
// */
//  
// </script>
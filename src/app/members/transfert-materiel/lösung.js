//Author Youssef DEblij
//Eklärung : Sei Eine Tabelle T[n][n] ist bereits gefüllt
//           Sei Ein Tabelle Tr fült von all index  Nachbaren zwichen  Element  
//            Sei Ein Tabelle temp nur "Temporary ""     
//bsp:       
let t = [[0,1,0,1,0],
         [1,1,0,1,0],
         [1,1,1,1,0],
         [0,0,0,1,0]]; 

let tr = [];
var temp = [];
//init :
if(t[0][0] == 1 ){
    if(t[1][0] == 1 ){
        if(t[0][1] == 1 ) tr.push([[0,0],[0,1],[1,0]]) ;
        else tr.push([[0,0],[1,1]]) ;
    }
}         
//get All les 1 bzhg :
for(var i = 1 ; i< t.length; i++){

    for(var j = 0 ; j< t[i].length(); j++){
             temp = [[i,j]];
            if(t[i][j] == 1){
                if(j < t[i].length() ){
                    if(t[i][j+1] == 1){
                        temp.push([i,j+1]);
                    }
                }
                if(i < i.length ){
                    if(t[i+1][j] == 1){
                        temp.push([i+1,j]);
                    }
                }

            }

         tr.push(temp);   

    }

}

//Calcul Nbr island
var nbrrelation = tr.length;
for(var i = 0 ; i< tr.length; i++){
    for(var j = 1 ; j < tr[i].length; j++ ){
        temp = tr[i][j];
            for(var intI = i ; intI < tr.length; intI++ ){
                for(var intj = 1 ; intj < tr[i].length; intj++ ){
                            if( temp == tr[intj][intj]) nbrrelation--;
                        
                }

            }
    }
}

//Show Nbr island : Js
console.log(nbrrelation);

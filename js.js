
// funky is button activated function

function funky() {

     console.clear();

     muppets_dance();




     for (i = 0; i < 4; i++) {

          testing(mega_array[i],"row",i);
          testing(testing_column(i),"column",i);
          testing(quartes[i],"quearter",i)
    }


}


function muppets_dance() {

  // var tab1 = document.getElementById("1").getElementsByTagName('input');


   tablica_1 = [getInput(1)[0].value, getInput(1)[1].value, getInput(1)[2].value, getInput(1)[3].value, ];
   tablica_2 = [getInput(2)[0].value, getInput(2)[1].value, getInput(2)[2].value, getInput(2)[3].value, ];
   tablica_3 = [getInput(3)[0].value, getInput(3)[1].value, getInput(3)[2].value, getInput(3)[3].value, ];
   tablica_4 = [getInput(4)[0].value, getInput(4)[1].value, getInput(4)[2].value, getInput(4)[3].value, ];

   mega_array= [tablica_1,tablica_2,tablica_3,tablica_4]

   quartes= [

       [
         getInput(1)[0].value, getInput(1)[1].value,getInput(2)[0].value, getInput(2)[1].value
       ],

       [
         getInput(1)[2].value, getInput(1)[3].value,getInput(2)[2].value, getInput(2)[3].value
       ],

       [
         getInput(3)[0].value, getInput(3)[1].value,getInput(4)[0].value, getInput(4)[1].value
       ],


       [
         getInput(3)[2].value, getInput(3)[3].value,getInput(4)[2].value, getInput(4)[3].value
       ]



   ]


}



function getInput(a) {
  return (Array.from(document.getElementById(a).getElementsByTagName('input')))
}


// ar of array
// d for dimension
// i for numer of respectivelu row/column

function testing(ar,d,i) {

    testar = []; //array for chekcing repeating elementes
    error_log=0; // tracking number of errors

    ar.forEach(function(item,i) {

      if (testar.includes(item)) {
        error_log+=1
      } else {
        testar.push(item);
      }

    })

    if(error_log==0){
      console.log('PERFECT! tested '+d + ' nr '+ (i+1));
    } else {console.log("u got "+ error_log + " errors in"+ d + ' nr '+ (i+1));}

}

//




function testing_column(a){

    column = [

        tablica_1[a],
        tablica_2[a],
        tablica_3[a],
        tablica_4[a]

    ]

    return column;

}


function printCons(t) {
  document.getElementById('console').innerText = t

}

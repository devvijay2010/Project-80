var name_of_ppl;
function addname() {
    var Guestname = document.getElementById("name_add_input").value;
    name_of_ppl.push(Guestname);
}
document.getElementById("sort_name_button").style.display="block";

function sorting() {
    name_of_ppl.sort()
}
function searching() {
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<name_of_ppl.length; j++)
    {
        if(s==name_of_ppl[j]){
            found=found+1;
        }
    }
document.getElementById("p2").innerHTML="name found "+found+"time/s";
console.log("name found "+found+"time/s");
}

console.log("script loaded");



function makeInputs() {
    var parent = document.getElementById("base-list")
    
    for (let i = 1; i <= 36; i++) {
        var input = document.createElement("input")
        input.id = `base-${i}`
        input.oninput = function(){calcBases(i)};
        input.placeholder = `Base ${i}`

        parent.appendChild(input);
    }



}

document.addEventListener("DOMContentLoaded", function() {
    makeInputs();
  });


function calcBases(base) {


    id = `base-${base}`

    console.log("Id:", id)
    console.log(document.getElementById(id))
    num = document.getElementById(id).value

    if (num === "") return

    console.log("Number is", num)
    
    for (let i = 1; i <= 36; i++) {
        if (i != base) {

            base_i_num = parseInt(num, base)

            queryO = `#base-${i}`
            
            val = document.querySelector(queryO)
            if (val) {
                val.value = base_10_to_base(i, base_i_num)
            }
            console.log(base_i_num)
        }
    }
    
}


function base_10_to_base(base, num) {
    if (base === 1) {
        console.log("What", num)
        retstr = ""
        for (let i = 0; i < num; i++)
            retstr += "1";
        return retstr
    }
    else return num.toString(base)
}
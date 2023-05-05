

const encrypter = () =>{
    let word = document.getElementById("input-text").value;

    let wordEncrypter = []
    for (let i = 0; i <= word.length - 1; i++) {
       switch (word[i]) {
        case `a`:
            wordEncrypter.push(`ai`)
            break;
        case `e`:
            wordEncrypter.push(`enter`)
            break;
        case `i`:
            wordEncrypter.push(`imes`)
            break;
        case `o`:
            wordEncrypter.push(`ober`)
            break;
        case `u`:
            wordEncrypter.push(`ufat`)
            break;
        default:
            wordEncrypter.push(word[i])
            break;
       }        
    }
    console.log(wordEncrypter.join(``));
    //alert(wordEncrypter.join(``))
    let world = wordEncrypter.join(``)
    dele()
    putText(world)
}

//encrypter(`hola como estas`)

const decrypt = () =>{
    var world = document.getElementById("input-text").value;
    let wordDecryp = []
    for (let i = 0; i <= world.length - 1; i++) {
        if(world[i] == `a` && world[i+1] == `i`){
            wordDecryp.push(`a`)
            i++
        }else if(world[i] == `e` && world[i+1] == `n` && world[i+2] == `t`){
            wordDecryp.push(`e`)
            i = i + 4
        }else if(world[i] == `i` && world[i+1] == `m` && world[i+2] == `e`){
            wordDecryp.push(`i`)
            i = i + 3
        }else if(world[i] == `o` && world[i+1] == `b` && world[i+2] == `e`){
            wordDecryp.push(`o`)
            i = i + 3
        }else if(world[i] == `u` && world[i+1] == `f` && world[i+2] == `a`){
            wordDecryp.push(`u`)
            i = i + 3
        }else{
            wordDecryp.push(world[i]) 
        }

    }
    console.log(wordDecryp.join(``));
    let word = wordDecryp.join(``)
    dele()
    putText(word)
    
}
const dele = () =>{
    var miDiv = document.getElementById("div-derecho");
    var imagen = miDiv.getElementsByTagName("img")[0];
    console.log(imagen);
    if (imagen) {
        miDiv.removeChild(img);
    }
}


function copy() {
    const text = document.getElementById("copy-text").innerText;
    navigator.clipboard.writeText(text).then(function() {
      console.log("Texto copiado al portapapeles: " + text);
    }, function(err) {
      console.error("Error al copiar el texto: ", err);
    });
  }


  

const putText = (world)=>{
    var myDiv = document.getElementById("div-derecho");
    myDiv.innerHTML = `
        <p id="copy-text"  class="text-two">${world}</p>
        <button id="copy" onclick="copy()" class="button-tree">Copiar</button>
    `;
}





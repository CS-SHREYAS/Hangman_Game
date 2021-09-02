window.onload=function(){
    let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alphaBox=document.querySelector(".alphaBox")
    let resultBox=document.querySelector(".result")

    let alphaStr=''
    for(let i=0;i<alphabets.length;i++){
        alphaStr+=`<div class="alpha">
                        ${alphabets[i]}
                   </div>`
    }
    alphaBox.innerHTML=alphaStr;

    // alphaBox.onclick=function(e){
    //     alert(e.target)
    //     console.log(e.target)
    // }

    alphaBox.onclick=function(e){
    //    if(e.target && e.target.nodeName.toLowerCase()=='div'){
        if(e.target && e.target.className=='alpha'){
        //    alert(e.target.innerHTML)
            // console.log(e.target.innerHTML)
            let letter=e.target.innerHTML.trim()
            dword=update(letter,word)
            console.log(dword);
            updateRes(dword)
            e.target.classList.add("disable")

            if(word.includes(letter)){
                update()
            }
            else{
                updateLife()
                resultBox.innerHTML+=images[life]
            }

            if(life<=0){
                alert("You Lost")
            }   
        }
    }

    function genWord(){
        let words=["ironman","mumbai","book","london",'keychain'];
        let i=Math.floor(Math.random()*words.length)
        return words[i]
    }

    function genDashedString(word){
        return Array.from(word).map(letter=>"_").join("")
    }
    
    function updateRes(word){
        let wordBox=document.querySelector(".wordBox")
        wordBox.innerHTML=`<h1>${word}</h1>`
    }

    function update(letter,word){
        return Array.from(word).map((l,i)=>l==letter? l:dword[i]).join("")
    }

    let word=genWord().toUpperCase()
    console.log(word)
    let dword=genDashedString(word) 
    updateRes(dword)


    let life=9
	function updateLife(){
		life--;
	}

    let images={
        8:`<img src="frame.png" class="img1">`,
        7:`<img src="noose.png" class="img2">`,
        6:`<img src="body01-head.png" class="img3">`,
        5:`<img src="body01-shirt.png" class="img4">`,
        4:`<img src="body01-shorts.png" class="img5">`,
        3:`<img src="body01-leftarm.png" class="img6">`,
        2:`<img src="body01-rightarm.png" class="img7">`,
        1:`<img src="body01-leftleg.png" class="img8">`,
        0:`<img src="body01-rightleg.png" class="img9">`
    }
}
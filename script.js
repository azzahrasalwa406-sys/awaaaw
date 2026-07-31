const letter = `haloww bb happy level up dayyyy!! akhirnya kamu 18!!!! hope u always healthy, happy and have lot of joyyyyiee💕💕 semoga kamu juga selalu dikelilingi sama orang orang baikkkkk, aku selalu berharap setiap hari kamu jadi lebih baik dalam hal apapunnn, selalu jadi apa yang kamu mauu.❗️❗️

aku beruntung banget bisa ketemu kamu in this life not in the other life❗️❗️aku seneng banget bisa kenal kamu selama iniiii, kamu selalu berusaja buat jadi orang baikkk, keep going bb💕💕 semoga perbuatan baik yang kamu lakuin ke orang bisa balik ke kamu dan orang sekitar kamu jadi kebaikan yang lebih besar lagiii❗️❗️

i hope uor relationship can be longer than everything, i really do. makasiiii yaaa buat semuanyaa aku sangat amat happyyyyyyyy, sowwyyy if i do something wronggg, u can tell me whats wrongggg. soalnya kadang aku pelupaa sama ga pekaaa, jadi apapun yang kamu rasain i hope u say semuanya ke aku. aku seneng banget kalo kamu lakuin itu💕💕

oiya semangat buat hari iniiii, aku cuma bisa semangatin sama doain kamu disiniiii, i always here yapsss, not in bandung but in ur heart❗️❗️ aku ga sabar bangett buat meet lagiii, mana masih agak lama kannnn tapi isokayyy ini waktu buat kita sama sama berkembang dan tumbuh buat ketemu di versi terbaik kitaa💕💕

jaga kesehatan yappsss pentinggg banget my engineer aku❗️❗️baik baik di malang nantiii bahagia selaluuu semangaaaatssss❗️❗️❗️

i always wait, i miss u sm bb.`;


function changePage(page){

    document.querySelectorAll(".page")
    .forEach(p=>{
        p.classList.remove("active");
    });


    document.getElementById(page)
    .classList.add("active");

}



function openGift(){

    changePage("pinPage");


   let music = document.getElementById("music");

music.volume = 0.5;

music.play()
.then(() => {
    console.log("Music playing");
})
.catch(() => {
    alert("Klik lagi untuk menyalakan musik 🎵");
});



function checkPin(){

    let pin=document.getElementById("pinInput").value;


    if(pin==="310708"){

        changePage("birthday");

        createHearts();

    }

    else{

        document.getElementById("wrong").innerHTML=
        "Wrong PIN 🥺 Try again";

    }

}



function showLetter(){

    changePage("letter");


    let text=document.getElementById("letterText");

    text.innerHTML="";


    let i=0;


    function typing(){

        if(i<letter.length){

            text.innerHTML+=letter.charAt(i);

            i++;

            setTimeout(typing,20);

        }

    }


    typing();

}



function showGallery(){

    changePage("gallery");

}



function showEnd(){

    changePage("ending");

}




function createHearts(){

    setInterval(()=>{


        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤";


        heart.style.left=
        Math.random()*100+"%";


        heart.style.fontSize=
        Math.random()*30+15+"px";


        heart.style.animationDuration=
        Math.random()*5+5+"s";


        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },8000);


    },300);

}

 let placeholder=document.getElementById("Placeholder");
let image=document.getElementById("mainImage");
function Reset() {
    document.getElementById("Lhint").innerHTML = "Tap to View";
    document.getElementById("Khint").innerHTML = "Tap to View";
    document.getElementById("Ihint").innerHTML = "Tap to View";
    document.getElementById("Qhint").innerHTML = "Tap to View";
    
    document.getElementById("Lhint").style.color = "rgba(255,255,255,0.6)";
    document.getElementById("Khint").style.color = "rgba(255,255,255,0.6)";
    document.getElementById("Ihint").style.color = "rgba(255,255,255,0.6)";
    document.getElementById("Qhint").style.color = "rgba(255,255,255,0.6)";
}
function Lfucntion(){
    Reset();
    let btn=document.getElementById("Lahore");
    image.src="Lahore.jpg.jpeg";
    image.style.display="block"
    placeholder.style.display="none";
    let hint=document.getElementById("Lhint");
    hint.innerHTML="Viewing";
    hint.style.color="#3b82f6"

}

function kfucntion(){
    Reset();
    let btn=document.getElementById("Karachi");
    image.src="Karachi.jpg.jpeg";
    image.style.display="block"
    placeholder.style.display="none";
    let hint=document.getElementById("Khint");
    hint.innerHTML="Viewing"
    hint.style.color="#3b82f6"

}

function Ifucntion(){
    Reset();
    let btn=document.getElementById("Islamabad");
    image.src="Islamabad.jpg.jpeg";
    image.style.display="block"
    placeholder.style.display="none";
    let hint=document.getElementById("Ihint");
    hint.innerHTML="Viewing";
    hint.style.color="#3b82f6"

}

function Qfucntion(){
    Reset();
    let btn=document.getElementById("Quetta");
    image.src="Quetta.jpg";
    image.style.display="block";
    placeholder.style.display="none";
    let hint=document.getElementById("Qhint");
    hint.innerHTML="Viewing";
    hint.style.color="#3b82f6"

}
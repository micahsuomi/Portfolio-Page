var showIn = document.getElementsByid('partnerImg');

showIn.addEventListener('mouseover', openName);
showOut.addEventListener('mouseout', closeName);

function openName() {
    document.getElementById("partnerName").innerHTML +="Vechain";
 

}

function closeName(){
    companyName.style.display = 'none';
    console.log('connected')
}
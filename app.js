let colorPalette=document.querySelector("#color-palette");
let colorCodeText=document.querySelector("#color-code");
let _title=document.querySelector("h1");
let _copy=document.querySelector("#copy");

colorCodeText.textContent="#000000";

colorPalette.addEventListener("input", UpdateColor);
_copy.addEventListener("click", Copy);

function UpdateColor(){
    let colorCode= colorPalette.value;
    colorCodeText.textContent=colorCode;

    _title.style.color= colorCode;

    if (colorCode == "#000000") {
        _title.style.color = "#FFFFFF";
    }
}
function Copy(e){
    e.preventDefault();
    navigator.clipboard.writeText(colorCodeText.textContent.toUpperCase());
    DangerToast("Copied : " + colorCodeText.textContent.toUpperCase());
}
function DangerToast(text) {
    Toastify({
        text: `${text}`,
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
            background: "white",
            color: "black",
        },
        stopOnFocus: true,
    }).showToast();
}
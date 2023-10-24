function PageAcessByCode()
{
    var done = 0;
    var code = document.codeInput.code.value;
    if (code == "QmFzZSBkZSBEYWRvcw==") { window.location="html/12-03-XX.html"; done=1; }
    if (code == "277353") { window.location="html/HeNTaI.html"; done=1; }
    if (code == "KeyboardCat") { window.location="html/Keyboard-Cat.html"; done=1; }
    if (code == "Integrantes") { window.location="html/Integrantes.html"; done=1; }
    if (code == "BeatrixMiller") {window.location=""; done=1 }

    if (done == 0) { alert("Código inválido."); }
}
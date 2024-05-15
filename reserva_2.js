
function startLoading() {
    let progressBar = document.querySelector(".progress_bar");
    let width = 0;
    let interval = setInterval(frame, 75); 
    let load = false;
    let show_text = document.querySelector(".completion_message")
    let hide_text = document.querySelector(".loading")

    function frame() {
        if (width >= 100) {
            clearInterval(interval); 
            load = true;
            show();
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }

    function show(){
        if (load){
            show_text.style.display = "block";
            hide_text.style.display = "none";
        }
    }
}


window.onload = startLoading;

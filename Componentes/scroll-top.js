export function up(){

    const $btn_up = document.getElementById("hidden"),
        { scrollTop } = document.documentElement;

    if(scrollTop >= 5000){
        $btn_up.classList.remove("none");
    }else{
        $btn_up.classList.add("none");
    }
};
$(function(){
    // calls the code every 5 seconds
    setInterval(function(){
        // gets the id of the image that is currently active and makes it hidden
        let currentActive = $(".active").attr("id");
        $(`#${currentActive}`).removeClass("active").addClass("deactive");

        // breaks the element id into an array
        let currentActiveArray = currentActive.split("");

        // changes the images accordingly
        if(currentActiveArray[currentActiveArray.length-1] == 4){
            currentActiveArray[currentActiveArray.length-1] = 1;
        }else{
            let num = currentActiveArray[currentActiveArray.length-1];
            num++
            currentActiveArray[currentActiveArray.length-1] = num;
        }
        
        // sets new image to active
        let newActive = currentActiveArray.join("");
        $(`#${newActive}`).removeClass("deactive").addClass("active");
    }, 5000);
})
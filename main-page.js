var navMenuAnchorTags = document.querySelectorAll('.nav-bar-items a');


for(var i = 1; i < navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(targetSectionID);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);

        interval = setInterval(function(){
            scrollVertically(targetSection);
        },20);
    });
    function scrollVertically(targetSection) {
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
        console.log(targetSectionCoordinates);
        if (targetSectionCoordinates.top < 0) {
            console.log(targetSectionCoordinates.top);
            clearInterval(interval);
            return;
        }
        window.scrollBy(0, 50);
    }
}

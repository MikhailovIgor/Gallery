var elem = document.createElement('script');
elem.src = 'https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&count=108&callback=callbackFunc';
document.head.appendChild(elem);
function callbackFunc(result) {
    result.response.items[0];
    var counts = result.response.count;

    window.onload = function () {
        for (var i = 0; i <= counts; i++) {
            var elem = document.createElement("img");
            elem.setAttribute("src", result.response.items[i].sizes[6].url);
            elem.setAttribute("id", i);
            elem.setAttribute("class", "my-flex-block");
            elem.setAttribute("onclick", "showModalWin(this.id)");
            document.getElementById("images").appendChild(elem);
                   };
    };

};
function showModalWin(id) {

    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    var modalWin = document.getElementById('popupWin');

    var elem = document.createElement('img');
    var currentImg = document.getElementById(id);
    elem.setAttribute('src', currentImg.src);
    elem.setAttribute('id', 'modalImg');
    document.getElementById("image").appendChild(elem);
    modalWin.style.display = 'block';

    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = 'none';
        document.getElementById("image").removeChild(elem);
        return false;
    };
    var nextBut = document.getElementById("arrow next");
    var prevBut = document.getElementById("arrow prev");

    nextBut.onclick = function(){
        var nextImg = document.getElementById(++id);
        elem.setAttribute('src', nextImg.src);
    };

    prevBut.onclick = function(){
        var nextImg = document.getElementById(--id);
        elem.setAttribute('src', nextImg.src);
    };

};
window.onload = function () {
    document.getElementById('loader').style.display = 'none';
}



const emojiDiv = document.querySelectorAll(".emoji-div")


window.addEventListener('mousemove', function (e) {


    Array.from(emojiDiv).map(element => {
        
        let yPosition = (e.pageY - element.getBoundingClientRect().y.toFixed(0) - (element.offsetHeight / 2)) * -0.11
        let xPosition = (e.pageX - element.getBoundingClientRect().x.toFixed(0) - (element.offsetWidth / 2)) * 0.05
    
        //TODO- getBoundingClientRect.y||.x ===> smaylikin ekranda brauzer serhedlerinden uzagliginin piksel gostericisini gosterir
        //TODO- amma smaylikin yuxari sol noqtesinden hesablama aparir. "element.offsetHeight/2" vasitesile rotate'in merkez 
        //TODO- noqtesini smaylikin ortasina getiririk. 0.11 ve 0.05 emsallari alinan bilecek maximum neticeni 45e getirmeyi hedefleyir
        //TODO- daha boyuk ekranli cihazlarda daha boyuk pixel neticesi alina biler. Bu sebebden asagida if scope'u vasitesile 
        //TODO- yalniz 85deg'dden asagida funksiyanin islemesi temin olunur!!!
    
    
        if (yPosition <= 85 && xPosition <= 85 && yPosition >= -85 && xPosition >= -85) {
            element.style.transform = `perspective(150px) rotateX(${yPosition}deg) rotateY(${xPosition}deg)`
        }
    

    });
});








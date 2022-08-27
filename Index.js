console.log("checker")
let button = document.getElementById("Btn");
button.addEventListener("click",(e)=>{
    // let imageLink = 'https://wallpapersmug.com/download/240x320/b2b266/sonakshi-sinha-bollywood-actress-5k.jpg'
    let imageLink = 'https://wallpapersmug.com/download/3840x2400/3838aa/josephine-langford-actress.jpg'
    // let imageLink = 'https://media.istockphoto.com/videos/over-the-mountain-ski-slope-video-id1297070065'

    let downloadSize = 4020000;//bytes
    let time_start , time_end;
    let downloadSrc = new Image();
    document.getElementById('loaderContent').classList.add("hide");
    document.getElementById('load').classList.remove("hide");
    time_start = new Date().getTime();
    let cacheImg = "?nn" + time_start;
    downloadSrc.src = imageLink + cacheImg;
    console.log(downloadSrc)
    downloadSrc.onload = function(){
        // this function trigger once the image loads
        time_end = new Date().getTime();
        let timeDuration = (time_end - time_start)/1000;//seconds
        let LoadedBits = downloadSize*8;//bit
        let totalSpeed = ((LoadedBits/timeDuration)/8/1024/1024).toFixed(2);
        document.getElementById('loaderContent').classList.remove("hide");
        document.getElementById('load').classList.add("hide");
        document.getElementById("contentvalue").classList.remove("hide");
        console.log(totalSpeed)
        console.log(timeDuration);
        let content = document.getElementById("contentvalue");
        content.innerHTML = `${totalSpeed} <small>Mbps</small>`;
        e.target.innerText = `Check Again`


    }
});

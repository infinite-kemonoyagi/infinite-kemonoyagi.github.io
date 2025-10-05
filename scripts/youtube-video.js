let videoInterval = null;

var channelID = "UCNCFay8HB5XBx1zAZaRMIEg";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

try
{
    $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
        var link = data.items[0].link;
        document.getElementById("youtube-video-information").innerHTML = 
            "<a> Last video uploaded <br /> <br />" + 
            `<span style=\"color: white\"> Title: <a id="link-youtube-video" href=\"${link}\">` + data.items[0].title + "<a /> <br /> <br />" +
            "<span style=\"color: white\"> Date: <span style=\"color: rgba(211, 196, 223, 1);\">" + data.items[0].pubDate.split(" ")[0] + "<br /> <br />" +
            "<a />";
        
        const linkName = document.getElementById("link-youtube-video");

        linkName.addEventListener("mouseover", function(_)
        {
            linkName.style.color = "yellow";
        });

        linkName.addEventListener("mouseout", function(_)
        {
            linkName.style.color = "rgba(211, 196, 223, 1)";
        });

        var id = link.substr(link.indexOf("=")+1);
        $("#youtube-video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");

        const video = document.getElementById("youtube-video");
        video.addEventListener("mouseover", function(_) 
        {
            var scaleX = video.getBoundingClientRect().width / video.offsetWidth;
            var width = parseFloat(scaleX);
    
            clearInterval(videoInterval);
            videoInterval = setInterval(frame, 10);
    
            function frame() 
            {
                if (width.toFixed(2) == 1.05) 
                {
                    clearInterval(videoInterval);
                } 
                else 
                {
                    width += (1.05 - width) * 0.1;
                    video.style.transform = `scale(${width})`;
                    video.style.transformOrigin = "center center";
                }
            }
        });
    
        video.addEventListener("mouseout", function(_) 
        {
            var scaleX = video.getBoundingClientRect().width / video.offsetWidth;
            var width = parseFloat(scaleX);
    
            clearInterval(videoInterval);
            videoInterval = setInterval(frame, 10);
    
            function frame() 
            {
                if (width.toFixed(2) == 1) 
                {
                    clearInterval(videoInterval);
                } 
                else 
                {
                    width += (1 - width) * 0.1;
                    video.style.transform = `scale(${width})`;
                    video.style.transformOrigin = "center center";
                }
            }
        });
    });
}
catch(error)
{
    console.warn("ERROR! " + error);
}

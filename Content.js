//code for blocking websites
//and our extension by default runs everytime we load a new website
//so everytime I load a website i want to load my own html

const bootstrapUpload = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">';

const htmlSetter = (page) => {
    return`
<div class='container mt-6'>
    <div class='d-flex align-items-center justify-content-center'>
        <div>
            <h1>GET BACK TO WORK PLEASE</h1>
        </div>
    </div>
    <div class='container d-flex align-items-center justify-content-center'>
        <span class="d-inline-block d-flex align-items-center justify-content-center" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
        <button class="btn btn-primary" type="button" disabled>Mr.Focus is Watching Get off ${page}</button>
        </span>
    </div>
    <div class='container d-flex align-items-center justify-content-center'>
    </div>
</div> `
}

const cssUploader = (page) => {
    return` 

    <style> 
        body {
            background: url("https://cdna.artstation.com/p/assets/images/images/009/620/916/original/carlijn-tobben-spooky-gif-by-carlijn-tobben-1.gif?1519982568")  no-repeat center fixed;
            background-size: cover;
        }
    </style>
    
    `
}


const websitesList = ["www.youtube.com", "www.disneyplus.com", "www.twitch.tv", "www.netflix.com", "www.amazon.com", "www.tiktok.com"]

for(website of websitesList) {
    if(window.location.hostname === website) {
        //load bootsrap
        document.head.innerHTML = bootstrapUpload;
        document.head.innerHTML += cssUploader(website);
        document.body.innerHTML = htmlSetter(website);
        break;
    }
}
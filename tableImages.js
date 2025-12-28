document.addEventListener("DOMContentLoaded", function(){
    //Array for images
    const images = [
        {src: "sunflower.jpg", alt: "sunflower"},
        {src: "hydrangea.jpg", alt: "hydrangea"},
        {src: "rose.jpg", alt: "rose"}
    ];

    //Array for links
    const links = [
        {href: "https://unsplash.com/es/s/fotos/sunflower", text: "Sunflowers"},
        {href: "https://unsplash.com/es/s/fotos/hortensia", text: "Hydrangeas"},
        {href: "https://unsplash.com/es/s/fotos/rosa", text: "Roses"}
    ];

    //We create the table
    const table = document.createElement("table");

    //We create row 1
    let row1 = document.createElement("tr");
        //Loop to create images an cells
        for (let i=0; i<images.length; i++){
            //We create the cell
            let imageCell = document.createElement("td");
            //We create the image
            let image = document.createElement("img");
                image.setAttribute("src", images[i].src);
                image.setAttribute("alt", images[i].alt);
            //We add the image to the cell, and the cell to the row
            imageCell.appendChild(image);
            row1.appendChild(imageCell);
        }
    
    //We create row 2
    let row2 = document.createElement("tr");
        //Loop to create links and cells
        for (let i=0; i<links.length; i++){
            //We create the cell
            let linkCell = document.createElement("td");
            //We create the link
            let link = document.createElement("a");
                link.setAttribute("href", links[i].href);
                //We create the text of the link
                let linkText = document.createTextNode(links[i].text);
            //We add the text to the link, the link to the cell, and the cell to the row
            link.appendChild(linkText);
            linkCell.appendChild(link);
            row2.appendChild(linkCell);
        }
    //We add the rows to the table, and the table to the document
    table.appendChild(row1);
    table.appendChild(row2);
    document.body.appendChild(table);
});
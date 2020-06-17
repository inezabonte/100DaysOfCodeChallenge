function randomColor(){
    const red = Math.floor(Math.random()*256).toString()
    const green = Math.floor(Math.random()*256).toString()
    const blue = Math.floor(Math.random()*256).toString()
    return `rgb(${red}, ${green}, ${blue})`;
}



let but = document.querySelector(".submit")
but.addEventListener('click', event => {
    event.preventDefault()
    let color = randomColor();
    document.querySelector('.colour').style.backgroundColor = color
    function rgbToHsl() {

        color = color.replace('rgb(', '')
        .replace(')', '')
        .split(",")
        .map(colour => parseInt(colour));
    
        let r = color[0],
            g = color[1],
            b = color[2];
    
        r /= 255;
        g /= 255;
        b /= 255;
    
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax -cmin,
            h = 0,
            s = 0,
            l = 0;
    
        if (delta == 0)
            h = 0;
          // Red is max
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
          // Green is max
        else if (cmax == g)
            h = (b - r) / delta + 2;
          // Blue is max
        else
            h = (r - g) / delta + 4;
        
          h = Math.round(h * 60);
            
          // Make negative hues positive behind 360°
          if (h < 0)
              h += 360;
        
        l = (cmax + cmin) / 2;
    
        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
    
        if(h < 180){
            h += 180;
        }else if(h > 180){
            h -= 180;
        }else{
            h = 0
        }
    
        return "hsl(" + h + "," + s + "%," + l + "%)";
            
    
    }
    document.querySelector(".complement").style.backgroundColor = rgbToHsl();
} )
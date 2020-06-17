function rgbToHsl(rgb) {

    rgb = rgb.replace('rgb(', '')
    .replace(')', '')
    .split(",")
    .map(colour => parseInt(colour));

    let r = rgb[0],
        g = rgb[1],
        b = rgb[2];

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

    return "hsl(" + h + "," + s + "%," + l + "%)";
        

}
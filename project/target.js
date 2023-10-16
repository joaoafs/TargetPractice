// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;

  }

  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }

  // Draws the target (i.e., a circle)
  // and its label


    chose_color() {
        // Define a color for each group
        const red = color(255, 0, 0);
        const yellow = color(255,255,0);
        const orange = color(255,127,0);
        const green = color(85, 178, 78);
        const darkGreen = color(0,90,0);
        const smoothie = color(255,136,171);
        const white = color(255,255,255);
        const colorJuices = color(115,157,250);
        const colorCream = color(231,141,130);
        const colorPotato = color(183, 146, 104);
        const colorPepper = color(187, 17, 42);
        const berinjela = color(105,59,88);
        const yoghurtColor = color(225, 175, 183);
        const lightGreen = color(0,180,0);
        const garlicColor = color(242,244,210);
        const pink = color(255,0,255);
        const gold = color(255,215,0)

        const index = listas.findIndex(item => item[1] === this.id);

        if ([7,23,24,25,60,71,72,75,76].includes(index)) return red;
        if ([2,10,11,19,78].includes(index)) return yellow;
        if ([14,18,15,26,63].includes(index)) return orange;
        if ([28,29,30,31,32,33,34,35].includes(index)) return colorJuices;
        if ([36].includes(index)) return smoothie;
        if ([37,38,39,40,41,42,43,44,45,46,77].includes(index)) return white;
        if ([47,48,49,50,51,52,53,54,55].includes(index)) return yoghurtColor;
        if ([56,57].includes(index)) return colorCream;
        if ([59].includes(index)) return berinjela;
        if ([65].includes(index)) return garlicColor;
        if ([69,74].includes(index)) return colorPotato;
        if ([61,68,70,73].includes(index)) return colorPepper;
        if ([0,1,2,3,3,4,8,9,12,16,17,21,22,64,79,62,67,58,66].includes(index)) return darkGreen;
        if ([20].includes(index)) return pink;
        if ([6].includes(index)) return gold;
        if ([5,13,27].includes(index)) return lightGreen;

        // Default color if not found in any group
        return color(100, 100, 100);
    }

  label_color(){
      const index = listas.findIndex(item => item[1] === this.id);

      if(
          [2,10,11,19,78,37,38,39,40,41,42,43,44,45,46,77,47,48,49,50,51,52,53,54,55,56,57,65,6,69,74]
              .includes(index)
        )return color(0,0,0);

      return color(255,255,255);
  }


  draw() {
      // Draw target
      fill(color(this.chose_color()));
      circle(this.x, this.y, this.width);

      // Draw the big first letter
      textSize(35); // Increase the font size to a larger value
      fill(this.label_color());
      textAlign(CENTER, CENTER);
      strokeWeight(2); // Increase stroke weight to make the text look bolder
      text(this.label.charAt(0), this.x, this.y - 10); // Adjust the position to be closer to the center of the circle
      strokeWeight(1); // Reset the stroke weight to the default value

      // Draw the full label below the big first letter
      textSize(12.5); // Change the font size back to the original value
      textAlign(CENTER, CENTER);
      text(this.label, this.x, this.y + 20); // Adjust the position to draw the label closer to the big first letter
  }
}
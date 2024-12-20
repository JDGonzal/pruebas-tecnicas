class Track{
  constructor(center, radius){
    this.center = center;
    this.radius = radius;
  }

  
  getPosition(offset) {
    return {
      x: this.center.x + Math.cos(offset) * this.radius,
      y: this.center.y + Math.sin(offset) * this.radius,
    };
  }

  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}

export default Track; // Exporto la clase `Track` para poder importarla en otro archivo

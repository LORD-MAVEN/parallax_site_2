window.addEventListener('scroll', function(){
    this.document.getElementById('hill1').style.marginTop = this.window.scrollY * 0.25 + 'px';
    this.document.getElementById('heading').style.marginTop = this.window.scrollY * 0.4 + 'px';
    this.document.getElementById('leaf').style.marginLeft = this.window.scrollY * 0.5 + 'px';
    this.document.getElementById('hill2').style.marginLeft = this.window.scrollY * -0.18 + 'px';
    this.document.getElementById('hill3').style.marginLeft = this.window.scrollY * 0.24 + 'px';
    this.document.getElementById('hill4').style.marginLeft = this.window.scrollY * -0.23 + 'px';
    this.document.getElementById('plant').style.marginTop = this.window.scrollY * 0.1 + 'px';
    this.document.getElementById('tree').style.marginTop = this.window.scrollY * 0.2 + 'px';
})
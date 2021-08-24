function smoothBg() {
  if (this.scrollY > this.innerHeight / 1.2){
      document.body.classList.add('bg-active');
    }else {
      document.body.classList.remove('bg-active');
    }
}

window.addEventListener('scroll', smoothBg);

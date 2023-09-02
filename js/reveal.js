//configuração padrao que os docs pedem 
window.sr = ScrollReveal({reset: true});

// >>> Pag index
sr.reveal('.section_resumo ',{ 
  duration: 1000,
  origin: 'left',
  distance: '30px'
});
sr.reveal('.section_resumo .descricao h2 ',{ 
  duration: 1000,
  origin: 'right',
  distance: '10px',
  delay: 400
});
sr.reveal('.section_resumo .descricao .box-btn ',{ 
  duration: 1000,
  origin: 'bottom',
  distance: '10px',
  delay: 500
});


sr.reveal('.section_about_us ',{ 
  duration: 1000,
  origin: 'right',
  distance: '30px',
  delay: 500
});
sr.reveal('.section_about_us .titulo ',{ 
  duration: 1000,
  origin: 'right',
  distance: '30px',
  delay: 600,
});
sr.reveal('.section_about_us .box-descricao button ',{ 
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  delay: 300,
});



///////////// FIM pag index /////

// ___PAG HOME_______

sr.reveal('.banner ',{ 
  duration: 1000,
});
sr.reveal('.banner .titulo ',{ 
  duration: 1000,
  origin: 'top',
  distance: '30px',
  delay: 330,
});
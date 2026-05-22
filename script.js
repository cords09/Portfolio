

/* =========================
   BOOT
========================= */

navigator.language

setTimeout(() => {

  document
  .getElementById('boot')
  .classList
  .add('hide')

}, 3200)

/* =========================
   THEME MENU
========================= */

function toggleMenu(){

  document
  .getElementById('themeMenu')
  .classList
  .toggle('active')

}

function setTheme(theme){

  document.body.className = theme

}

/* =========================
   PARTICLES
========================= */

for(let i=0; i<40; i++){

  const p = document.createElement('div')

  p.classList.add('particle')

  p.style.left = Math.random() * 100 + 'vw'

  p.style.animationDuration =
  (Math.random() * 20 + 10) + 's'

  p.style.opacity =
  Math.random() * .25

  document.body.appendChild(p)

}


function copyEmail(){

  const email =
  "guilhermecordeiro_s@outlook.com"

  navigator.clipboard.writeText(email)

  const text =
  document.getElementById("copyText")

  text.innerText = "Copiado com sucesso ✔"

  setTimeout(() => {

    text.innerText = "Clique para copiar"

  }, 2000)

}




const cursor =
document.getElementById('cursor')

document.addEventListener('mousemove', e => {

  cursor.style.left =
  e.clientX + 'px'

  cursor.style.top =
  e.clientY + 'px'

})

/* HOVER */

const hoverItems =
document.querySelectorAll(
'button, .card, a'
)

hoverItems.forEach(item => {

  item.addEventListener('mouseenter', () => {

    cursor.classList.add('hover')

  })


  item.addEventListener('mouseleave', () => {

    cursor.classList.remove('hover')

  })

})


function scrollToSection(id){

  document
  .getElementById(id)
  .scrollIntoView({
    behavior:'smooth'
  })

}


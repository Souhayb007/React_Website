import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
          <div className='aboutTop' 
          style={{backgroundImage:  `url(${MultiplePizzas})`  }}
          ></div>
          <div className='aboutbottom'>
            <h1> ABOUT US</h1>
            <p> Le Lorem Ipsum est simplement du faux texte employé dans la composition
                et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard
                de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble 
                des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, 
                sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant
                des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des ap</p>
          </div>
    </div>
  );
}

export default About;
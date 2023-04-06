import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';
import redDices from '@assets/redDices.jpg';
import roleDices from '@assets/roleDices.jpg';
import '@styles/DiceType.scss';


const DiceType = () => {
    const { language } = useContext(AppContext)

    let title
    let descriptionNormal
    let descriptionRole

    if (language == 'english') {
        title = 'Choose what kind of dice do you want'
        descriptionNormal = <p>Ideal for people who don't want to complicate and want to use normal dices used in the majority of board games. You only have to choose how many dices you want to throw</p>
        descriptionRole = <p>Custom dices are an excellent option for role games that needs an additional thrill. Here you can choose how many dices and how many sides you want the dices to have</p>
    }
    if (language == 'spanish') {
        title = 'Elije qué tipo de dados quieres usar'
        descriptionNormal = <p>Ideal para quienes no quieren complicarse y quieren usar los dados normales que se usan en la mayoría de los juegos de mesa. Solo tienes que elegir cuantos dados quieres tirar</p>
        descriptionRole = <p>Los dados personalizados son una excelente opción para fans de los juegos de rol que requieren una emoción adicional. Aquí puedes elegir cuántos dados y cuantas caras quieres que tengan los dados</p>
    }

    return (
        <main className="DiceType">
            <div className='containment'>
                <h1>{title}</h1>
                    <div className='choose-dice'>
                        <div className='dice-type'>
                            <Link className="Type"  to='/normal'>
                                <img src={redDices} alt=""/>
                                <p>Normal</p>
                            </Link>
                            {descriptionNormal}
                        </div>
                        <div className='dice-type'>
                            <Link className="Type" to="/role">
                                <img src={roleDices} alt="" />
                                <p>Role / Custom</p>
                            </Link>
                            {descriptionRole}
                        </div>
                    </div>
            </div>
        </main>
    );
}

export default DiceType;
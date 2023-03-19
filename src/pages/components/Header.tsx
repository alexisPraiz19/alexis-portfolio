// Tools
import { useEffect } from 'react';
import TypeWriterEffect from '../common/TypeWriterEffect';

export default function Header(){
    return (
        <header className="header">
            <figure className="card_photo-figure">
                <img src="./assets/others/profile-photo.jpg" alt="card-photo" className="card-photo"/>
            </figure>

            <div className="presentation-texts">
                <h2 className="presentation-title" data-section="header" data-value="role">
                    Front-end development
                </h2>

                <span className="presentation-name">Alexis Praiz</span>

                <p  className="regards">
                    ¡Hello 
                    <span className='greeting'>
                        <TypeWriterEffect/>
                    </span>
                </p>
            </div>
        </header>
    );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import './styles.css';
import logoImg from '../../assets/logo.svg';

function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Registry new case</h1>
                    <p>Describe with details to find a hero to solve it.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#eo2041" />
            Back to home.
        </Link>

                </section>

                <form>
                    <input placeholder="Cases title" />
                    <textarea type="email" placeholder="Description" />
                    <input placeholder="Ammount in reals" />

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident;
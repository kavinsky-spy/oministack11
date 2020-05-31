import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';

function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Welcome, APAD</span>

                <Link className="button" to="/incidents/new">Registry new case</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Registred Cases</h1>
            <ul>
                <li>
                    <strong>CASE:</strong>
                    <p>Test case</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Description test</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASE:</strong>
                    <p>Test case</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Description test</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASE:</strong>
                    <p>Test case</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Description test</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASE:</strong>
                    <p>Test case</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Description test</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    )

}



export default Profile;
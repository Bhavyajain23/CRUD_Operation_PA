import React from 'react';
import {  NavLink } from 'react-router-dom';

const Pagination = () => {
    return (
        <div className="container">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center mx-2">
                    <li class="page-item disabled">
                        <NavLink class="page-link" to="/" tabindex="-1" aria-disabled="true">Previous</NavLink>
                    </li>
                    <li class="page-item"><NavLink class="page-link" to="/">1</NavLink></li>
                    <li class="page-item"><NavLink class="page-link" to="/">2</NavLink></li>
                    <li class="page-item"><NavLink class="page-link" to="/">3</NavLink></li>
                    <li class="page-item">
                        <NavLink class="page-link" to="/">Next</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;
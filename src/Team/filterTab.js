import React from 'react';

class FilterNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            


   
            <div class="skew-menu">
                <ul>
                    <li><p data-filter="all">All</p></li>
                    <li><p data-filter=".a">Technical</p></li>
                    <li><p data-filter=".b">Organising</p></li>
                    <li><p data-filter=".c">Faculty</p></li>
                </ul>
            </div>



        );
    }
}
 
export default FilterNav;
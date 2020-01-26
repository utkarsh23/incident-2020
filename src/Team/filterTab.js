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
                    <li><a href="#" data-filter="all">All</a></li>
                    <li><a href="#" data-filter=".a">Technical</a></li>
                    <li><a href="#" data-filter=".b">Organising</a></li>
                    <li><a href="#" data-filter=".c">Faculty</a></li>
                </ul>
            </div>



        );
    }
}
 
export default FilterNav;
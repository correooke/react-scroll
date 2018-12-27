import React, {PureComponent} from 'react';

class CustomerRow extends PureComponent {

    render() {
        const {id, name, picture, onClick} = this.props;

        return (
            <div className="customer-row" key={id} onClick={onClick}>
                <h2>{name}</h2>
                <img className='element-animation' src={picture} alt=""/>
                <p>Al hacer click avanza al item {id + 1}</p>
            </div>
        );
    }
}

export default CustomerRow;

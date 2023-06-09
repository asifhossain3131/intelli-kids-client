import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({toy}) => {
   const{_id,sellerName,toysName,subCategory,toysPrice,toysQuantity,toysPhoto}=toy
    return (
        <tr>
        <th>
        <div className="avatar">
    <div className="w-12">
      <img src={toysPhoto} />
    </div>
  </div>
        </th>
        <td>{sellerName}</td>
        <td>{toysName}</td>
        <td>{subCategory}</td>
        <td>{toysPrice}</td>
        <td>{toysQuantity}</td>
        <td>
            <Link to={`/toy/${_id}`}><button className="btn btn-outline btn-info">See more</button></Link>
        </td>
      </tr>
    );
};

export default ToyRow;
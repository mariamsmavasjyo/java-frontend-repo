import React from 'react'
import InventoryManagement from './Inventory/InventoryManagement'

import OrderManagement from './ordermanagement/OrderManagement'
import Manufacturing from './Manufacturing/Manufacturing'





function Table() {
  return (
    <div>
 
      <InventoryManagement/>
   
      <OrderManagement/>
      <Manufacturing/>
    </div>
  )
}

export default Table;

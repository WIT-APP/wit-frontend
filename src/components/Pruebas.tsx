
import { DataTable } from './data-table/data-table'
// import * as data from '../../data/applicants.json'
import { columns } from './data-table/columns'

const data = [
    {
        "id": "728ed52f",
        "amount": 100,
        "status": "pending",
        "email": "m@example.com"
      },
      {
        "id": "728ed52f",
        "amount": 100,
        "status": "pending",
        "email": "m@example.com"
      },
      {
        "id": "728ed52f",
        "amount": 100,
        "status": "pending",
        "email": "m@example.com"
      },
      {
        "id": "728ed52f",
        "amount": 100,
        "status": "pending",
        "email": "m@example.com"
      }
]



function Pruebas() {
  return (
    
    <div className="container mx-auto py-10">
    <DataTable columns={columns} data={data} />
  </div>



  )
}

export default Pruebas

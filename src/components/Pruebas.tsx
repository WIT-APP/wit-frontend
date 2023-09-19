
import { DataTable } from './data-table/data-table'
// import * as data from '../../data/applicants.json'
import { columns } from './data-table/columns'

const data = [
    {
        "id": "1a2b3c4d",
        "amount": 50,
        "status": "completed",
        "email": "john.doe@example.com"
      },
      {
        "id": "5e6f7g8h",
        "amount": 75,
        "status": "pending",
        "email": "jane.smith@example.com"
      },
      {
        "id": "9i0j1k2l",
        "amount": 120,
        "status": "completed",
        "email": "alice.johnson@example.com"
      },
      {
        "id": "3m4n5o6p",
        "amount": 30,
        "status": "pending",
        "email": "bob.wilson@example.com"
      },
      {
        "id": "7q8r9s0t",
        "amount": 90,
        "status": "completed",
        "email": "sarah.brown@example.com"
      },
      {
        "id": "a1b2c3d4",
        "amount": 60,
        "status": "completed",
        "email": "emma.johnson@example.com"
      },
      {
        "id": "e5f6g7h8",
        "amount": 45,
        "status": "pending",
        "email": "david.smith@example.com"
      },
      {
        "id": "i9j0k1l2",
        "amount": 80,
        "status": "completed",
        "email": "olivia.davis@example.com"
      },
      {
        "id": "m3n4o5p6",
        "amount": 25,
        "status": "pending",
        "email": "william.wilson@example.com"
      },
      {
        "id": "q7r8s9t0u",
        "amount": 110,
        "status": "completed",
        "email": "ava.miller@example.com"
      },
      {
        "id": "v1w2x3y4z",
        "amount": 70,
        "status": "pending",
        "email": "ethan.brown@example.com"
      },
      {
        "id": "0a1b2c3d4e",
        "amount": 95,
        "status": "completed",
        "email": "mia.anderson@example.com"
      },
      {
        "id": "5f6g7h8i9j",
        "amount": 55,
        "status": "pending",
        "email": "noah.evans@example.com"
      },
      {
        "id": "k0l1m2n3o4p",
        "amount": 40,
        "status": "completed",
        "email": "sophia.martin@example.com"
      },
      {
        "id": "q5r6s7t8u9v",
        "amount": 75,
        "status": "pending",
        "email": "jacob.jones@example.com"
      },
      {
        "id": "w0x1y2z3a4b",
        "amount": 120,
        "status": "completed",
        "email": "mia.garcia@example.com"
      },
      {
        "id": "c5d6e7f8g9h",
        "amount": 35,
        "status": "pending",
        "email": "noah.robinson@example.com"
      },
      {
        "id": "i0j1k2l3m4n",
        "amount": 85,
        "status": "completed",
        "email": "olivia.hernandez@example.com"
      },
      {
        "id": "o5p6q7r8s9t",
        "amount": 50,
        "status": "pending",
        "email": "liam.miller@example.com"
      },
      {
        "id": "u0v1w2x3y4z",
        "amount": 105,
        "status": "completed",
        "email": "emma.gonzalez@example.com"
      },
      {
        "id": "a1b2c3d4e5f",
        "amount": 65,
        "status": "pending",
        "email": "aiden.clark@example.com"
      },
      {
        "id": "g6h7i8j9k0l",
        "amount": 42,
        "status": "completed",
        "email": "sophia.lopez@example.com"
      },
      {
        "id": "m1n2o3p4q5r",
        "amount": 88,
        "status": "pending",
        "email": "liam.lee@example.com"
      },
      {
        "id": "s6t7u8v9w0x",
        "amount": 72,
        "status": "completed",
        "email": "ava.lewis@example.com"
      },
      {
        "id": "y1z2a3b4c5d",
        "amount": 58,
        "status": "pending",
        "email": "noah.harris@example.com"
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

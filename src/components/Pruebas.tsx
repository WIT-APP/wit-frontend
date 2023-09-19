
import { DataTable } from './data-table/data-table'
// import * as data from '../../data/applicants.json'
import { columns } from './data-table/columns'
import { useAllApplicants } from '../services/AllApplicants';

const data = [
    {
        "id": "1a2b3c4d",
        "amount": 50,
        "status": "processing",
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
        "status": "processing",
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
        "status": "processing",
        "email": "sarah.brown@example.com"
      },
      {
        "id": "a1b2c3d4",
        "amount": 60,
        "status": "processing",
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
        "status": "processing",
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
        "status": "processing",
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
        "status": "failed",
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
        "status": "processing",
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
        "status": "success",
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
        "status": "processing",
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
        "status": "processing",
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
        "status": "success",
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
        "status": "processing",
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
    const { isLoading, isError, applicant } = useAllApplicants();
  console.log(applicant)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }
  
  return (
    
    <div className="container mx-auto py-10">
    <DataTable columns={columns} data={data} />
  </div>



  )
}

export default Pruebas

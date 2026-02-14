
import { useEffect, useState } from 'react';
import DataTable from '../../layouts/DataTable';
import WebService from '../../services/webService';

export default function WebListContent() {

  const [results, setResults] = useState([])

  useEffect(() => {
    let service = new WebService();
    service.getAllRecords().then(r => setResults(r))
  }, [])

  return (
    <DataTable results={results}></DataTable>
  )
}

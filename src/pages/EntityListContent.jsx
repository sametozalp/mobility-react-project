
import { useEffect, useState } from 'react';
import DataTable from '../layouts/DataTable';
import EntityService from '../services/entityService';

export default function EntityListContent() {

  const [results, setResults] = useState([])

  useEffect(() => {
    let service = new EntityService();
    service.getAllRecords().then(r => setResults(r))
  }, [])

  return (
    <DataTable results={results}></DataTable>
  )
}

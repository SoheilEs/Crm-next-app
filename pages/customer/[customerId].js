import {useEffect,useState} from 'react'
import { useRouter } from 'next/router';
import DetailPage from '@/components/templates/DetailPAge';
export default function index() {
  const [customer, setCustomer] = useState(null);
  const router = useRouter();
  const { customerId } = router.query;
  const { isReady } = router;
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((res) => setCustomer(res.data));
    }
  }, [isReady]);
  if(customer)return (<DetailPage customer={customer}/>)
}

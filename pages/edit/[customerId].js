import EditPage from '@/components/templates/EditPage'
import React from 'react';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CustomerEdit() {
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
  if(customer)return (<EditPage customer={customer} id={customerId} changeHandler={setCustomer} />)
}


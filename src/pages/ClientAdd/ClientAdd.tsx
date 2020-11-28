import React, {useState} from 'react';
import ClientForm from './../../shared/components/ClientForm'
import './styles.scss';
import {Client} from '../../shared/interfaces/client';

const ClientAdd = () => {
  const [client, setClient] = useState<Client | null>(null);

  return (
    <div>
      Новая анкета
      <ClientForm
        client={client}
      />
    </div>
  )
}

export default ClientAdd

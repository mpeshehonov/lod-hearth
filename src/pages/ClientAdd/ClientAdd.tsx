import React from 'react';
import { Client } from '../../shared/interfaces/client';
import ClientForm from './../../shared/components/ClientForm'
import './styles.scss';

let client: Client | null = null;

const ClientAdd = () => {
  return (
    <div>
      Новая анкета
      <ClientForm {...client}/>
    </div>
  )
}

export default ClientAdd

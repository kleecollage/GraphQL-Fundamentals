import { v4 as uuid } from 'uuid';

// DATASET Users
export const users = [
  {
    id: uuid(),
    name: 'John',
    email: 'john@example.com',
    role: {
      name: 'admin',
    },
  },
  {
    id: uuid(),
    name: 'Jane',
    email: 'jane@example.com',
    role: {
      name: 'user',
    },
  },
  {
    id: uuid(),
    name: 'David',
    email: 'david@example.com',
    role: {
      name: 'superadmin',
    },
  },
  {
    id: uuid(),
    name: 'Sarah',
    email: 'sarah@example.com',
    role: {
      name: 'user',
    },
  },
]
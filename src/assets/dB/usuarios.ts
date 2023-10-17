interface User {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
  profilePhoto: string;
}

const users: User[] = [
  {
    email: "john@example.com",
    password: "password123",
    name: "John Doe",
    address: "123 Main St, Anytown",
    phone: "555-1234",
    profilePhoto: "profile1.jpg",
  },
  {
    email: "jane@example.com",
    password: "password456",
    name: "Jane Smith",
    address: "456 Elm St, Another Town",
    phone: "555-5678",
    profilePhoto: "profile2.jpg",
  },
  {
    email: "admin@gmail.com",
    password: "admin",
    name: "Jane Smith",
    address: "456 Elm St, Another Town",
    phone: "555-5678",
    profilePhoto: "profile2.jpg"
  }
];



export type CustomerT = {
  id: number;
  name: string;
};

export type CustomersT = Array<CustomerT>;

export const customers: CustomersT = [
  { id: 1, name: "something1" },
  { id: 2, name: "something2" },
];

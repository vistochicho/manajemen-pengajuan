"use client";

import React from "react";
import { Space, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  company_name: string;
  user: string;
  business_entities: string;
  email: string;
  phone_number: number;
  business_field: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name of Company",
    dataIndex: "company_name",
    key: "company_name",
  },
  {
    title: "Applicant",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Selected Business Entites",
    dataIndex: "business_entities",
    key: "business_entities",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Business Field",
    dataIndex: "business_field",
    key: "business_field",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Detail</a>
        <a>Approve Review</a>
      </Space>
    ),
  },
];

const dataSource = Array.from({ length: 100 }).map<DataType>((_, i) => ({
  key: `${i}`,
  company_name: `Tech Innovators Inc. ${i}`,
  user: `Alice Johnson ${i}`,
  business_entities: "LLC",
  email: "alice@techinnovators.com",
  phone_number: 1234567890,
  business_field: "Software Development",
}));

const Customer: React.FC = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="p-6">
        <Table<DataType> columns={columns} dataSource={dataSource} pagination={{ pageSize: 5 }} className="border-2 rounded-md" />
      </div>
    </div>
  );
};

export default Customer;

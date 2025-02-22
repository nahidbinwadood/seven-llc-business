import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import PaymentHistoryTable from "@/components/PaymentHistoryTable/PaymentHistoryTable";
import { useState } from "react";

const SecondTable = () => {
  const tabs = [
    { label: "Payment History", dataTitle: "paymentHistoryData" },
    { label: "Last month", dataTitle: "lastMonthData" },
    { label: "Year to date", dataTitle: "yearToDateData" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tableData = {
    paymentHistoryData: [
      {
        invoiceId: "inv10001",
        invoiceDate: "2025-02-10",
        product: "Laptop Pro",
        quantity: "1",
        amount: "799.99",
        paymentMethod: "Credit Card",
        datePaid: "2025-02-10",
        status: "Paid",
      },
      {
        invoiceId: "inv10002",
        invoiceDate: "2025-02-12",
        product: "Smartphone Z",
        quantity: "2",
        amount: "1199.98",
        paymentMethod: "PayPal",
        datePaid: "2025-02-12",
        status: "Paid",
      },
      {
        invoiceId: "inv10003",
        invoiceDate: "2025-02-13",
        product: "Wireless Headphones",
        quantity: "3",
        amount: "149.97",
        paymentMethod: "Debit Card",
        datePaid: "2025-02-13",
        status: "Pending",
      },
      {
        invoiceId: "inv10004",
        invoiceDate: "2025-02-14",
        product: "10-inch Tablet",
        quantity: "1",
        amount: "499.99",
        paymentMethod: "Bank Transfer",
        datePaid: "2025-02-14",
        status: "Paid",
      },
      {
        invoiceId: "inv10005",
        invoiceDate: "2025-02-15",
        product: "Mechanical Keyboard",
        quantity: "2",
        amount: "139.98",
        paymentMethod: "Credit Card",
        datePaid: "2025-02-15",
        status: "Pending",
      },
      {
        invoiceId: "inv10006",
        invoiceDate: "2025-02-16",
        product: "Ergonomic Mouse",
        quantity: "5",
        amount: "99.95",
        paymentMethod: "PayPal",
        datePaid: "2025-02-16",
        status: "Paid",
      },
    ],
    lastMonthData: [
      {
        invoiceId: "inv20001",
        invoiceDate: "2025-01-10",
        product: "Laptop Ultra",
        quantity: "1",
        amount: "899.99",
        paymentMethod: "Debit Card",
        datePaid: "2025-01-10",
        status: "Paid",
      },
      {
        invoiceId: "inv20002",
        invoiceDate: "2025-01-12",
        product: "Smartwatch",
        quantity: "2",
        amount: "399.98",
        paymentMethod: "PayPal",
        datePaid: "2025-01-12",
        status: "Paid",
      },
      {
        invoiceId: "inv20003",
        invoiceDate: "2025-01-13",
        product: "Bluetooth Speakers",
        quantity: "3",
        amount: "229.95",
        paymentMethod: "Bank Transfer",
        datePaid: "2025-01-13",
        status: "Pending",
      },
      {
        invoiceId: "inv20004",
        invoiceDate: "2025-01-14",
        product: "4K Monitor",
        quantity: "1",
        amount: "699.99",
        paymentMethod: "Credit Card",
        datePaid: "2025-01-14",
        status: "Paid",
      },
      {
        invoiceId: "inv20005",
        invoiceDate: "2025-01-15",
        product: "Gaming Mouse",
        quantity: "2",
        amount: "179.98",
        paymentMethod: "PayPal",
        datePaid: "2025-01-15",
        status: "Pending",
      },
      {
        invoiceId: "inv20006",
        invoiceDate: "2025-01-16",
        product: "Wireless Charger",
        quantity: "5",
        amount: "49.95",
        paymentMethod: "Debit Card",
        datePaid: "2025-01-16",
        status: "Paid",
      },
    ],
    yearToDateData: [
      {
        invoiceId: "inv30001",
        invoiceDate: "2025-02-10",
        product: "Laptop Deluxe",
        quantity: "1",
        amount: "999.99",
        paymentMethod: "Credit Card",
        datePaid: "2025-02-10",
        status: "Paid",
      },
      {
        invoiceId: "inv30002",
        invoiceDate: "2025-02-12",
        product: "Smartphone Pro",
        quantity: "2",
        amount: "1399.98",
        paymentMethod: "Bank Transfer",
        datePaid: "2025-02-12",
        status: "Paid",
      },
      {
        invoiceId: "inv30003",
        invoiceDate: "2025-02-13",
        product: "Noise Cancelling Headphones",
        quantity: "3",
        amount: "179.97",
        paymentMethod: "Debit Card",
        datePaid: "2025-02-13",
        status: "Pending",
      },
      {
        invoiceId: "inv30004",
        invoiceDate: "2025-02-14",
        product: "Smart Tablet",
        quantity: "1",
        amount: "599.99",
        paymentMethod: "PayPal",
        datePaid: "2025-02-14",
        status: "Paid",
      },
      {
        invoiceId: "inv30005",
        invoiceDate: "2025-02-15",
        product: "RGB Keyboard",
        quantity: "2",
        amount: "159.98",
        paymentMethod: "Credit Card",
        datePaid: "2025-02-15",
        status: "Pending",
      },
      {
        invoiceId: "inv30006",
        invoiceDate: "2025-02-16",
        product: "Gaming Mouse Pad",
        quantity: "5",
        amount: "79.95",
        paymentMethod: "Bank Transfer",
        datePaid: "2025-02-16",
        status: "Paid",
      },
    ],
  };

  return (
    <section className="border border-[#F8F9FA] rounded-[20px] bg-[#FFF] shadow-dashboardShadow md:pl-[30px] md:pr-[30px] px-4 md:pt-6 md:pb-[62px]">
      <div className="flex flex-col gap-6 md:gap-11">
        <div className="flex flex-col md:flex-row gap-11 items-center">
          {/* Tabs Header */}
          <div className="flex border-b gap-10 md:gap-5 xl:gap-[167px] md:w-[80%]">
            {tabs.map((tab) => (
              <button
                key={tab?.dataTitle}
                className={`xmd:px-4 pt-6 pb-2 xmd:py-[21px] text-xs xxs:text-lg xmd:text-xl font-semibold ${
                  activeTab?.dataTitle === tab?.dataTitle
                    ? "border-b-2 border-headingColor text-headingColor text-xl font-semibold"
                    : "text-navbarColor text-xl font-semibold"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/*  */}
          <div>
            <DateRangePicker />
          </div>
        </div>
        {/* Tabs Content */}
        <PaymentHistoryTable data={tableData[activeTab?.dataTitle]} />
      </div>
    </section>
  );
};

export default SecondTable;

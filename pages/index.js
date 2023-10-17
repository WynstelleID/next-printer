import React, { useState, useEffect } from "react";
import axios from "axios";

const PrintButton = () => {
  const [message, setMessage] = useState("");
  const [messageAPI, setMessageAPI] = useState("");
  const [_msg, setMsg] = useState("");

  // useEffect(() => {
  //   fetch("/api/print")
  //     .then((response) => response.json())
  //     .then((data) => setMessageAPI(data.message))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const handlePrint = async () => {
    try {
      const response = await axios.post("http://localhost:5000/", {
        message: _msg,
      });

      if (response.status === 200) {
        console.log("Print request sent successfully!");
      } else {
        console.error("Failed to send print request.");
      }
    } catch (error) {
      console.error("Error sending print request:", error);
    }
  };

  const handlePrintInside = async () => {
    try {
      const response = await axios.post("/api/print", {
        message: message,
      });

      if (response.status === 200) {
        console.log("Print request sent successfully!");
      } else {
        console.error("Failed to send print request.");
      }
    } catch (error) {
      console.error("Error sending print request:", error);
    }
  };

  useEffect(() => {
    setMsg(
      "[L]\n" +
        "[C]<u><font size='big'>CEK TOKO SEBELAH</font></u>\n" +
        "[L]\n" +
        "[C]================================\n" +
        "[L]\n" +
        "[L]<b>BEAUTIFUL SHIRT</b>[R]9.99e\n" +
        "[L]  + Size : S\n" +
        "[L]\n" +
        "[L]<b>AWESOME HAT</b>[R]24.99e\n" +
        "[L]  + Size : 57/58\n" +
        "[L]\n" +
        "[C]--------------------------------\n" +
        "[R]TOTAL PRICE :[R]34.98e\n" +
        "[R]TAX :[R]4.23e\n" +
        "[L]\n" +
        "[C]================================\n" +
        "[L]\n" +
        "[L]<font size='tall'>Customer :</font>\n" +
        "[L]Raymond DUPONT\n" +
        "[L]5 rue des girafes\n" +
        "[L]31547 PERPETES\n" +
        "[L]Tel : +33801201456\n" +
        "[L]\n" +
        "[C]<barcode type='ean13' height='10'>831254784551</barcode>\n" +
        "[C]<qrcode size='20'>https://dantsu.com/</qrcode>"
    );
  }, []);

  return (
    <div>
      <h1>Print to Thermal Printer</h1>
      {/* <p>Message from API: {messageAPI}</p> */}
      {/* <input
        type="text"
        placeholder="Enter message"
        value={_msg}
        onChange={(e) => setMessage(e.target.value)}
      /> */}
      <button type="button" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
};

export default PrintButton;

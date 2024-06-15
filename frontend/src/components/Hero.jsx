import React from "react";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div>
      <div className="text-center bg-white text-gray-800 h-screen py-24 px-12 bg-[url('https://www.vestinda.com/wp-content/uploads/2023/09/flash-loans-defi-1030x483.jpg')] bg-cover bg-center bg-no-repeat">
        <h1
          className="text-5xl md:text-6xl xl:text-7xl font-bold
            tracking-tight mb-12"
        >
          <span className="capitalize text-slate-100">
            SEC-TOOL FOR DOCUMENT AUTHENTICITY{" "}
          </span>
          <br />
          <span className=" text-slate-100">With Blockchain Timestamps.</span>
        </h1>
      </div>

      <div className="text-center h-auto bg-slate-500  text-gray-900  py-24 px-12 bg-cover bg-center bg-no-repeat">
        <h2
          className="text-2xl text-slate-100 md:text-6xl xl:text-7xl font-bold
            tracking-tight mb-12"
        >
          Why Sec-Tool for Document Authenticity
        </h2>
        <p className="text-center text-slate-100 text-2xl">
          This project aims to enhance document authenticity, build trust in
          information sharing,
          <br />
          mitigate tampering and forgery, reduce disputes and litigation risks,
          and comply with regulatory requirements.
          <br />
          Security tool verify document authenticity in Tanzania public
          organizations using blockchain timestamping,
          <br />
          incorporating features like authentication mechanism and blockchain
          integration.
        </p>

        <h3 className="pt-4 text-slate-100 md:text-6xl xl:text-7xl text-2xl font-bold tracking-tight mb-12">
          {" "}
          Blockchain Timestamps
        </h3>

        <p className="text-center text-slate-100 text-2xl">
          A timestamp on the blockchain is a record that pinpoints when a
          specific transaction or event occurred,
          <br />
          often detailing the exact date and time. These timestamps are
          foundational to blockchain technology, <br />
          ensuring that transactions are recorded in the sequence they occurred.{" "}
          <br />
          Moreover, when combined with cryptographic techniques, timestamps
          bolster the authenticity and integrity of data. <br />
          Any change in the block’s data would disrupt its timestamp, making any
          tampering evident.
          <br />
          In the decentralized blockchain world, where there’s no central
          governing body, <br />
          timestamps offer a trusted mechanism for validating transactions,{" "}
          <br />
          fostering consensus across the network’s nodes about the blockchain’s
          current state.
          <br />
        </p>
      </div>

      <div className="h-1">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;

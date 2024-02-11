"use client";

import Cat from "@/public/confused-cat.svg";
import Image from "next/image";

export default function Error() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Image src={Cat} alt="confused cat" width={200} />
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "2.5rem", marginBottom: "0"}}>Something Went Wrong</p>
        <p style={{fontSize: "1.5rem"}}> Try Again Later</p>

      </div>
    </div>
  );
}
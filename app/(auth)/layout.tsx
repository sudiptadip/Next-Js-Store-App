import React from "react";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex min-h-screen"}>
      <section
        className={
          "hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5"
        }
      >
        <div
          className={
            "flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12"
          }
        >
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt={"icon"}
            width={224}
            height={82}
          />
          <div className={"space-y-5 text-white"}>
            <h1 className={"h1"}>Manage your file best way</h1>
            <p className={"body-1"}>
              Store your files in the cloud and manage them from any device
              anywhere.
            </p>
          </div>
          <Image
            src={"/assets/images/files.png"}
            alt={"illustration"}
            width={342}
            height={342}
            className={"transition-all hover:rotate-2 hover:scale-105"}
          />
        </div>
      </section>
      <section className={"flex flex-1 flex-col"}></section>
      {children}
    </div>
  );
}

export default Layout;

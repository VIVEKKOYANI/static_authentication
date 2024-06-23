import React from "react";
import { Disclosure } from "@headlessui/react";
import NavDesktop from "./Nav-Desktop";
import NavMobile from "./Nav-Mobile";

function Navigation() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <NavDesktop open={open} />

          <NavMobile />
        </>
      )}
    </Disclosure>
  );
}

export default Navigation;
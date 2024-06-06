// components/Breadcrumbs.tsx

"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        {/* <Link href="/" passHref>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </Link> */}
      </BreadcrumbItem>
      
     
    </Breadcrumb>
  );
};

export default Breadcrumbs;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";

export default function Analytics() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      <div className="grid gap-6">
        {/* Card for Travel Records */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Travel Record TR12345
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {/* <Copy className="h-3 w-3" /> */}
                  <span className="sr-only">Copy Travel ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: June 12, 2024</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                {/* <Truck className="h-3.5 w-3.5" /> */}
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Track Travel
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    {/* <MoreVertical className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Travel Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Destination: Paris
                  </span>
                  <span>Date: June 10, 2024</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span>5 days</span>
                </li>
              </ul>
              <div className="font-semibold">Activities</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Eiffel Tower Visit
                  </span>
                  <span>$25.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Seine River Cruise
                  </span>
                  <span>$50.00</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <div className="font-semibold">Flight Information</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>Flight Number: AF1234</span>
                  <span>Departure: June 10, 2024</span>
                  <span>Return: June 15, 2024</span>
                </address>
              </div>
              <div className="grid auto-rows-max gap-3">
                <div className="font-semibold">Accommodation Information</div>
                <div className="text-muted-foreground">
                  Hotel: Marriott Champs-Elysées
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2024-06-12">June 12, 2024</time>
            </div>
            <PaginationContent className="ml-auto mr-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    {/* <ChevronLeftIcon className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">Previous Travel</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    {/* <ChevronRightIcon className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">Next Travel</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </PaginationContent>
          </CardFooter>
        </Card>

        {/* Card for Hosting Records */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Hosting Record HR67890
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {/* <Copy className="h-3 w-3" /> */}
                  <span className="sr-only">Copy Hosting ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: May 20, 2024</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                {/* <Truck className="h-3.5 w-3.5" /> */}
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Track Hosting
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    {/* <MoreVertical className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Hosting Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Property: Beach House
                  </span>
                  <span>Date: May 18, 2024</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span>3 days</span>
                </li>
              </ul>
              <div className="font-semibold">Expenses</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rental Cost</span>
                  <span>$300.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cleaning Fee</span>
                  <span>$50.00</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <div className="font-semibold">Guest Information</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>Guest: John Doe</span>
                  <span>Address: 5678 Beach Ave.</span>
                  <span>City: Miami, FL 33101</span>
                </address>
              </div>
              <div className="grid auto-rows-max gap-3">
                <div className="font-semibold">Payment Information</div>
                <div className="text-muted-foreground">
                  Payment Method: PayPal
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2024-05-20">May 20, 2024</time>
            </div>
            <Pagination className="ml-auto mr-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    {/* <ChevronLeftIcon className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">Previous Hosting</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    {/* <ChevronRightIcon className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">Next Hosting</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>

        {/* Card for Places Records */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Place Record PL89012
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {/* <Copy className="h-3 w-3" /> */}
                  <span className="sr-only">Copy Place ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: April 15, 2024</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                {/* <Truck className="h-3.5 w-3.5" /> */}
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Track Place
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    {/* <MoreVertical className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Place Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Name: Central Park
                  </span>
                  <span>Date: April 10, 2024</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span>New York, NY</span>
                </li>
              </ul>
              <div className="font-semibold">Activities</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Walking Tour</span>
                  <span>Free</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Boat Ride</span>
                  <span>$15.00</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <div className="font-semibold">Contact Information</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>Phone: +1 123 456 7890</span>
                  <span>Email: info@centralpark.com</span>
                </address>
              </div>
              <div className="grid auto-rows-max gap-3">
                <div className="font-semibold">Operating Hours</div>
                <div className="text-muted-foreground">Open: 6 AM - 1 AM</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2024-04-15">April 15, 2024</time>
            </div>
            <Pagination className="ml-auto mr-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    {/* <ChevronLeftIcon className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">Previous Place</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    {/* <ChevronRightIcon className="h-3.5 w-3.5" /> */}
                    <span className="sr-only">Next Place</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, Car, Phone, Mail, Clock, Printer } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: MapPin,
    title: "Prime Downtown Location",
    description: "In the heart of Wilmington's business district",
  },
  {
    icon: Building,
    title: "Modern Facilities",
    description: "50,000 sq ft of state-of-the-art conference space",
  },
  {
    icon: Car,
    title: "Easy Accessibility",
    description: "On-site parking and close to public transit",
  },
];

const venueDetails = {
  phone: "(910) 632-2900",
  fax: "910-632-2831",
  hours: "Mon-Fri: 8:00 AM - 6:00 PM",
};

export default function Venue() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Venue</h2>
          <p className="text-xl text-gray-600">Courtyard Wilmington Downtown/Historic District</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Contact & Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">{venueDetails.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Printer className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">{venueDetails.fax}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">{venueDetails.hours}</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-600 mb-3">229 N 2nd St, Wilmington, NC 28401</p>
                <a
                  href="https://maps.app.goo.gl/cZCm68DEb2GH1vgH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View on Google Maps
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

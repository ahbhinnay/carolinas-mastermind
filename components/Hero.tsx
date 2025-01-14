import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, DollarSign, Users } from "lucide-react";

export default function Hero() {
  const getCardSubtitle = (index: number) => {
    switch (index) {
      case 0:
        return "Mark your calendar";
      case 1:
        return "Prime location";
      case 2:
        return "Early bird rate";
      case 3:
        return "Register soon";
      default:
        return "";
    }
  };
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center">Mastermind of the Carolinas</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-center">
          Elevate your multifamily investment game | Hosted by Barry Coppedge
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { icon: Calendar, title: "Date", text: "Feb 21-22, 2025", color: "bg-blue-500" },
            { icon: MapPin, title: "Location", text: "Downtown Wilmington, NC", color: "bg-green-500" },
            { icon: DollarSign, title: "Price", text: "$299 per person", color: "bg-yellow-500" },
            { icon: Users, title: "Capacity", text: "Limited seats available", color: "bg-purple-500" },
          ].map((item, index) => (
            <Card key={index} className="bg-white text-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <a href="https://paypal.me/ACoppedge108?country.x=US&locale.x=en_US" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              Pay Now via PayPal
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

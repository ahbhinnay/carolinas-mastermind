import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "Full access to both conference days",
  "All materials and resources",
  "Meals and refreshments",
  "Networking events",
  "Digital resource package",
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Pricing & Registration</h2>
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Early Bird Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold mb-6">
              $299<span className="text-xl text-gray-600">/person</span>
            </p>
            <ul className="text-left mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="https://paypal.me/ACoppedge108?country.x=US&locale.x=en_US" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Pay Now Via PayPal
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-600">Payment accepted via PayPal. Group discount: 10% off for 3+ attendees.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

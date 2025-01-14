import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Urban Development Co.",
    quote:
      "The Carolinas Multifamily Summit was an invaluable experience. The insights gained and connections made have already positively impacted our business strategy.",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    company: "Innovative Properties LLC",
    quote:
      "As a first-time attendee, I was blown away by the quality of speakers and the networking opportunities. This event is a must for anyone in the multifamily real estate sector.",
    image: "/placeholder.svg",
  },
  {
    name: "Emily Rodriguez",
    company: "Sunrise Investments",
    quote:
      "The workshops were incredibly informative, and the ability to connect with industry leaders was priceless. I'll definitely be returning next year!",
    image: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">What Attendees Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

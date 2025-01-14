import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const speakers = [
  {
    name: "Jane Doe",
    title: "CEO, Real Estate Ventures",
    background: "20+ years in multifamily development",
    topic: "Future Trends in Multifamily Investments",
    image: "/placeholder.svg",
  },
  {
    name: "John Smith",
    title: "Principal, Smith & Associates",
    background: "Expert in real estate finance and market analysis",
    topic: "Maximizing ROI in Challenging Markets",
    image: "/placeholder.svg",
  },
]

export default function Speakers() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <CardHeader className="text-center p-0">
                  <CardTitle className="text-xl font-bold mb-1">{speaker.name}</CardTitle>
                  <p className="text-gray-600 mb-2">{speaker.title}</p>
                </CardHeader>
                <p className="text-sm text-gray-600 mb-2 text-center">{speaker.background}</p>
                <p className="text-sm font-medium text-center">Session: {speaker.topic}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


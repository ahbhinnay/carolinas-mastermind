import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const schedule = [
  {
    day: "Friday, February 21, 2025",
    events: [
      { time: "12:00 PM - 1:00 PM", title: "Registration and Networking Lunch", type: "break" },
      { time: "1:00 PM - 2:30 PM", title: "Keynote: Future of Multifamily Real Estate", type: "keynote" },
      { time: "2:45 PM - 4:15 PM", title: "Workshop: Market Analysis Techniques", type: "workshop" },
      { time: "4:30 PM - 5:00 PM", title: "Networking Break", type: "break" },
    ],
  },
  {
    day: "Saturday, February 22, 2025",
    events: [
      { time: "9:00 AM - 10:30 AM", title: "Panel: Financing Strategies for Developers", type: "panel" },
      { time: "10:45 AM - 12:15 PM", title: "Workshop: Maximizing ROI in Challenging Markets", type: "workshop" },
      { time: "12:15 PM - 1:30 PM", title: "Networking Lunch", type: "break" },
      { time: "1:30 PM - 3:00 PM", title: "Keynote: Emerging Trends in Multifamily Design", type: "keynote" },
      { time: "3:15 PM - 4:45 PM", title: "Workshop: Tech Integration in Property Management", type: "workshop" },
      { time: "4:45 PM - 5:00 PM", title: "Closing Remarks", type: "keynote" },
    ],
  },
]

export default function Schedule() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Event Schedule</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {schedule.map((day, dayIndex) => (
            <Card key={dayIndex} className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{day.day}</CardTitle>
              </CardHeader>
              <CardContent>
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="mb-4 last:mb-0">
                    <p className="text-sm font-medium text-gray-600">{event.time}</p>
                    <p className={`text-base font-semibold ${getEventTypeColor(event.type)}`}>
                      {event.title}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function getEventTypeColor(type: string) {
  switch (type) {
    case "keynote":
      return "text-blue-600"
    case "workshop":
      return "text-green-600"
    case "panel":
      return "text-purple-600"
    default:
      return "text-gray-800"
  }
}


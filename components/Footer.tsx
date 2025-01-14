import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 sm:col-span-2">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Carolinas Multifamily Real Estate Summit</h3>
          <p className="mb-4">Connecting developers and investors for unparalleled growth</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Speakers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>info@carolinasmultifamily.com</p>
          <p>+1 (555) 123-4567</p>
          <form className="mt-4">
            <Input type="email" placeholder="Enter your email" className="mb-2" />
            <Button type="submit" className="w-full">
              Subscribe to Newsletter
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm sm:text-base">&copy; 2025 Tooth and Nail Investments. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="#" className="text-xs sm:text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs sm:text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

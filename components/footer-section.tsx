import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-black text-white">
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-300 text-sm max-w-xs">
                Subscribe today an get notifications about the latest updates
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input type="email" placeholder="Your Email" className="bg-transparent border-gray-600 text-white" />
              <Button className="bg-white text-black hover:bg-gray-200 whitespace-nowrap">Subscribe</Button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Tools Column */}
            <div>
              <h4 className="font-bold mb-4">Tools</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">Widgets</li>
                <li className="text-sm text-gray-300">Finances</li>
                <li className="text-sm text-gray-300">API</li>
                <li className="text-sm text-gray-300">RSS</li>
                <li className="text-sm text-gray-300">Stock Porfolio</li>
                <li className="text-sm text-gray-300">Advance Charts</li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">FAQ</li>
                <li className="text-sm text-gray-300">Help</li>
                <li className="text-sm text-gray-300">Contact</li>
                <li className="text-sm text-gray-300">Report a Bug</li>
                <li className="text-sm text-gray-300">About</li>
                <li className="text-sm text-gray-300">Blog</li>
              </ul>
            </div>

            {/* Reviews Column */}
            <div>
              <h4 className="font-bold mb-4">Reviews</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">FAQ</li>
                <li className="text-sm text-gray-300">Help</li>
                <li className="text-sm text-gray-300">Contact</li>
                <li className="text-sm text-gray-300">Report a Bug</li>
                <li className="text-sm text-gray-300">About</li>
                <li className="text-sm text-gray-300">Blog</li>
              </ul>
            </div>

            {/* Brokers Column */}
            <div>
              <h4 className="font-bold mb-4">Brokers</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">FAQ</li>
                <li className="text-sm text-gray-300">Help</li>
                <li className="text-sm text-gray-300">Contact</li>
                <li className="text-sm text-gray-300">Report a Bug</li>
                <li className="text-sm text-gray-300">About</li>
                <li className="text-sm text-gray-300">Blog</li>
              </ul>
            </div>

            {/* Platforms Column */}
            <div>
              <h4 className="font-bold mb-4">Platforms</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">Widgets</li>
                <li className="text-sm text-gray-300">Finances</li>
                <li className="text-sm text-gray-300">API</li>
                <li className="text-sm text-gray-300">RSS</li>
                <li className="text-sm text-gray-300">Stock Porfolio</li>
                <li className="text-sm text-gray-300">Advance Charts</li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">FAQ</li>
                <li className="text-sm text-gray-300">Help</li>
                <li className="text-sm text-gray-300">Contact</li>
                <li className="text-sm text-gray-300">Report a Bug</li>
                <li className="text-sm text-gray-300">About</li>
                <li className="text-sm text-gray-300">Blog</li>
              </ul>
            </div>
          </div>

          {/* Logo and Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-xl font-bold">TradeHall Logo</h3>
              <p className="text-sm text-gray-300">Short Description</p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-gray-300 mb-2">Follow Us</p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-300" />
                <Twitter className="h-5 w-5 text-gray-300" />
                <Youtube className="h-5 w-5 text-gray-300" />
                <Instagram className="h-5 w-5 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Terms
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Privacy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Site Map
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Site Map Calendar
              </a>
            </div>
            <div className="flex space-x-2">
              <img src="/app-store.png" alt="App Store" className="h-8" />
              <img src="/google-play.png" alt="Google Play" className="h-8" />
              <img src="/app-gallery.png" alt="App Gallery" className="h-8" />
              <img src="/amazon-appstore.png" alt="Amazon Appstore" className="h-8" />
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Eget ullamcorper amet amet enim nisl ut. Justo odio adipiscing amet
            enim vitae! amet placerat amet. Accumsan tellus amet odio nisi mattis odio vivamus a. Morbi lacus arcu
            placerat nisi purus fermentum amet. Volutpat dolor mauris convallis non id amet adipisci sed et. Bibendum
            scelerisque et sit ultricies. Sed molestie dignissim ut urna egestas mi id est dui. Vel mattis.
          </p>
        </div>
      </div>
    </footer>
  )
}

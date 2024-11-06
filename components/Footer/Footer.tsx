"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 px-4 py-8 md:py-12 border-t">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Dolphin UI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Beautiful UI components for Next.js and Tailwind CSS
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Components", "Documentation"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Disclaimer"].map((item) => (
                <li key={item}>
                  <Link href="/legal-policy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <Link key={label} href="#" aria-label={label} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 dark:text-gray-300">
            © {currentYear} Dolphin UI. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <Link href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
              Made with ❤️ by Dolphin Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
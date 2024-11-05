"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ScrollArea } from "@/Components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion"

const LegalPolicies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null)

  const policies = [
    {
      id: "terms",
      title: "Terms of Service",
      content: `
        <h2 class="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p class="mb-4">By accessing and using Dolphin UI, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2 class="text-xl font-semibold mb-3">2. Use License</h2>
        <p class="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Dolphin UI's website for personal, non-commercial transitory viewing only.</p>
        
        <h2 class="text-xl font-semibold mb-3">3. Disclaimer</h2>
        <p class="mb-4">The materials on Dolphin UI's website are provided on an 'as is' basis. Dolphin UI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        
        <h2 class="text-xl font-semibold mb-3">4. Limitations</h2>
        <p class="mb-4">In no event shall Dolphin UI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Dolphin UI's website, even if Dolphin UI or a Dolphin UI authorized representative has been notified orally or in writing of the possibility of such damage.</p>
      `
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      content: `
        <h2 class="text-xl font-semibold mb-3">1. Information Collection</h2>
        <p class="mb-4">We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.</p>
        
        <h2 class="text-xl font-semibold mb-3">2. Information Use</h2>
        <p class="mb-4">Any of the information we collect from you may be used in one of the following ways:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>To personalize your experience</li>
          <li>To improve our website</li>
          <li>To improve customer service</li>
          <li>To process transactions</li>
        </ul>
        
        <h2 class="text-xl font-semibold mb-3">3. Information Protection</h2>
        <p class="mb-4">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
        
        <h2 class="text-xl font-semibold mb-3">4. Cookie Usage</h2>
        <p class="mb-4">We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
      `
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      content: `
        <h2 class="text-xl font-semibold mb-3">1. What Are Cookies</h2>
        <p class="mb-4">Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
        
        <h2 class="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
        <p class="mb-4">When you use and access the Service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>To enable certain functions of the Service</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
        </ul>
        
        <h2 class="text-xl font-semibold mb-3">3. Types of Cookies We Use</h2>
        <p class="mb-4">Session Cookies: We use Session Cookies to operate our Service.</p>
        <p class="mb-4">Preference Cookies: We use Preference Cookies to remember your preferences and various settings.</p>
        <p class="mb-4">Security Cookies: We use Security Cookies for security purposes.</p>
        
        <h2 class="text-xl font-semibold mb-3">4. Your Choices Regarding Cookies</h2>
        <p class="mb-4">If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.</p>
      `
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: `
        <h2 class="text-xl font-semibold mb-3">1. Website Disclaimer</h2>
        <p class="mb-4">The information provided by Dolphin UI on our website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.</p>
        
        <h2 class="text-xl font-semibold mb-3">2. External Links Disclaimer</h2>
        <p class="mb-4">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
        
        <h2 class="text-xl font-semibold mb-3">3. Professional Disclaimer</h2>
        <p class="mb-4">The Site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for professional advice.</p>
        
        <h2 class="text-xl font-semibold mb-3">4. Affiliates Disclaimer</h2>
        <p class="mb-4">The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links.</p>
      `
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Legal Policies</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
        Please review our policies to understand how we operate and protect your rights.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {policies.map((policy) => (
          <AccordionItem key={policy.id} value={policy.id}>
            <AccordionTrigger className="text-lg font-semibold py-4">
              {policy.title}
            </AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="h-[60vh] rounded-md border p-4">
                <div 
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: policy.content }}
                />
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default LegalPolicies
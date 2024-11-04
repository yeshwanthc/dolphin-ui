import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Waves, Palette, Zap, Code } from "lucide-react";

const Main = () => {
  return (
    <main className="flex-1">
      <section className="container w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Beautiful UI Components for Next.js and Tailwind
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Dolphin UI provides a set of accessible, reusable, and
                composable React components that make it super easy to create
                websites and apps.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 mb-2" />
                <CardTitle>Beautiful Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Crafted with attention to detail and a focus on user
                  experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 mb-2" />
                <CardTitle>Fast & Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Optimized for performance to ensure your site loads quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 mb-2" />
                <CardTitle>Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Seamlessly integrates with Next.js and Tailwind CSS projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="components" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Our Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Buttons", "Cards", "Forms", "Modals", "Navbars", "Tables"].map(
              (component) => (
                <div
                  key={component}
                  className="flex items-center p-4 border rounded-lg"
                >
                  <Waves className="h-6 w-6 mr-2" />
                  <span>{component}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section
        id="cta"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Start Building with Dolphin UI Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of developers creating amazing apps with our
                components.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

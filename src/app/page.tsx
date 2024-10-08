import Link from "next/link";
import Image from "next/image";
import faqs from "@/utils/data/faq.json";
import { Button } from "@/components/ui/button";
// import { useSession, useUser } from "@clerk/nextjs";
// import createClerkSupabaseClient from "@/utils/supabase/client";
import CarouselSection from "@/components/customComp/carousel-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  // const { session } = useSession();
  // const client = createClerkSupabaseClient(session);

  return (
    <main className="flex flex-col gap-10 py-10 sm:gap-20 sm:py-20">
      {/* <!-- Hero Section --> */}
      <section className="text-center">
        <h1 className="gradient-title flex flex-col items-center justify-center py-4 text-4xl font-extrabold tracking-tighter sm:text-6xl lg:text-8xl">
          Find Your Dream Job
          <span className="flex items-center gap-2">
            and get
            <Image
              src={"/logo.png"}
              alt="Hired Logo"
              width={200}
              height={200}
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-xs text-gray-300 sm:mt-4 sm:text-xl">
          Explore thousands of job listings or Find the perfect candidate
        </p>
      </section>

      {/* <!-- Button --> */}
      <section className="flex justify-center gap-6">
        <Link href={"/jobs"}>
          <Button variant={"blue"} size={"xl"}>
            Find Jobs
          </Button>
        </Link>
        <Link href={"/post-job"}>
          <Button variant={"destructive"} size={"xl"}>
            Post a Job
          </Button>
        </Link>
      </section>

      {/* <!-- Carousel --> */}
      <CarouselSection />

      {/* <!-- Banner --> */}
      <section>
        <Image
          src={"/banner.jpeg"}
          alt="bannerImage"
          width={400}
          height={400}
          className="w-full"
        />
      </section>

      {/* <!-- Cards --> */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* <!-- FAQ Accordion --> */}
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index: number) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

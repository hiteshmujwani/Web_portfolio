import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { ExternalLink, Globe, Handshake, Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  return (
    <div>
      <div className="flex flex-col gap-6 py-10 sm:py-14 dark:text-[#eeeeed]">
        {/* title section  */}
        <div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">
            Collaboration Starts with a Conversation!
          </div>
          <div className="text-xs sm:text-lg md:text-xl font-bold">
            🔥Let’s bring ideas to life!.
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <div className="text-2xl md:text-3xl font-bold ">
              Let's Get Started
            </div>
            <div className="text-lg md:text-xl font-medium">
              Have a project in mind or just want to say hello? I’d love to hear
              from you! Whether it’s a collaboration, a question, or just a
              friendly chat, feel free to drop me a message. Let’s create
              something amazing together!
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <Phone className="h-5 w-5" />
                <div>+91 9602681408</div>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="h-5 w-5" />
                <div>Hiteshmujwaniofficial@gmail.com</div>
              </div>
              <div className="flex gap-2 items-center">
                <Globe className="h-5 w-5" />
                <Link className="flex" href={"hiteshmujwani.online"}>
                  Hiteshmujwani.online
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-3 md:mt-0">
            <Card className="">
              <CardHeader>
                <CardTitle className={"text-xl "}>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4 grid-cols-2">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="Email">Email</Label>
                      <Input id="Email" placeholder="Your Email Address" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5 mt-3">
                    <Label htmlFor="Description">Description Or Message</Label>
                    <Textarea
                      id="Description"
                      placeholder="Write Something About You Or Your Project !"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

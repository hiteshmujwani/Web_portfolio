import {
  Geist,
  Geist_Mono,
  Poppins,
  Playfair_Display,
  Lora,
  DM_Serif_Display,
  Exo_2,
  IBM_Plex_Sans,
  Raleway,
  Fira_Sans,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";

/* Load Only Required Fonts */
const geistSans = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});
const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const firaSans = Fira_Sans({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my skills and projects",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playfair.variable} ${lora.variable} ${dmSerif.variable} ${exo.variable} ${ibmPlex.variable} ${raleway.variable} ${firaSans.variable}`}
    >
      <ThemeProvider>
        <body className="antialiased bg-[#EEEEED]/90 dark:bg-[#000000]/90">
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

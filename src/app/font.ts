import localFont from "next/font/local"
import { Noto_Serif_Display } from "next/font/google"
export const general_sans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal"
    }
  ]
})

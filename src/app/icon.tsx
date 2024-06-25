import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 128,
  height: 128
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="128" rx="64" fill="black" />
          <path
            d="M69 19.842L94.6404 76.6766C94.6404 83.1651 93.3987 88.7724 90.9155 93.4986C88.5124 98.2248 85.0278 101.87 80.4618 104.433C75.8959 106.916 70.4087 108.158 64.0004 108.158C57.6721 108.158 52.265 106.916 47.7792 104.433C43.2933 101.95 39.8088 98.5051 37.3255 94.0994C34.8423 89.6936 33.5206 84.5669 33.3604 78.7193H46.6978C46.858 82.4041 47.5789 85.5682 48.8606 88.2117C50.2224 90.775 52.1449 92.7777 54.6281 94.2195C57.1915 95.5813 60.3155 96.2622 64.0004 96.2622C67.7653 96.2622 70.9294 95.5413 73.4927 94.0994C76.0561 92.6575 77.9786 90.5347 79.2603 87.7311C80.6221 84.8473 81.3029 81.3628 81.3029 77.2774L54.6281 19.842H69Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size
    }
  )
}

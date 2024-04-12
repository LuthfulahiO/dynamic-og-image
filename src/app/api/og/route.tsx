import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    /*Add API call here using fetch to get the event details, you can pick the event ID from the request URL
      Remember this runs on the server so all your logs will be in your terminal incase you need to test,
      Also because the route would get called on every page verify the actual, event page you need or just return a fallback ImageResponse */

    //Sample url http://localhost:3000/api/og?event_name=UDC this url is just to test what you are working with, it would work on the actual event page and any other page

    const eventName = searchParams.get("event_name");
    return new ImageResponse(
      (
        // You can modify this html to fit the design
        <div
          style={{
            fontSize: 40,
            color: "black",
            background: "yellow",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {`👋 Hello ${eventName}`}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

import * as React from "react";
import { Link } from "gatsby";
export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

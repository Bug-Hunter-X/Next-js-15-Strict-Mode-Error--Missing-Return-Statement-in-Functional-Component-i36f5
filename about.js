```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will throw an error in Next.js 15 if you don't include a return statement.
  // Missing return statement. The error message is not very clear but relates to React's strict mode in Next 15
}
```
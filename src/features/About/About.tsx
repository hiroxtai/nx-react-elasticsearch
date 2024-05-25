import { Link, Outlet } from 'react-router-dom';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome to About!</h1>
      <ul>
        <li>
          <Link to="./about1">AboutChild1</Link>
        </li>
        <li>
          <Link to="./about2">AboutChild2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default About;

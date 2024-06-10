import { TwitterFollowCard } from "./TwitterFollowCard";
import "./app.css";

const users = [
  {
    userName: "antariex",
    name: "Ariel Antequiera",
    initialIsFollowing: true,
  },
  {
    userName: "_TechMode",
    name: "TechMode",
    initialIsFollowing: false,
  },
  {
    userName: "tim_cook",
    name: "Tim Cook",
    initialIsFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollowing }) => 
          <TwitterFollowCard
            key={userName} // Adding a key prop is a good practice for list items
            userName={userName}
            initialIsFollowing={initialIsFollowing}
            name={name}
          />
        )}
    </section>
  );
}

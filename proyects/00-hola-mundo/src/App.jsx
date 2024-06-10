import { TwitterFollowCard } from "./TwitterFollowCard";
import "./app.css";

export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="antariex"
        name="Ariel Antequiera"
        initialIsFollowing={true}
      />
      <TwitterFollowCard
        userName="_TechMode"
        name="TechMode"
      />
      <TwitterFollowCard
        userName="tim_cook"
        name="Tim Cook"
      />
    </>
  );
}

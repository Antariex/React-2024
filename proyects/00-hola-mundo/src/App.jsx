import { TwitterFollowCard } from "./TwitterFollowCard";
import "./app.css";

export function App() {
  return (
    <>
      <TwitterFollowCard
        isFollowing
        userName="antariex"
        name="Ariel Antequiera"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="_TechMode"
        name="TechMode"
      />
      <TwitterFollowCard
        isFollowing
        userName="tim_cook"
        name="Tim Cook"
      />
    </>
  );
}

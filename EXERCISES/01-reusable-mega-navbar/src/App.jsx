import { Navbar } from "./_components/Navbar";
import "./App.css";
import { Footer } from "./_components/Footer";
import { Card } from "./_components/ProfileCard";

export default function App() {
  let profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games.",
    },
    {
      id: 2,
      name: "Tiffany",
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry.",
    },
    {
      id: 3,
      name: "Doug",
      title: "Back-End developer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust.",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="flex-container">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              name={profile.name}
              title={profile.title}
              bio={profile.bio}
            ></Card>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
